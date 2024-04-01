import React, { useState } from 'react';
import { Button, Form, Layout } from 'antd';
import UserForm from "./user-form";
import UserDetails from './userDetails';

const EditableTable = () => {

  const { Content, Footer } = Layout;


  const [editData, setEditData] = useState(null);
  const [usersData, setUsersData] = useState([])
  const [showAddUser, setShowAdduser] = useState(false);

  const [form] = Form.useForm();

  const handleEdit = (record) => {
    setEditData(record);
  };
  const onFinish = (values) => {
    setUsersData([...usersData, values]);
    form.resetFields();
    setShowAdduser(false)
  };


  const handleDelete = (value) => {
    let changedData = usersData.filter((item) => item?.id !== value?.id);
    setUsersData(changedData);
  };

  const handleAddUSer = () => {
    setShowAdduser(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    window.location.replace('/');
  };

  const handleUpdateUser = (userdata) => {
    let data = usersData?.map((el) => {
      if (el.id === userdata.id) {
        return userdata;
      } else {
        return el;
      }
    })
    setUsersData(data);
    setEditData(null)

  }

  const handleCancel = () => {
    console.log("handleCancel")
    setShowAdduser(false);
    setEditData(null)
    form.resetFields();
  }

  return (
    <div>

      <Layout >
        <Layout>
          <Content >
            <Button onClick={handleLogout}>Logout</Button>
            <Button onClick={handleAddUSer}>AddUser</Button>

            {editData && (
              <UserForm
                initialValues={editData}
                onCancel={handleCancel}
                form={form}
                onFinish={handleUpdateUser}
                btnName={"Edit User"}

              />
            )}

            {
              showAddUser && (
                <UserForm
                  initialValues={editData}
                  onCancel={handleCancel}
                  onFinish={onFinish}
                  form={form}
                  btnName={"Add User"}

                />
              )
            }
            <UserDetails data={usersData} handleEdit={handleEdit} handleDelete={handleDelete} formValues={editData} />

          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default EditableTable

