/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Upload,
  message,
  Progress,
  Button,
  Avatar,
  Typography,
  Pagination,
  Space,
  Modal
} from "antd";

import React, { useState } from 'react';

import UserRegistrationModal from "./UserRegistrationModal ";
import EditUserModal from "./EditUserModal";


const { Title } = Typography;

const formProps = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
// table code start


const getRandomString = () => {
  const options = ["DC", "AC"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};
const getRandomStatus = () => {
  const options = ["ACTIVE", "INACTIVE"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    // timestamp: "12/3/2024 13:45:21",
    // durationtime: `${getRandomNumber(20, 90)} min.`,
    // connector: getRandomString(),
    // energyusage: (getRandomNumber(20000, 30000)) / 100 + " kWh",
    // energyfee: "฿ " + (getRandomNumber(40000, 80000)) / 100,
    username: `Raeh Chester ${i}`,
    phone: `098${(getRandomNumber(1000000, 9999099))}`,
    status: getRandomStatus()
  });
}

const download = [
  <svg
    width="15"
    height="15"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key="0"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17ZM6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L9 10.5858L9 3C9 2.44772 9.44771 2 10 2C10.5523 2 11 2.44771 11 3L11 10.5858L12.2929 9.29289C12.6834 8.90237 13.3166 8.90237 13.7071 9.29289C14.0976 9.68342 14.0976 10.3166 13.7071 10.7071L10.7071 13.7071C10.5196 13.8946 10.2652 14 10 14C9.73478 14 9.48043 13.8946 9.29289 13.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289Z"
      fill="#ffffff"
    ></path>
  </svg>,
];




function History() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // State to control the visibility of the modal
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedUserData, setSelectedUserData] = useState(null);

  const columns = [
    {
      title: "USERNAME",
      dataIndex: "username",
      key: "durationtime",

    },
    {
      title: "PHONE",
      dataIndex: "phone",
      key: "function",
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "connector",

    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Typography.Link onClick={() => openEditModal(record)}>Edit</Typography.Link>
          <Typography.Link onClick={() => confirmDeleteUser(record)}>Delete</Typography.Link>
        </Space>
      ),
    },
  ];

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleRegister = (formData) => {
    // Handle user registration logic here
    console.log('Registering user:', formData);
    // You can make API calls or perform any necessary actions here
    closeModal(); // Close the modal after registration
  };

  const openEditModal = (record) => {
    setSelectedUserData(record);
    setEditModalVisible(true);
  };

  const closeEditModal = () => {
    setEditModalVisible(false);
  };

  const handleEdit = (formData) => {
    // Handle user registration logic here
    console.log('Editing user:', formData);
    // You can make API calls or perform any necessary actions here
    closeModal(); // Close the modal after registration
  };

  const confirmDeleteUser = (record) => {
    Modal.confirm({
      title: 'Delete User',
      content: `Are you sure you want to delete user ${record.username} Phone : ${record.phone} ?`,
      onOk() {
        // Add your deletion logic here
        console.log('Deleting user:', record);
      },
    });
  };

  return (
    <>
      <div className="tabled">
        <Row gutter={[24, 0]}>
          <Col xs={24} xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="History Table"
              extra={
                <>
                  {[<Button type="primary" className="invoice-list" onClick={openModal}> ADD USER</Button>]}
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={{ position: ['none', 'bottomRight'] }}
                  className="ant-border-space"
                  scroll={{
                    y: 700,
                  }}
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>

      <UserRegistrationModal
        visible={modalVisible}
        onCancel={closeModal}
        onRegister={handleRegister}
      />

      <EditUserModal
        visible={editModalVisible}
        onCancel={closeEditModal}
        onEdit={handleEdit}
        userData={selectedUserData}
      />
    </>
  );
}

export default History;