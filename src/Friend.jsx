export default function Friend({friend}) {
    return (
        <div className="container">
            <p><small>userName: {friend.username} </small></p>
            <h4>Name: {friend.name}</h4>
            <p>Email: {friend.email} </p>
        </div>
    )
}