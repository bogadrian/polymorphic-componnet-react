import React from 'react';
import '../App.css';

interface IProps<T extends React.ElementType = React.ElementType> {
  as?: T;
  children?: React.ReactNode;
}

const defaultElement = 'button';

type ContentProps<T extends React.ElementType> = IProps<T> &
  Omit<React.ComponentProps<T>, keyof IProps>;

function Content<T extends React.ElementType = typeof defaultElement>({
  as,
  children,
  ...props
}: ContentProps<T>) {
  const TagName = as || defaultElement;
  return (
    <>
      {children && (
        <TagName className="App" {...props}>
          {children}
        </TagName>
      )}
      {!children && <TagName className="App" {...props} />}
    </>
  );
}

export const Comp = () => {
  return (
    <Content as="a" href="https://github.com">
      <h2>Click</h2>
    </Content>
  );
};
