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

            {users.map((item) => {
                <div>
                    {item.id} {item.name} {item.lastname} {item.age} {item.tg_login}
                </div>
            })};

            {users.map((itemCard) => {


                {/* //карточки товара */ }

                <Card title={itemCard.id} bordered={false}>
                    {itemCard.name} {itemCard.lastname} {itemCard.age} {itemCard.tg_login}
                </Card>



            })}



            {/* таблица */}

            <Table dataSource={users} columns={columns} />;


        </>
    )

}

export default Users