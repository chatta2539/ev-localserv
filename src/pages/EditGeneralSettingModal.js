import React, { useState } from 'react';
import { Modal, Form, Input, Button, DatePicker } from 'antd';
const { RangePicker } = DatePicker;
const EditGeneralSettingModal = ({ visible, parameterName, onSubmit, onCancel }) => {
  const [editedValue, setEditedValue] = useState('');

  const handleModalSubmit = (values) => {
    onSubmit(values);
    setEditedValue('');
  };

  return (
    <Modal
      title={`Edit ${parameterName}`}
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="register" type="primary" >
          Save
        </Button>,
      ]}
    >
      <Form onFinish={handleModalSubmit}>
        <Form.Item
          name="editedValue"
          label={`Edited ${parameterName}`}
          rules={[{ required: true, message: `Please input the edited ${parameterName} value!` }]}
        >
          <Input value={editedValue} onChange={(e) => setEditedValue(e.target.value)} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditGeneralSettingModal;
