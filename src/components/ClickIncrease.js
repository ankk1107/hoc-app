import withIncreased  from './withIncreased.js'

function Index(props) {
    console.log(props)
    return (
        <button onClick={props.setCount}> {props.count}  </button>
    )
}

export default withIncreased(Index, 6)