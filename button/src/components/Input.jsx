import React, { useState, useRef } from 'react'
import * as Styled from "../styled";

function Input() {
    const nameRef = useRef(null)

    const [inputValue, setValue] = useState(
      {
        name : "",
        price:"0"
      }
    )

      const handleChange = (e) => {
        const {name, value} = e.target;
        if (name === 'name') {
          setValue({...inputValue, [name]:value}); // 이름만 변경 
        } else if (name === 'price') {
          const allNumber = value.replace(/[^0-9]/g, '');
          const addComma = new Intl.NumberFormat().format(allNumber);
          setValue({...inputValue, [name]:addComma}); // 가격만 변경 
        }
      };
      

      const handleClick = () => { 
        if(inputValue.name === ""){
          alert('이름?')
          nameRef.current.focus()
        }else{
          alert(`이름: ${inputValue.name}, 가격: ${inputValue.price}`);
          setValue({name :"", price:"0"})       
        }
      };
      
  return (
<div>

    <Styled.Text>Input</Styled.Text>
    
    <Styled.FlexRow gap="1.5rem">
    <div>
    <Styled.Label>이름</Styled.Label>
    <Styled.Input 
        ref={nameRef}
        type="text" 
        name="name"
        value={inputValue.name} 
        onChange={handleChange} /> 
    </div>

    <div>
    <Styled.Label>가격</Styled.Label>
    <Styled.Input 
        type="text"
        value={inputValue.price}
        name="price"
        onChange={handleChange} />
    </div>

     <Styled.StBtn onClick={handleClick} >저장</Styled.StBtn>
    </Styled.FlexRow>
</div>
  )
}

export default Input