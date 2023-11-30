import {MouseEventHandler} from 'react'

export type ButtonPropsType = {
    disabled?: boolean;
    designs: string;
    btnType?: "button" | "submit" | 'reset';
    title: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  };