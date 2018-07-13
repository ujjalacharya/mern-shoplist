import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input,
    Container
} from 'reactstrap';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class AddItemModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name: ''
        };
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newitem = { id: uuid(), name: this.state.name }
        this.props.addItem(newitem)
        this.toggle();
    }

    render() {
        return (
            <Container className="mb-3">
                <Button color="dark" onClick={this.toggle}>Add Item</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Enter the item name</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Input type="text" name="name" id="itemname" className="mb-2" onChange={this.handleChange} value={this.state.name} />
                                <Button color="dark" block>Add</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, { addItem })(AddItemModal);