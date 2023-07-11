import { styled, css } from "styled-components";

const Text = styled.div`
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  padding: 10px;
`;
// --------------Button-----------------------------
const LabelAdd = styled.div`
  display: flex;
  align-items: center;
`;

const FlexRow = styled.div`
  display: flex;
  gap: ${({ gap }) => gap};
  padding: 10px;
`;

const StBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
  box-sizing: border-box;
  border: none;
  color: ${({ theme, fontColor }) =>
    fontColor === "red" ? theme.color.red : theme.color.black};
  padding: 2px 6px;
  padding: 2px 6px;
  border-radius: 8px;
  background-color: ${({ theme, color }) =>
    color === "pink" ? theme.color.pink : theme.color.green};

  &:active {
    background-color: ${({ theme, color }) =>
      color === "pink" ? theme.color.darkpink : theme.color.darkgreen};
  }

  ${({ type }) =>
    type === "primary"
      ? css`
          width: 200px;
          height: 50px;
          background-color: transparent;
          border: 3px solid
            ${({ theme, color }) =>
              color === "pink" ? theme.color.pink : theme.color.green};
        `
      : type === "medium"
      ? css`
          width: 135px;
          height: 45px;
        `
      : css`
          width: 100px;
          height: 40px;
        `}
`;
// --------------Input--------------------------------

const Input = styled.input`
  border: 1px solid rgb(51, 51, 51);
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;
`;

const Label = styled.span`
  font-size: 20px;
`;
// ----------------------Modal---------------------------

const ModalFull = styled.div`
  width: 100%;
  height: 100vh;
  inset: 0px;
  position: fixed;
  opacity: ${({ opacity }) => opacity};
  background-color: rgb(221, 221, 221);
`;

const ModalBox = styled.div`
  position: absolute;
  border-radius: 12px;
  box-sizing: border-box;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({ type }) =>
    type === "ModalLarge"
      ? css`
          width: 500px;
          height: 300px;
        `
      : type === "ModalMedium"
      ? css`
          width: 300px;
          height: 200px;
        `
      : css`
          width: 200px;
          height: 100px;
        `}
`;

const ModalBtn = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const XBox = styled.button`
  cursor: pointer;
  border: 1px solid gray;
  position: absolute;
  font-size: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: 12px;
  right: 12px;
`;
// -------------------Select------------------------------

const SelectLayout = styled.div`
  position: relative;
`;

const SelectBox = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  overflow: hidden;
  margin-top: 50px;
`;

const FlexBtn = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const ButtonJul = styled.div`
  display: flex;
  flex-direction: column;
`;
const SelectBtn = styled.button`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 300px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 28px;
`;

const ChoiceBox = styled.div`
  height: 160px;
  width: 300px;
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  position: ${({ position }) =>
    position === "absolute" ? "absolute" : "relative"};
  top: ${({ position }) => (position === "absolute" ? "155px" : "10px")};
`;

const ChoiceDiv = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  padding-left: 25px;
  &:hover {
    background-color: #dcdcdc;
  }
`;

const Dot = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50px;
  background-color: red;
  top: 0px;
  left: 9px;
`;

export {
  Text,
  StBtn,
  FlexRow,
  Input,
  Label,
  ModalBox,
  ModalFull,
  ModalBtn,
  XBox,
  SelectBox,
  FlexBtn,
  SelectBtn,
  ChoiceBox,
  ButtonJul,
  ChoiceDiv,
  LabelAdd,
  Dot,
  SelectLayout,
};
