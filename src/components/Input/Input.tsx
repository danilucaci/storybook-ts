import * as React from "react";
import styled from "styled-components";

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

export const StyledInput = styled.input`
  display: block;
  padding: 0.5rem;
`;

export interface InputProps {
  type: "text" | "checkbox";
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  id: string;
  htmlFor: string;
  labelText: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  onChange,
  value = "",
  id = "input001",
  htmlFor = id,
  labelText,
}: InputProps) => {
  return (
    <>
      <StyledLabel htmlFor={htmlFor}>{labelText}</StyledLabel>
      <StyledInput type={type} id={id} onChange={onChange} value={value} />
    </>
  );
};

export default Input;
