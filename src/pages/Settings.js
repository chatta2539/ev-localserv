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
  Modal,
  Form,
  Input,
  Checkbox,
  Tooltip,
  Descriptions,
  DatePicker
} from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import { LockOutlined, UserOutlined, EditOutlined, HistoryOutlined } from '@ant-design/icons';
import EditGeneralSettingModal from './EditGeneralSettingModal';
import EditScheduleSettingModal from "./EditScheduleSettingModal";
import HistoryModal from './HistoryModal'; // Import the HistoryModal component

import React, { useState, useEffect } from 'react';
const { RangePicker } = DatePicker;

const { Title } = Typography;

// table code start

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const deletebtn = [
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 2C8.62123 2 8.27497 2.214 8.10557 2.55279L7.38197 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L4 16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H12.618L11.8944 2.55279C11.725 2.214 11.3788 2 11 2H9ZM7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8ZM12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8C13 7.44772 12.5523 7 12 7Z"
      fill="#111827"
      className="fill-danger"
    ></path>
  </svg>,
];

const dollor = [
  <svg
    width="22"
    height="22"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    <path
      d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z"
      fill="#fff"
    ></path>
    <path
      d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z"
      fill="#fff"
    ></path>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z"
      fill="#fff"
    ></path>
  </svg>,
];

const count = [
  {
    today: "Today’s Sales",
    title: "$53,000",
    persent: "+30%",
    icon: dollor,
    bnb: "bnb2",
  },
  {
    today: "Today’s Users",
    title: "3,200",
    persent: "+20%",
    icon: dollor,
    bnb: "bnb2",
  },
  {
    today: "New Clients",
    title: "+1,200",
    persent: "-20%",
    icon: dollor,
    bnb: "redtext",
  },
  {
    today: "New Orders",
    title: "$13,200",
    persent: "10%",
    icon: dollor,
    bnb: "bnb2",
  },
];

const onChangeDateTime = (value, dateString) => {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
};
const onOk = (value) => {
  console.log('onOk: ', value);
};


function Setting() {

  const [form] = Form.useForm();
  const [clientReady, setClientReady] = useState(false);

  const [selectedParameterhistory, setSelectedParameterhistory] = useState('');
  const [historyModalVisible, setHistoryModalVisible] = useState(false);
  const [historyData, setHistoryData] = useState([]); // State to store history data
  const handleShowHistory = (parameterNameHistory) => {
    // Dummy history data for demonstration
    const dummyHistory = [
      { key: '1', date: '2022-01-01', oldValue: '35', newValue: '12' },
      { key: '2', date: '2022-01-02', oldValue: '31', newValue: '35' },
      { key: '3', date: '2022-01-03', oldValue: '34', newValue: '31' },
    ];
    setHistoryData(dummyHistory);
    setSelectedParameterhistory(parameterNameHistory)
    setHistoryModalVisible(true);
  };




  const [modalVisible, setModalVisible] = useState(false);
  const [selectedParameter, setSelectedParameter] = useState('');
  const [editedValue, setEditedValue] = useState('');

  const handleEdit = (parameterName) => {
    setSelectedParameter(parameterName);
    setModalVisible(true);
  };

  const handleModalSubmit = (value) => {
    // Handle submission logic here
    console.log(`Edited ${selectedParameter}:`, value.editedValue);
    setModalVisible(false);
  };


  const [modalVisibleSchedule, setModalVisibleSchedule] = useState(false);
  const [selectedParameterSchedule, setSelectedParameterSchedule] = useState('');
  const [editedValueSchedule, setEditedValueSchedule] = useState('');

  const handleEditSchedule = (parameterName) => {
    setSelectedParameterSchedule(parameterName);
    setModalVisibleSchedule(true);
  };

  const handleModalSubmitSchedule = (value) => {
    // Handle submission logic here
    console.log(`Edited ${selectedParameter}:`, value.editedValue);
    setModalVisibleSchedule(false);
  };

  // To disable submit button at the beginning.
  useEffect(() => {
    setClientReady(true);
  }, []);
  const onFinish = (values) => {
    console.log('Finish:', values);
  };


  return (
    <>
      <div className="tabled">

        <Row gutter={[24, 0]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} className="mb-24">
            <Card bordered={false} className="criclebox">
              <div className="timeline-box ">
                <Title level={5}>General setting</Title>
                <Paragraph className="lastweek" style={{ marginBottom: 24 }}>
                  Power and Current limit setting
                </Paragraph>

                <Form
                  layout="inline"
                  style={{ alignItems: 'baseline', justifyContent: 'center', marginBottom: 15 }}
                >
                  <Form.Item
                    name="dcpowerlimit"
                    label="DC Power Limit"
                    rules={[{ required: false }]}>
                    <Input style={{ width: 350 }} suffix={<span style={{ fontSize: '15px' }}>kW</span>} />
                  </Form.Item>
                  <Form.Item
                    name="edit"
                    rules={[{ required: false }]}>
                    <Button type="text" icon={<EditOutlined />} onClick={() => handleEdit('DC Power Limit')}>EDIT</Button>
                  </Form.Item>
                  <Form.Item
                    name="phone"
                    rules={[{ required: true, message: 'Please input your Phone!' }]}>
                    <Button type="text" icon={<HistoryOutlined />} onClick={() => handleShowHistory('DC Power Limit')}>HISTORY</Button>
                  </Form.Item>
                </Form>

                <Form
                  layout="inline"
                  style={{ alignItems: 'baseline', justifyContent: 'center', marginBottom: 15 }}
                >
                  <Form.Item
                    name="dccurrentlimit"
                    label="AC Current Limit"
                    rules={[{ required: false }]}>
                    <Input style={{ width: 350 }} suffix={<span style={{ fontSize: '15px' }}>A</span>} />
                  </Form.Item>
                  <Form.Item
                    name="edit"
                    rules={[{ required: false }]}>
                    <Button type="text" icon={<EditOutlined />} onClick={() => handleEdit('AC Current Limit')}>EDIT</Button>
                  </Form.Item>
                  <Form.Item
                    name="phone"
                    rules={[{ required: true, message: 'Please input your Phone!' }]}>
                    <Button type="text" icon={<HistoryOutlined />} onClick={() => handleShowHistory('AC Current Limit')}>HISTORY</Button>
                  </Form.Item>
                </Form>

                <Form
                  layout="inline"
                  style={{ alignItems: 'baseline', justifyContent: 'center', marginBottom: 15 }}
                >
                  <Form.Item
                    name="chargingfee"
                    label="Charging Fee"
                    rules={[{ required: false }]}>
                    <Input style={{ width: 350 }} suffix={<span style={{ fontSize: '15px' }}>฿</span>} />
                  </Form.Item>
                  <Form.Item
                    name="edit"
                    rules={[{ required: false }]}>
                    <Button type="text" icon={<EditOutlined />} onClick={() => handleEdit('Charging Fee')}>EDIT</Button>
                  </Form.Item>
                  <Form.Item
                    name="phone"
                    rules={[{ required: true, message: 'Please input your Phone!' }]}>
                    <Button type="text" icon={<HistoryOutlined />} onClick={() => handleShowHistory('Charging Fee')}>HISTORY</Button>
                  </Form.Item>
                </Form>

              </div>

              <EditGeneralSettingModal
                visible={modalVisible}
                parameterName={selectedParameter}
                onSubmit={handleModalSubmit}
                onCancel={() => setModalVisible(false)}
              />

              <HistoryModal
                visible={historyModalVisible}
                parameterName={selectedParameterhistory}
                historyData={historyData}
                onCancel={() => setHistoryModalVisible(false)}
              />




            </Card>

          </Col>


          <Col xs={24} sm={24} md={12} lg={12} xl={12} className="mb-24">
            <Card bordered={false} className="criclebox">
              <div className="timeline-box ">
                <Title level={5}>Schedule setting</Title>
                <Paragraph className="lastweek" style={{ marginBottom: 24 }}>
                  Time operation setting
                </Paragraph>
                <Form
                  layout="inline"
                  style={{ alignItems: 'baseline', justifyContent: 'center', marginBottom: 15 }}
                >
                  <Form.Item
                    name="dcservicetime"
                    label="DC"
                    rules={[{ required: false }]}>
                    <RangePicker
                      showTime={{
                        format: 'HH:mm',
                      }}
                      format="YYYY-MM-DD HH:mm"
                      onChange={onChangeDateTime}
                      onOk={onOk}
                    />
                  </Form.Item>
                  <Form.Item name="disabled" valuePropName="checked">
                    <Checkbox>Always on</Checkbox>
                  </Form.Item>
                  <Form.Item
                    name="edit"
                    rules={[{ required: false }]}>
                    <Button type="text" icon={<EditOutlined />} onClick={() => handleEditSchedule('DC')}>EDIT</Button>
                  </Form.Item>
                </Form>


                <Form
                  layout="inline"
                  style={{ alignItems: 'baseline', justifyContent: 'center', marginBottom: 15 }}
                >
                  <Form.Item
                    name="acservicetime"
                    label="AC"
                    rules={[{ required: false }]}>
                    <RangePicker
                      showTime={{
                        format: 'HH:mm',
                      }}
                      format="YYYY-MM-DD HH:mm"
                      onChange={onChangeDateTime}
                      onOk={onOk}
                    />
                  </Form.Item>
                  <Form.Item name="disabled" valuePropName="checked">
                    <Checkbox>Always on</Checkbox>
                  </Form.Item>
                  <Form.Item
                    name="edit"
                    rules={[{ required: false }]}>
                    <Button type="text" icon={<EditOutlined />} onClick={() => handleEditSchedule('AC')}>EDIT</Button>
                  </Form.Item>
                </Form>

              </div>

              <EditScheduleSettingModal
                visible={modalVisibleSchedule}
                parameterName={selectedParameterSchedule}
                onSubmit={handleModalSubmitSchedule}
                onCancel={() => setModalVisibleSchedule(false)}
              />


            </Card>

          </Col>

        </Row>
      </div>
    </>
  );
}

export default Setting;