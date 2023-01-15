import React from 'react';
import Button from '../components/Button/Button';
import Display from '../components/Display/Display';
import './Calculator.css';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '0',
    };
  }

  calc = () => {
    const { displayValue } = this.state;
    const value = eval(displayValue);

    this.setState({
      displayValue: isNaN(value) || value === Infinity ? '0' : String(value),
    });
  };

  clear = () => {
    this.setState({
      displayValue: '0',
    });
  };

  addDigit = (digit) => {
    const { displayValue } = this.state;
    const lastDigit = displayValue[displayValue.length - 1];

    const operators = ['+', '*', '-', '/'];
    if (operators.includes(digit) && operators.includes(lastDigit)) {
      return;
    }

    this.setState({
      displayValue: displayValue === '0' ? digit : (displayValue + digit),
    });
  };

  render() {
    const { displayValue } = this.state;

    return (
      <div className="calculator">
        <div className="calculator__display">
          <Display value={displayValue} />
        </div>
        <div className="calculator__buttons">
          <Button label="AC" triple onFunc={this.clear} />
          <Button label="/" operation onFunc={this.addDigit} />
          <Button label="7" onFunc={this.addDigit} />
          <Button label="8" onFunc={this.addDigit} />
          <Button label="9" onFunc={this.addDigit} />
          <Button label="*" operation onFunc={this.addDigit} />
          <Button label="4" onFunc={this.addDigit} />
          <Button label="5" onFunc={this.addDigit} />
          <Button label="6" onFunc={this.addDigit} />
          <Button label="-" operation onFunc={this.addDigit} />
          <Button label="1" onFunc={this.addDigit} />
          <Button label="2" onFunc={this.addDigit} />
          <Button label="3" onFunc={this.addDigit} />
          <Button label="+" operation onFunc={this.addDigit} />
          <Button label="0" double onFunc={this.addDigit} />
          <Button label="." onFunc={this.addDigit} />
          <Button label="=" operation onFunc={this.calc} />
        </div>
      </div>
    );
  }
}
