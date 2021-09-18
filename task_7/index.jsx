import React, { useState, Fragment } from 'react'

const BlockParent = () => {
    const mouseEnterCallbak = () => {
        console.log('Mouse entered')
    }
    const imgSrc = 'https://via.placeholder.com/150'
    const imgAlt = 'Alt name'
    const content = 'Anything'

    return (
        <Fragment>
            <Block mouseEnterCallbak={mouseEnterCallbak}>
                <img src={imgSrc} alt={imgAlt} />
            </Block>
            <Block mouseEnterCallbak={mouseEnterCallbak}>
                <p>BLock2 content: {content}</p>
            </Block>
        </Fragment>
    )
}

const Block = React.memo(({ mouseEnterCallbak, children }) => {
    const [isActive, setActive] = useState(false)

    const mouseEnterHandler = () => {
        setActive(true)
        mouseEnterCallbak()
    }

    return (
        <div
            onMouseDown={mouseEnterHandler}
            className={isActive ? 'active' : ''}
        >
            {children}
        </div>
    )
})

export default App
