import React, { Component } from 'react';
import { Button, Container, ListGroup, ListGroupItem } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
    constructor() {
        super();
        this.state = {
            items: [
                { id: uuid(), name: "Milk" },
                { id: uuid(), name: "Coffee" },
                { id: uuid(), name: "Tea Bag" },
                { id: uuid(), name: "Corn" },
            ]
        }
    }
    render() {
        let {items} = this.state;
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

export default ShoppingList;