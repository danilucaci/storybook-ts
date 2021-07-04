import * as React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: ${({ theme }) => theme.spacing.ui.button.md};
  color: ${({ theme }) => theme.colors.primary.text};
`;

export interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;
