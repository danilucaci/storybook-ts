import * as React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding-top: ${({ theme }) => theme.spacing.ui.button.s};
  padding-bottom: ${({ theme }) => theme.spacing.ui.button.s};
  padding-left: ${({ theme }) => theme.spacing.ui.button.s};
  padding-right: ${({ theme }) => theme.spacing.ui.button.s};
  color: ${({ theme }) => theme.colors.grey.grey900};
  border: 1px solid ${({ theme }) => theme.colors.grey.grey900};
  background-color: ${({ theme }) => theme.colors.grey.grey50};
`;

export interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>;
};

export default Button;
