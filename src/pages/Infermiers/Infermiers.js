import React from 'react'
import { Table, Badge, Menu, Dropdown, Space ,Alert} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { EditFilled,DeleteFilled,PlusCircleOutlined,CheckCircleTwoTone} from '@ant-design/icons';
import { Link, Route, Switch } from 'react-router-dom';


const columns = [
    {
      title: 'Nom',
      width: 100,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Prénom',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      fixed: 'left',
    },
    { title: 'Email', dataIndex: 'address', key: '1' },
    
    {
      title: 'Actions',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: () => <a > <Link to="/EditInfermier"><EditFilled style={{color:"green"}} /></Link>   <DeleteFilled style={{color:"red"}} /></a>,
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
    },
  ];


export default function Infermiers() {
  return (
    <>
    <Alert
      message="Infermiers"
      description="Vous trouvez ci-join la liste des infermiers ."
      type="success"
      showIcon
    />
    <br></br>
    <div style={{textAlign: "end"}} >
    <Link  to="/AddInfermier"><PlusCircleOutlined style={{fontSize:"30px",color:"#018037"}} /></Link>
    <b style={{padding: "5px",margin:"5px"}}>Ajouter Infermier</b>
  
    </div> 
    <br></br>
    <hr></hr>
    <br></br>
    <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
    </>
    
  )
}
