import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isColorListVisible: false,
      selectedColor: null,
    };
  }

  toggleColorList = () => {
    this.setState((prevState) => ({
      isColorListVisible: !prevState.isColorListVisible,
    }));
  };

  selectColor = (color) => {
    this.setState({ selectedColor: color, isColorListVisible: false });
  };

  render() {
    const { colors } = this.props;
    const { isColorListVisible, selectedColor } = this.state;

    return (
      <div className="color-picker">
        <button className="pick-button" onClick={this.toggleColorList}>
          Pick a color
        </button>
        {isColorListVisible && (
          <div className="color-list">
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-option"
                style={{ backgroundColor: color }}
                onClick={() => this.selectColor(color)}
              ></div>
            ))}
          </div>
        )}
        {selectedColor && (
          <div className="selected-color">
            <p>Selected Color:</p>
            <div className="color-display" style={{ backgroundColor: selectedColor }}></div>
          </div>
        )}
      </div>
    );
  }
}

export default ColorPicker;