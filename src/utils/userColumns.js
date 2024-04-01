import { Button } from "antd"

export const usercolumns = (handleEdit, handleDelete) => {

  return [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Edit',
      key: 'actions',
      dataIndex: "",
      render: (_,value)=> <Button onClick={()=>handleEdit(value)}> Edit </Button>
    },
    {
      title: 'Delete',
      dataIndex: "",
      render: (value)=> <Button onClick={()=>handleDelete(value)}> Delete </Button>
    },
  ]
}
