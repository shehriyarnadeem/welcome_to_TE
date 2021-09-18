import React, { Component, createRef,useImperativeHandle,forwardRef } from 'react';

class MainComponent extends Component {
    myRef = createRef(); // create simple ref

    toggleChildVisibility = () => this.myRef.current.toggleButton(); // method to hide or show child component

    render() {
        return (
            <>
                <button onClick={this.toggleChildVisibility}>toggle child component</button>
                <ChildComponent ref={this.myRef} />  {/* set ref for controlling child component */}
            </>
        );
    }
};

const ChildComponent = forwardRef((props, ref) => {
    const [active, setActive] = useState(true)
    useImperativeHandle(ref, () => ({
        toggleButton() {
            setActive(!active)
        },
    }))

    return active ? <div>child component</div> : null
})
