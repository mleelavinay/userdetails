import { Button, Form, Input, Select } from 'antd';
import React from 'react';

const UserDetailsForm = ({ initialValues, onCancel, form, onFinish,btnName }) => {
 
  const { Option } = Select;
  
  return (
    <Form form={form} initialValues={initialValues} onFinish={onFinish}>
      <Form.Item name='id' label='ID' rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name='username'
        label='Username'
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name='email' label='Email' rules={[{ type: 'email', required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name='role' label='Role' rules={[{ required: true, message: 'Please select a role!' }]}>
        <Select placeholder='Select a role'>
          <Option value='admin'>Admin</Option>
          <Option value='user'>User</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type='primary' onClick={onCancel} style={{ marginRight: '10px' }}>
          Cancel
        </Button>
        <Button type='primary' htmlType='submit'>
          {btnName}
        </Button>
      </Form.Item>
    </Form>
  );
};
 
export default UserDetailsForm;