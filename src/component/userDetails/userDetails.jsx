import React, { useState, useEffect} from 'react';
import { Table, Card } from 'antd';
import {usercolumns} from "../../utils/userColumns"

const UserDetails = (props) => {
  const { data } = props

  const [userColumnsData, setUserColumnsData] = useState()

  useEffect(()=> {
    setUserColumnsData(usercolumns(props.handleEdit, props.handleDelete))
  },[props])

  return (
    <Card>
      <Table
        columns={userColumnsData}
        dataSource={data}
        pagination={false}
        bordered
        style={{ margin: '20px 0' }}
      />
    </Card>
  );
};

export default UserDetails;