import { useState } from 'react';
import { Form, Input, Button } from './ContactForm.style';

export const ContactForm = ({onSubmit}) => {
  const [contact, setContact] = useState({name: '', number: ''})

  const handleChange = (e) => {
    const {name, value} = e.target
    setContact((prevContact) => ({...prevContact, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(contact);
    setContact({name: '', number: ''})

  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        required
        placeholder="Enter name"
        value={contact.name}
        onChange={handleChange}
      />
      <Input
        type="tel"
        name="number"
        required
        placeholder="Enter number"
        value={contact.number}
        onChange={handleChange}
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
