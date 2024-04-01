import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
 
 
const LoginForm = () => {
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);
  const [authenticated, setauthenticated] = useState(localStorage.getItem("authenticated"));
  const [form] = Form.useForm();

  //let authenticated = localStorage.getItem("authenticated")
    console.log("authenticated", authenticated)

  
  const onFinish = (values) => {
    // Perform validation, authentication, and redirection here
    if (values.username && values.password) {
      setRedirectToDashboard(true);
      localStorage.setItem("authenticated", true);
      console.log("Hellli")
    } else {
      alert('Invalid username or password');
    }
  };
 
  if (redirectToDashboard) {
    return <Navigate replace to="/dashboard" />;
  }
 //console.log("authenticated", authenticated)
  return (
    <>
    <Form
      form={form}
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
 
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
 
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
    {authenticated && <Navigate redirect to="/dashboard" />}
    </>
  );
};
 
export default LoginForm


