import React, { useState } from 'react';
import { Modal, Form, Input, Button, Checkbox, } from 'antd';

const EditUserModal = ({visible, onCancel, onEdit, userData }) => {

    const [form] = Form.useForm();
    if (!userData) {
        return null; // Return null or a loading indicator if userData is not available yet
      }
    

    const handleOk = () => {
      form
        .validateFields()
        .then((values) => {
          form.resetFields();
          onEdit(values);
        })
        .catch((info) => {
          console.log('Validate Failed:', info);
        });
    };

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };

      console.log('UserData:', userData); // Log userData


  return (
    <Modal
      title="Edit User"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="save" type="primary" onClick={handleOk} >
          Save
        </Button>,
      ]}
    >
      <Form
        labelCol={{span: 6,}}
        wrapperCol={{span: 18,}}
        layout="horizontal"
        initialValues={userData}
        size='Large'
        style={{maxWidth: 600,}}
        
      >
        {/* <Form.Item
          name="firstname"
          label="Firstname"
          rules={[{ required: true, message: 'Please input your Firstname!' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="lastname"
          label="Lastname"
          rules={[{ required: true, message: 'Please input your Lastname!' }]}>
          <Input />
        </Form.Item> */}
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: 'Please input your Lastname!' }]}>
          <Input />
        </Form.Item>
        <Form.Item 
          name="phone"
          label="Phone"
          rules={[{ required: true, message: 'Please input your Phone!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Status" valuePropName="checked">
          {/* <Switch /> */}
          <Checkbox checked={userData.status === 'ACTIVE'} onChange={onChange}>
          {userData.status === 'ACTIVE' ? 'Active' : 'Inactive'}
        </Checkbox>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditUserModal;
