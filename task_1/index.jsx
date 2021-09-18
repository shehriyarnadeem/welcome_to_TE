import { Component } from 'react';

// functional component
const FirstComponent = React.memo(({ name }) => {
    <div>my name is {name}</div>
});

// class component
class SecondComponent extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.name === nextProps.name) {
            return false
        } else {
            return true
        }
    }
    render() {
        return (
            <div>my name is {this.props.name}</div>
        )
    }
}
