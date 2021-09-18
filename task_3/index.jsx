import { useState, Fragment, memo } from 'react';
const DEFAULT_USER = { name: 'unknown', age: null }
const MainComponent = ({
    user = DEFAULT_USER // default value for `props.user`
}) => {
    const [ _, updateComponent ] = useState(); // change state for force component updating

    return (
        <Fragment>
            <button onClick={updateComponent}>update MainComponent</button>
            <ChildComponent user={user} />
        </Fragment>
    );
};

// memoized component
const ChildComponent = memo(({ user: { name, age } }) => {
    return (
        <div>user name: {name}, user age: {age}</div>
    );
});
