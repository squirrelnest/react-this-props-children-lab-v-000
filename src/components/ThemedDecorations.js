import React from 'react';
import ReactDOM from 'react-dom';

class ThemedDecoration extends React.Component {
  render() {

    const childrenWithClass = React.Children.map(this.props.children, child => {
      return (
        <div className="heaven">{child}</div>
      );
    });

    return (
    <div>
      {childrenWithClass}
    </div>
    )
  }
}

export default ThemedDecoration;
