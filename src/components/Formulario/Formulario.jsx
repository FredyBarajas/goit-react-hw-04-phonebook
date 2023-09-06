import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, FormLabel, FormInput, Formbutton } from './StyledFormulario';

class Formulario extends Component {
  static propTypes = {
    addContact: PropTypes.func,
    contacts: PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
      inputIds: {
        name: nanoid(),
        number: nanoid(),
      },
      errors: {
        name: '',
        number: '',
      },
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    let nameError = '';
    let numberError = '';

    const { contacts } = this.props;
    if (contacts.some(contact => contact.name === name)) {
      alert('El nombre ya existe en la lista de contactos.');
      return;
    }

    if (!name) {
      nameError = 'Por favor ingrese un nombre';
    } else {
      const nameRegex = /^[a-zA-ZáéíóúñÁÉÍÓÚÑ\s'-]+$/;
      if (!nameRegex.test(name)) {
        nameError =
          'El nombre solo puede contener letras, apóstrofes, guiones y espacios';
      }
    }

    if (!number) {
      numberError = 'Por favor ingrese un número de teléfono';
    } else {
      const phoneRegex =
        /^\+?(\d{1,4}[-.\s]?)?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
      if (!phoneRegex.test(number)) {
        numberError = 'Por favor ingrese un número de teléfono válido';
      }
    }

    if (nameError || numberError) {
      this.setState({
        errors: {
          name: nameError,
          number: numberError,
        },
      });
    } else {
      this.props.addContact({ name, number });
      this.setState({ name: '', number: '', errors: { name: '', number: '' } });
    }
  };

  render() {
    const { name, number, errors, inputIds } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormLabel htmlFor={inputIds.name}>
          Name
          <FormInput
            type="text"
            name="name"
            value={name}
            id={inputIds.name}
            onChange={this.handleInputChange}
          />
        </FormLabel>
        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
        <br />
        <FormLabel htmlFor={inputIds.number}>
          Telephone
          <FormInput
            type="tel"
            name="number"
            value={number}
            onChange={this.handleInputChange}
            id={inputIds.number}
          />
        </FormLabel>
        {errors.number && <div style={{ color: 'red' }}>{errors.number}</div>}
        <br />
        <Formbutton type="submit">Add</Formbutton>
      </Form>
    );
  }
}

export default Formulario;
