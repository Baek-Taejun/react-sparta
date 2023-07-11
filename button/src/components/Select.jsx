import React from 'react'
import * as Styled from "../styled";
import { useState,} from 'react';

function Select() {

    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [choice, setChoice] = useState("리액트");
    const [choice2, setChoice2] = useState("리액트");
  
    
    return (
      <Styled.SelectLayout>
      <Styled.SelectBox >
        <Styled.Text>Select</Styled.Text>
        
        <Styled.FlexBtn>
        <Styled.ButtonJul>
        <Styled.SelectBtn onClick={() => { setModal(!modal);} }>
            <div>{choice}</div>
            <div>▼</div>
          </Styled.SelectBtn>
        {modal && (
          <>
          <Styled.ChoiceBox style={{ zIndex: 2 }}  position="absolute" >
            <Styled.ChoiceDiv onClick={() => { setChoice("리액트"); setModal(false); }}>리액트</Styled.ChoiceDiv>
            <Styled.ChoiceDiv onClick={() => { setChoice("자바"); setModal(false); }}>자바</Styled.ChoiceDiv>
            <Styled.ChoiceDiv onClick={() => { setChoice("스프링"); setModal(false); }}>스프링</Styled.ChoiceDiv>
            <Styled.ChoiceDiv onClick={() => { setChoice("리액트네이티브"); setModal(false); }}>리액트네이티브</Styled.ChoiceDiv>
          </Styled.ChoiceBox>
             <Styled.ModalFull opacity="0" style={{ zIndex: 1 }} onClick={() => { setModal(false);} }/>
             </>  
      )}</Styled.ButtonJul>
    
       <Styled.ButtonJul>
          <Styled.SelectBtn onClick={() => { setModal2(!modal2);}}>
            <div>{choice2}</div>  
            <div>▼</div>
          </Styled.SelectBtn>
  
        {modal2 && (
          <>
          <Styled.ChoiceBox style={{ zIndex: 2 }} >
            <Styled.ChoiceDiv onClick={() => { setChoice2("리액트"); setModal2(false); }}>리액트</Styled.ChoiceDiv>
            <Styled.ChoiceDiv onClick={() => { setChoice2("자바"); setModal2(false); }}>자바</Styled.ChoiceDiv>
            <Styled.ChoiceDiv onClick={() => { setChoice2("스프링"); setModal2(false); }}>스프링</Styled.ChoiceDiv>
            <Styled.ChoiceDiv onClick={() => { setChoice2("리액트네이티브"); setModal2(false); }}>리액트네이티브</Styled.ChoiceDiv>
          </Styled.ChoiceBox>
            <Styled.ModalFull opacity="0" style={{ zIndex: 1 }} onClick={() => { setModal2(false);} }/>
            </>
        )} </Styled.ButtonJul>
      </Styled.FlexBtn>
      </Styled.SelectBox>
      </Styled.SelectLayout>
      
    );
    
}

export default Select