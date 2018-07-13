import React, { Component } from 'react';
import { Button, Container, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {connect} from 'react-redux';
import {getItems, deleteItem, addItem} from '../actions/itemActions';
import PropTypes from 'prop-types'
import AddItemModal from './AddItemModal';


class ShoppingList extends Component {

    componentDidMount(){
        this.props.getItems();
    }
    
    handleDelete = (id)=>{
        this.props.deleteItem(id)
    }

    render() {
        let {items} = this.props.item;
        return (
            <Container>
                <AddItemModal />
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ _id, name }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem >
                                    <Button
                                        className="close"
                                        onClick={() => this.handleDelete(_id)}
                                    >&times;</Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))
                        }
                    </TransitionGroup>

                </ListGroup>
            </Container>
        )
    }
}

ShoppingList.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    item: state.item
})

export default connect(mapStateToProps, {getItems, deleteItem, addItem})(ShoppingList);