import { useState } from 'react';

const UpdatedComponent = (OriginalComponent, initialCount) => {
    function WrappedComponent(props) {
        const [count, setCount] = useState(initialCount || 0)

        return <OriginalComponent {...props} count={count} setCount={(step)=> setCount(count + (step || 1))}></OriginalComponent>
    }

    return WrappedComponent;
}

export default UpdatedComponent;