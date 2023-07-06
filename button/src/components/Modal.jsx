import React from 'react'
import { useState } from 'react';
import * as Styled from "../styled";

function Modal() {

    const [modal, setModal] = useState(false);
    const [modal2, setModal2] = useState(false);

    const openModal = () => {
        setModal(true);
    };
  
    const closeModal = () => {
        setModal(false);
    };


    const openModal2 = () => {
      setModal2(true);
  };

  const closeModal2 = () => {
    setModal2(false);
  };

  
  return (
    <>
  <Styled.Text>Modal</Styled.Text>

  <Styled.FlexRow gap="1rem" >
     <div>
      <Styled.StBtn type="medium" onClick={openModal}>openModal</Styled.StBtn>
      {modal && (
      <>
         <Styled.ModalFull opacity="0.8" />
         <Styled.ModalBox type="ModalLarge">
           <div>닫기와 확인 버튼 2개가 있고,외부 영역을 눌러도 모달이 닫히지 않아요.</div>
           <Styled.ModalBtn>
             <Styled.StBtn fontColor="red" color={"pink"} onClick={closeModal}>닫기</Styled.StBtn>
             <Styled.StBtn>확인</Styled.StBtn>
           </Styled.ModalBtn>
         </Styled.ModalBox>
       </>
      )}
      </div>
     
      <div>
      <Styled.StBtn fontColor="red" onClick={openModal2} type="primary" color={"pink"}>
             open modal
            </Styled.StBtn>
            
      {modal2 && (
      <>
         <Styled.ModalFull opacity="0.8" onClick={closeModal2}/>
         <Styled.ModalBox type="ModalMedium" onClick={(e) => e.stopPropagation()} >
           <div>
            닫기 버튼 1개가 있고<br />  외부 영역을 누르면 모달이 닫혀요.
           </div>
           <Styled.XBox onClick={closeModal2} >x</Styled.XBox>
         </Styled.ModalBox>
      </>
      )}
      </div>
      </Styled.FlexRow>

  </>
  );
}

export default Modal