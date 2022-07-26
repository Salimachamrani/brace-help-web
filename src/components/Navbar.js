import React, { useState } from 'react';
import logo from '../img/logo.png';
import { Link, Route, Switch } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { HomeOutlined,LogoutOutlined ,DashboardOutlined,TeamOutlined,ProfileOutlined } from '@ant-design/icons';
import Infermiers from '../pages/Infermiers/Infermiers';
import  Home  from '../pages/Home';
import AddInfermier from '../pages/Infermiers/AddInfermier';
import EditInfermiers from '../pages/Infermiers/EditInfermiers';
import Patients from '../pages/patients/patients';
import AddPatient from '../pages/patients/addPatients';
import EditPatient from '../pages/patients/editPatients';
import './Navbar.css';


const { SubMenu } = Menu;
const { Header,  Sider,Content, Footer } = Layout;

function Navbar() {
 
  return (
    <Layout style={{minHeight:"630px"}}>
    <Header className="header" style={{backgroundColor:"white"}}>
    <div className="logo" style={{height: "56px"}} >
      <img src={logo} style={{height:"56px",backgroundPositionY:"center"}} />
      </div>

      
    </Header>
    <Layout >
      <Sider width={200} className="site-layout-background"  >
        <Menu 
        
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 ,backgroundColor:"#018037" ,color:"white"}}
        >
         
            <Menu.Item  key="1" icon={<HomeOutlined />}><Link  to="/"></Link>Acceuil</Menu.Item>
            <Menu.Item key="2" icon={<ProfileOutlined />}><Link  to="/Infermiers"></Link>Infermiers</Menu.Item>
            <Menu.Item key="3" icon={<TeamOutlined />}><Link  to="/Patients"></Link>Patients</Menu.Item>
            <Menu.Item key="4" icon={<DashboardOutlined />}><Link  to="/Infermiers"></Link>Dashboard</Menu.Item>
            <Menu.Item key="5" icon={<LogoutOutlined />}>Déconnexion</Menu.Item>

        
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          
        <Switch>
        <Route path='/' exact  component={Home} />
        <Route path='/Infermiers' exact  component={Infermiers} />
        <Route path='/AddInfermier' exact  component={AddInfermier} />
        <Route path='/EditInfermier' exact  component={EditInfermiers} />
        <Route path='/Patients' exact component={Patients} />
        <Route path='/AddPatient' exact  component={AddPatient} />
        <Route path='/EditPatient'   component={EditPatient} />

        </ Switch>
  
         
        </Content>
        <Footer style={{ textAlign: 'center' }}>Brace<span style={{color:"#018037"}}>Help</span> ©2022 - Tous les droits sont réservés</Footer>

      </Layout>

    </Layout>
  </Layout>
  );
}

export default Navbar;
