import { useEffect, useState } from "react"
import Friend from "./Friend"

export default function UseEffect() {
    const [user, setUser] = useState([])
    // const abc = () => {}
    // useEffect(abc, [])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])

    return (
        <>
        <div className="container">
            <h3>useEffect</h3>
            <p>length of the user API: {user.length} </p>
        </div>

        <Friends></Friends>
        </>
    )
}

/**
 * 1. declare a state to hold the data
 * 2. useEffect with callback and dependency array
 * 3. use fetch to load the data (in callback function)
 * 4. set loaded data to the state
 * 5. display data on the component
 */

function Friends() {
    const [fnds, setfrnds] = useState([])       //jodi kuno data na pawa jay tahole empty array defaultly thakbe
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setfrnds(data))
    }, [])

    return (
        <>
        <div className="container" style={{
            backgroundColor: 'lightcyan'
        }}>
            <h3>Friends</h3>
            <p>length of the friends API: {fnds.length} </p>
            {
                fnds.map(fnd => <Friend friend={fnd}></Friend>)
            }
        </div>
        </>
    )
}