import styled from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
   variant: ButtonVariant;
}

const buttonVariant = {
   primary: 'purple',
   secondary: 'orange',
   danger: 'red',
   success: 'green'
}


export  const ButtonContainer = styled.button<ButtonContainerProps>`
   width: 100px;
   height: 70px;

   ${props => {
      return `background-color: ${buttonVariant[props.variant]}`
   }}
`