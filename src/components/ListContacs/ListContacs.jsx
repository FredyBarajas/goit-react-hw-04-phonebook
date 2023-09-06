import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListName, ListNumber, ListDelete } from './StyledList';

const ListContacts = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map((contact, index) => (
        <ListItem key={index}>
          <ListName>{contact.name}</ListName>
          <ListNumber>{contact.number}</ListNumber>
          <ListDelete onClick={() => onDeleteContact(index)}>X</ListDelete>
        </ListItem>
      ))}
    </List>
  );
};

ListContacts.propTypes = {
  onDeleteContact: PropTypes.func,
  contacts: PropTypes.array,
};

export default ListContacts;
