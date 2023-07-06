import React from 'react'
import * as Styled from "../styled";
import { useState } from "react";



function Input() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('0');


      const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === '이름') {
          setName(value);
        } else if (name === '가격') {
          const allNumber = value.replace(/[^0-9]/g, '');
          const addComma = new Intl.NumberFormat().format(allNumber);
          setPrice(addComma);
        }
      };
      

      const handleClick = () => {
        alert(`이름: ${name}, 가격: ${price}`);
      };
      
  return (
<div>

    <Styled.Text>Input</Styled.Text>
    
    <Styled.FlexRow gap="1.5rem">
    <div>
    <Styled.Label>이름</Styled.Label>
    <Styled.Input 
        type="text" 
        name="이름" 
        onChange={handleChange} /> 
    </div>

    <div>
    <Styled.Label>가격</Styled.Label>
    <Styled.Input 
        type="text"
        value={price}
        name="가격"
        onChange={handleChange} />
    </div>

     <Styled.StBtn onClick={handleClick} >저장</Styled.StBtn>
    </Styled.FlexRow>
</div>
  )
}

export default Input