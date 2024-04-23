import React from 'react';
import { Tabs } from 'antd';
import Users from './Users';
import Update from './Update';
import CreateUser from './CreateUser';
const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: 'Просмотр',
        children: <Users />,
    },
    {
        key: '2',
        label: 'Создание',
        children: <CreateUser />,
    },
    {
        key: '3',
        label: 'Обновление',
        children: <Update />,
    },
];
const App = () => <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
export default App;