// src/components/ExpenseList.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  padding: 10px;
  background: #fff;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const ExpenseList = ({ expenses }) => (
  <List>
    {expenses.map((expense) => (
      <ListItem key={expense.id}>
        <div>
          <strong>{expense.description}</strong> - ${expense.amount} on {new Date(expense.date).toLocaleDateString()}
        </div>
        <Link to={`/detail/${expense.id}`}>Detail</Link>
      </ListItem>
    ))}
  </List>
);

export default ExpenseList;
