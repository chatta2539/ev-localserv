import React from 'react';
import { Modal, Table } from 'antd';

const HistoryModal = ({ visible, parameterName, historyData, onCancel }) => {
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Old Value',
      dataIndex: 'oldValue',
      key: 'oldValue',
    },
    {
      title: 'New Value',
      dataIndex: 'newValue',
      key: 'newValue',
    },
  ];

  return (
    <Modal
      title={`History of ${parameterName}`}
      visible={visible}
      onCancel={onCancel}
      footer={null}
      width={600} // Set width of the modal
    >
      <Table
        dataSource={historyData}
        columns={columns}
        pagination={false} // Disable pagination
      />
    </Modal>
  );
};

export default HistoryModal;
