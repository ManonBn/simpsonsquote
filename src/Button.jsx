import React, { Component } from 'react';

class Button extends Component {
    



 render() {
    const button = this.state.working ? 'true' : 'false';
    return (
        <div>
            <button onClick={this.handleClick}>
                Click Me !
            </button>
        </div>
    );
}
}

export default Button ;