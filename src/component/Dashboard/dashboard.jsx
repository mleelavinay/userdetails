import { Layout, Menu } from 'antd';
import React from 'react';

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  return (
    <Layout>
      <Sider>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Users</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            Dashboard Content
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard
 
