// src/components/ExpenseForm.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  margin-bottom: 20px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const ExpenseForm = ({ addExpense }) => {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense(formData);
    setFormData({
      description: '',
      amount: '',
      date: '',
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <Input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
        required
      />
      <Input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <Button type="submit">Add Expense</Button>
    </Form>
  );
};

export default ExpenseForm;
