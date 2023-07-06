import "../App.css";
import * as Styled from "../styled";
import {BsChevronRight} from "react-icons/bs"
import {HiOutlineBell} from "react-icons/hi"

function Button() {
    return (
      <div>
        <div>
          <Styled.Text>Button</Styled.Text>
          <Styled.FlexRow gap="0.5rem">
            <Styled.StBtn  onClick={() => alert("하마")} type="primary">
              Large Primary Button
             <BsChevronRight/>
            </Styled.StBtn>
            <Styled.StBtn type="medium">Medium</Styled.StBtn>
            <Styled.StBtn>Small</Styled.StBtn>
          </Styled.FlexRow>
          <br />
          <Styled.FlexRow gap="0.5rem">
          <Styled.StBtn
            fontColor="red"
            onClick={() => prompt("돼지")}
            type="primary"
            color={"pink"}
            >
            Large Primary Button
             <div style={{position:"relative"}}><HiOutlineBell style={{color:"black"}}/><Styled.Dot/></div>
            </Styled.StBtn>

            <Styled.StBtn  fontColor="red" type="medium" color={"pink"}>
              Medium
            </Styled.StBtn>
            <Styled.StBtn fontColor="red" color={"pink"}>Small</Styled.StBtn>
          </Styled.FlexRow>
         
    
        </div>
      </div>
    );
  }



  export default Button;