import React, { useEffect, useState } from "react";



function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('/users')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setUsers(res)
            })
    }, [])

    return (
        <>
            {users.map((item) => (
                <div>
                    {item.id} {item.name}
                </div>
            ))}
        </>
    )

}

export default Users