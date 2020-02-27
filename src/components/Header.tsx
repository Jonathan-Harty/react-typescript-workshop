import React, { FunctionComponent } from 'react'

interface HeaderProps {
  title: string;
};

export const Header: FunctionComponent<HeaderProps> = ({ title }) => {
  return (
    <h2>
      {title}
    </h2>
  )
}
