import React, { useEffect, useState } from "react";
import { Card, Table } from 'antd';


function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('/users')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setUsers(res.response)
            })
    }, [])


    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'lastname',
            dataIndex: 'lastname',
            key: 'lastname',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'tg_login',
            dataIndex: 'tg_login',
            key: 'tg_login',
        },
    ];



    return (
        <>
            <div><h1>простая отрисовка</h1>
                {users.length > 0 &&

                    users.map((item) => {
                        return <div>
                            {item.id} {item.name} {item.lastname} {item.age} {item.tg_login}
                        </div>
                    })
                }
            </div>

            <div><h1>отрисовка через карточки</h1>
                {users.length > 0 &&

                    users.map((itemCard) => {


                        {/* //карточки товара */ }

                        return <Card title={itemCard.id} bordered={false}>
                            {itemCard.name} {itemCard.lastname} {itemCard.age} {itemCard.tg_login}
                        </Card>



                    })}

            </div>

            {/* таблица */}

            <Table dataSource={users} columns={columns} />;


        </>
    )

}

export default Users