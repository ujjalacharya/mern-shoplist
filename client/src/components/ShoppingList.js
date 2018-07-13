import React, { Component } from 'react';
import { Button, Container, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import {connect} from 'react-redux';
import {getItems} from '../actions/itemActions';
import PropTypes from 'prop-types'


class ShoppingList extends Component {

    componentDidMount(){
        this.props.getItems();
    }
    
    render() {
        let {items} = this.props.item;
        return (
            <Container>
                <Button color="secondary" className="mb-2"
                    onClick={() => {
                        const name = prompt('Enter new item')
                        this.setState(state => ({
                            items: [...state.items, { id: uuid(), name }]
                        }))
                    }}
                >Add Item</Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem >
                                    <Button
                                        className="close"
                                        onClick={() => {
                                            this.setState(state =>({
                                                items: items.filter(item => item.id !== id) 
                                            }))
                                        }}
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

export default connect(mapStateToProps, {getItems})(ShoppingList);