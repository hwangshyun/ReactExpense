// src/components/MonthSelector.jsx
import React from 'react';
import styled from 'styled-components';

const Selector = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px;
  background-color: ${(props) => (props.active ? '#304357' : '#ccc')};
  color: white;
  border: none;
  cursor: pointer;
  margin: 0 5px;
`;

const MonthSelector = ({ selectedMonth, setSelectedMonth }) => {
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <Selector>
      {months.map((month) => (
        <Button
          key={month}
          active={selectedMonth === month}
          onClick={() => setSelectedMonth(month)}
        >
          {month}
        </Button>
      ))}
    </Selector>
  );
};

export default MonthSelector;
