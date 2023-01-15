import React from 'react';
import Button from '../components/Button/Button';
import './Calculator.css';

export default class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calculator">
        <div className="calculator__buttons">
          <Button label="AC" />
          <Button label="/" />
          <Button label="7" />
          <Button label="8" />
          <Button label="9" />
          <Button label="*" />
          <Button label="4" />
          <Button label="5" />
          <Button label="6" />
          <Button label="-" />
          <Button label="1" />
          <Button label="2" />
          <Button label="3" />
          <Button label="+" />
          <Button label="0" />
          <Button label="." />
          <Button label="=" />
        </div>
      </div>
    );
  }
}
