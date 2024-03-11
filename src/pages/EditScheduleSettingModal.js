import React, { useState } from 'react';
import { Modal, Form, Input, Button, DatePicker } from 'antd';
const { RangePicker } = DatePicker;


const onChangeDateTime = (value, dateString) => {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
};
const onOk = (value) => {
  console.log('onOk: ', value);
};
const EditScheduleSettingModal = ({ visible, parameterName, onSubmit, onCancel }) => {
  const [editedValueSchedule, setEditedValueSchedule] = useState('');

  const handleModalSubmitSchedule = (values) => {
    onSubmit(values);
    setEditedValueSchedule('');
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
      <Form onFinish={handleModalSubmitSchedule}>
        <Form.Item
          name="editedValue"
          label={`Edited ${parameterName}`}
          rules={[{ required: true, message: `Please input the edited ${parameterName} value!` }]}>
          <RangePicker
            showTime={{
              format: 'HH:mm',
            }}
            format="YYYY-MM-DD HH:mm"
            onChange={onChangeDateTime}
            onOk={onOk}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditScheduleSettingModal;
