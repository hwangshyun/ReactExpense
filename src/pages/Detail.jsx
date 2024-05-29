// src/pages/Detail.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';

const DetailContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #364351;
  color: white;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [expense, setExpense] = useState(null);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const expense = storedExpenses.find((exp) => exp.id === id);
    setExpense(expense);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense({
      ...expense,
      [name]: value,
    });
  };

  const handleSave = () => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const updatedExpenses = storedExpenses.map((exp) =>
      exp.id === expense.id ? expense : exp
    );
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    navigate('/');
  };

  const handleDelete = () => {
    const storedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const updatedExpenses = storedExpenses.filter((exp) => exp.id !== id);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
    navigate('/');
  };

  if (!expense) return <div>로딩중...</div>;

  return (
    <DetailContainer>
      <Input
        type="text"
        name="description"
        value={expense.description}
        onChange={handleChange}
        required
      />
      <Input
        type="number"
        name="amount"
        value={expense.amount}
        onChange={handleChange}
        required
      />
      <Input
        type="date"
        name="date"
        value={expense.date}
        onChange={handleChange}
        required
      />
      <Button onClick={handleSave}>저장</Button>
      <Button onClick={handleDelete} style={{ backgroundColor: 'black', color:'white' }}>삭제</Button>
    </DetailContainer>
  );
};

export default Detail;
