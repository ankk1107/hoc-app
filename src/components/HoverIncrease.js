import withIncreased  from './withIncreased.js'

function Index(props) {
    return (
        <button onMouseOver={()=>props.setCount(3)}> {props.count}  </button>
    )
}

export default withIncreased(Index, 10)