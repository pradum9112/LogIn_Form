import styled from "styled-components";

export default function Button({ content }) {
  return <StyledButton>{content}</StyledButton>;
}

const StyledButton = styled.button`

  background-color: #1575a7;
  width: 65%;
  height: 3rem;
  border: none;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #1565a9;
  }
`;
