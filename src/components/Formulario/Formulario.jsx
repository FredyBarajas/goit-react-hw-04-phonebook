import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form, FormLabel, FormInput, Formbutton } from './StyledFormulario';

const Formulario = ({ addContact, contacts }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    errors: {
      name: '',
      number: '',
    },
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const { name, number } = formData;

    let nameError = '';
    let numberError = '';

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
      setFormData({
        ...formData,
        errors: {
          name: nameError,
          number: numberError,
        },
      });
    } else {
      addContact({ name, number });
      setFormData({
        name: '',
        number: '',
        errors: {
          name: '',
          number: '',
        },
      });
    }
  };

  const { name, number, errors } = formData;

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </FormLabel>
      {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
      <br />
      <FormLabel>
        Telephone
        <FormInput
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
        />
      </FormLabel>
      {errors.number && <div style={{ color: 'red' }}>{errors.number}</div>}
      <br />
      <Formbutton type="submit">Add</Formbutton>
    </Form>
  );
};

Formulario.propTypes = {
  addContact: PropTypes.func,
  contacts: PropTypes.array,
};

export default Formulario;
