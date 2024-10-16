import { useState } from "react"        //ai line ke huk bole

export default function Counter() {
    const [count, setCount] = useState(0)
    function handleAdd() {
        const newCount = count + 1;
        setCount(newCount)
    }
    function handleReduce() {
        const newCount = count - 1;
        setCount(newCount)
    }
    return (
        <>
        <div className="container">
            <h3>Counter: {count} </h3>
            <button className="gap" onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Decrease</button>
        </div>

        <Team></Team>
        </>
    )
}

function Team() {
    const [team, setTeam] = useState(11)

    function adding() {
        const newTeam = team + 1;
        setTeam(newTeam)
    }

    function reducing() {
        // const newTeam = team - 1;
        setTeam(team - 1)
    }
    return (
        <>
        <div className="container" style={{
            backgroundColor: 'lightpink'
        }}>
            <h3>Players: {team} </h3>
            <button onClick={adding} className="gap">Add</button>
            <button className="gap" onClick={reducing}>Reduce</button>
        </div>
        </>
    )
}