import React from 'react'
import * as Styled from "../styled";
import { useState,} from 'react';

function Select() {

    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);
    const [choice, setChoice] = useState("리액트");
    const [choice2, setChoice2] = useState("리액트");

    // 25줄, 42번줄 
    const SelectBtnHandler = (setState) => () => {
      setState(pre => !pre) // setState가 가지고 있는 기존값(pre) => 가져와서 변경해줄꺼야. 
    }

    const ChoiceDivHandler = (setChoice, setModal) => (event) => {
      setChoice(event.target.innerText)
      setModal(false)
    } // 37번 줄에 적용 
  
    
    return (
      <Styled.SelectLayout>
      <Styled.SelectBox >
        <Styled.Text>Select</Styled.Text>
        
        <Styled.FlexBtn>
        <Styled.ButtonJul>
        <Styled.SelectBtn onClick={SelectBtnHandler(setModal)}>
            <div>{choice}</div>
            <div>▼</div>
          </Styled.SelectBtn>
        {modal && (
          <>
          <Styled.ChoiceBox style={{ zIndex: 2 }}  position="absolute" >
            <Styled.ChoiceDiv onClick={ChoiceDivHandler(setChoice, setModal)}>리액트</Styled.ChoiceDiv>
            <Styled.ChoiceDiv onClick={ChoiceDivHandler(setChoice, setModal)}>자바</Styled.ChoiceDiv>
            <Styled.ChoiceDiv onClick={ChoiceDivHandler(setChoice, setModal)}>스프링</Styled.ChoiceDiv>
            <Styled.ChoiceDiv onClick={ChoiceDivHandler(setChoice, setModal)}>리액트네이티브</Styled.ChoiceDiv>
          </Styled.ChoiceBox>
             <Styled.ModalFull opacity="0" style={{ zIndex: 1 }} onClick={() => { setModal(false);} }/>
             </>  
      )}</Styled.ButtonJul>
    
       <Styled.ButtonJul>
       <Styled.SelectBtn onClick={SelectBtnHandler(setModal2)}>
            <div>{choice2}</div>  
            <div>▼</div>
          </Styled.SelectBtn>
  
        {modal2 && (
          <>
          <Styled.ChoiceBox style={{ zIndex: 2 }} >
            <Styled.ChoiceDiv onClick={ChoiceDivHandler(setChoice2, setModal2)}>리액트</Styled.ChoiceDiv>
            <Styled.ChoiceDiv onClick={ChoiceDivHandler(setChoice2, setModal2)}>자바</Styled.ChoiceDiv>
            <Styled.ChoiceDiv onClick={ChoiceDivHandler(setChoice2, setModal2)}>스프링</Styled.ChoiceDiv>
            <Styled.ChoiceDiv onClick={ChoiceDivHandler(setChoice2, setModal2)}>리액트네이티브</Styled.ChoiceDiv>
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