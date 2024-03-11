import React, { useState } from 'react';
import { Modal, Form, Input, Button, Checkbox, } from 'antd';

const UserRegistrationModal = ({ visible, onCancel, onRegister }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const handleOk = async () => {
    try {
      setLoading(true);
      const values = await form.validateFields();
      onRegister(values);
      form.resetFields();
      setLoading(false);
    } catch (error) {
      console.error('Validation failed:', error);
    }
  };

  return (
    <Modal
      title="Register User"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="register" type="primary" onClick={handleOk} loading={loading}>
          Register
        </Button>,
      ]}
    >
      <Form
        labelCol={{span: 6,}}
        wrapperCol={{span: 18,}}
        layout="horizontal"
        initialValues={{size: 'Large',}}
        size='Large'
        style={{maxWidth: 600,}}
      >
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
          <Checkbox onChange={onChange}></Checkbox>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserRegistrationModal;
