import React, { useEffect, useState } from "react";
import { Card, Flex, Table } from 'antd';
import { EditOutlined, CloseOutlined } from '@ant-design/icons';


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

    const update = (id_user_for_update) => {
        alert(id_user_for_update)

    }

    const deleteUser = (id_user_for_delete) => {
        alert(id_user_for_delete)

    }

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
                            {item.id} {item.name} {item.lastname} {item.age} {item.tg_login} <EditOutlined onClick={() => update(item.id)} />
                            <CloseOutlined onClick={() => deleteUser(item.id)} />
                        </div>
                    })
                }
            </div>

            <div>
                <h1>Отрисовка через карточки</h1>
                {users.length > 0 && (
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                        {users.map((itemCard) => {
                            return (
                                <Card title={itemCard.id} bordered={false} style={{ width: 300 }}>
                                    {itemCard.name} {itemCard.lastname} {itemCard.age} {itemCard.tg_login}
                                </Card>
                            );
                        })}
                    </div>
                )}
            </div>


            {/* таблица */}

            < Table dataSource={users} columns={columns} />;


        </>
    )

}

export default Users