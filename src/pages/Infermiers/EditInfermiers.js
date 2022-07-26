import React from 'react'

import { Form, Input, message, Button, Space,Alert } from 'antd';

export default function EditInfermier() {
    const [form] = Form.useForm();

    const onFinish = () => {
      message.success('Submit success!');
    };
  
    const onFinishFailed = () => {
      message.error('Submit failed!');
    };
  
  
  return (
      <>
       <Alert
      message="Modifier les infermiers"
      description="Pour modifier les informations d'un infermier, veuillez remplir le formulaire suivant ."
      type="success"
      showIcon
    />
    <br></br>
    <Form style={{marginRight:"100px",marginLeft:"100px"}}
    form={form}
    layout="vertical"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      name="nom"
      label="Nom"
      rules={[{ required: true }, { type: 'text', warningOnly: true }, { type: 'string', min: 6 }]}
    >
      <Input placeholder="nom" />
    </Form.Item>
    <Form.Item
      name="prenom"
      label="Prénom"
      rules={[{ required: true }, { type: 'text', warningOnly: true }, { type: 'string', min: 6 }]}
    >
      <Input placeholder="prénom" />
    </Form.Item>
    <Form.Item
      name="email"
      label="Email"
      rules={[{ required: true }, { type: 'email', warningOnly: true }, { type: 'string', min: 6 }]}
    >
      <Input placeholder="Email" />
    </Form.Item>
    <Form.Item
      name="password"
      label="Mot de passe"
      rules={[{ required: true }, { type: 'password', warningOnly: true }, { type: 'string', min: 6 }]}
    >
    <Input.Password placeholder="Mot de passe" style={{marginLeft:"0"}} />
    </Form.Item>
    <Form.Item>
      <Space>
        <Button  htmlType="submit" style={{backgroundColor:"#7c8ea9"}}>
          Modifier
        </Button>
        <Button htmlType="reset" >
          Annuler
        </Button>
      </Space>
    </Form.Item>
  </Form>
 </>
  )
}
