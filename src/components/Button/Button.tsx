import * as React from "react";
import styled, { DefaultTheme } from "styled-components";

export type BaseButtonProps = {
  onClick: () => void;
  label: string;
  htmlType: "button" | "submit";
  className?: string;
};

export type PrimaryButtonProps = BaseButtonProps & {
  primary: boolean;
  outlined: never;
};

export type OutlinedButtonProps = BaseButtonProps & {
  primary: never;
  outlined: boolean;
};

export type ButtonProps = PrimaryButtonProps | OutlinedButtonProps;

export type StyledButtonProps = BaseButtonProps & {
  theme: DefaultTheme;
  primary?: boolean;
  outlined?: boolean;
};

function backgroundColorSelector({
  primary,
  outlined,
  theme,
}: StyledButtonProps): string {
  if (outlined) {
    return theme.colors.grey.grey50;
  }
  if (primary) {
    return theme.colors.primary.primary50;
  }

  return theme.colors.grey.grey50;
}

function colorSelector({
  primary,
  outlined,
  theme,
}: StyledButtonProps): string {
  if (outlined) {
    return theme.colors.grey.grey900;
  }
  if (primary) {
    return theme.colors.primary.primary600;
  }

  return theme.colors.grey.grey900;
}

const StyledButton = styled.button<StyledButtonProps>`
  padding-top: ${({ theme }) => theme.spacing.ui.button.s};
  padding-bottom: ${({ theme }) => theme.spacing.ui.button.s};
  padding-left: ${({ theme }) => theme.spacing.ui.button.sm};
  padding-right: ${({ theme }) => theme.spacing.ui.button.sm};
  color: ${colorSelector};
  border: 1px solid ${colorSelector};
  background-color: ${backgroundColorSelector};
`;

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  htmlType,
  primary,
  outlined,
}: ButtonProps) => {
  return (
    <StyledButton
      primary={primary}
      outlined={outlined}
      type={htmlType}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

function App() {
  return <Button outlined onClick={() => {}} htmlType="button" label="hola" />;
}

export default Button;
