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
  Pagination
} from "antd";

import { ToTopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


import Echart from "../components/chart/EChart";
import LineChart from "../components/chart/LineChart";

// Images
import ava1 from "../assets/images/logo-shopify.svg";
import ava2 from "../assets/images/logo-atlassian.svg";
import ava3 from "../assets/images/logo-slack.svg";
import ava5 from "../assets/images/logo-jira.svg";
import ava6 from "../assets/images/logo-invision.svg";
import face from "../assets/images/face-1.jpg";
import face2 from "../assets/images/face-2.jpg";
import face3 from "../assets/images/face-3.jpg";
import face4 from "../assets/images/face-4.jpg";
import face5 from "../assets/images/face-5.jpeg";
import face6 from "../assets/images/face-6.jpeg";
import pencil from "../assets/images/pencil.svg";

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
const columns = [
  {
    title: "TIMESTAMP",
    dataIndex: "timestamp",
    key: "name",
    width: "15%",
  },
  {
    title: "DURATION TIME",
    dataIndex: "durationtime",
    key: "function",
  },
  {
    title: "CONNECTOR",
    dataIndex: "connector",
    key: "connector",
    
  },
  {
    title: "ENERGY USAGE",
    dataIndex: "energyusage",
    key: "energyusage",
  },
  {
    title: "ENERGY FEE",
    dataIndex: "energyfee",
    key: "energyfee",
  },
  {
    title: "USERNAME",
    dataIndex: "username",
    key: "durationtime",
  }
];

const data = [
  {
    key: "1",
    timestamp: (
      <>
        <p>12/3/2024 13:45:21</p>
      </>
    ),
    durationtime: (
      <>
        <p>34 min.</p>
      </>
    ),
    connector: (
      <>
        <p>DC</p>
      </>
    ),
    energyusage: (
      <>
        <p>4.34 kWh</p>
      </>
    ),
    energyfee: (
      <>
        <p>฿ 543.32 </p>
      </>
    ),
    username: (
      <>
        <p>เชษฐา นะรอฮีม</p>
      </>
    ),
  },
  {
    key: "2",
    timestamp: (
      <>
        <p>12/3/2024 13:45:21</p>
      </>
    ),
    durationtime: (
      <>
        <p>34 min.</p>
      </>
    ),
    connector: (
      <>
        <p>DC</p>
      </>
    ),
    energyusage: (
      <>
        <p>4.34 kWh</p>
      </>
    ),
    energyfee: (
      <>
        <p>฿ 543.32 </p>
      </>
    ),
    username: (
      <>
        <p>เชษฐา นะรอฮีม</p>
      </>
    ),
  },
  {
    key: "3",
    timestamp: (
      <>
        <p>12/3/2024 13:45:21</p>
      </>
    ),
    durationtime: (
      <>
        <p>34 min.</p>
      </>
    ),
    connector: (
      <>
        <p>DC</p>
      </>
    ),
    energyusage: (
      <>
        <p>4.34 kWh</p>
      </>
    ),
    energyfee: (
      <>
        <p>฿ 543.32 </p>
      </>
    ),
    username: (
      <>
        <p>เชษฐา นะรอฮีม</p>
      </>
    ),
  },
  {
    key: "4",
    timestamp: (
      <>
        <p>12/3/2024 13:45:21</p>
      </>
    ),
    durationtime: (
      <>
        <p>34 min.</p>
      </>
    ),
    connector: (
      <>
        <p>DC</p>
      </>
    ),
    energyusage: (
      <>
        <p>4.34 kWh</p>
      </>
    ),
    energyfee: (
      <>
        <p>฿ 543.32 </p>
      </>
    ),
    username: (
      <>
        <p>เชษฐา นะรอฮีม</p>
      </>
    ),
  },
  {
    key: "5",
    timestamp: (
      <>
        <p>12/3/2024 13:45:21</p>
      </>
    ),
    durationtime: (
      <>
        <p>34 min.</p>
      </>
    ),
    connector: (
      <>
        <p>DC</p>
      </>
    ),
    energyusage: (
      <>
        <p>4.34 kWh</p>
      </>
    ),
    energyfee: (
      <>
        <p>฿ 543.32 </p>
      </>
    ),
    username: (
      <>
        <p>เชษฐา นะรอฮีม</p>
      </>
    ),
  },
  {
    key: "6",
    timestamp: (
      <>
        <p>12/3/2024 13:45:21</p>
      </>
    ),
    durationtime: (
      <>
        <p>34 min.</p>
      </>
    ),
    connector: (
      <>
        <p>DC</p>
      </>
    ),
    energyusage: (
      <>
        <p>4.34 kWh</p>
      </>
    ),
    energyfee: (
      <>
        <p>฿ 543.32 </p>
      </>
    ),
    username: (
      <>
        <p>เชษฐา นะรอฮีม</p>
      </>
    ),
  }
];
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
  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  return (
    <>
      <div className="tabled">

        <Col xs={24} sm={24} md={12} lg={12} xl={24} className="mb-24">
          <Card bordered={false} className="criclebox h-full">
            <LineChart />
          </Card>
        </Col>
        <Row gutter={[24, 0]}>


          <Col xs="24" xl={24}>
            <Card
              bordered={false}
              className="criclebox tablespace mb-24"
              title="Authors Table"
              extra={
                <>
                  {[<Button type="primary" className="invoice-list">{download} CSV</Button>]}
                </>
              }
            >
              <div className="table-responsive">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  className="ant-border-space"
                />
              </div>
              {/* uploadfile pb-15 shadow-none */}
              <div className="pagination">

                <Pagination
                  total={85}
                  showSizeChanger
                  showQuickJumper
                  showTotal={(total) => `Total ${total} items`}
                />
              </div>
            </Card>
            
          </Col>
        </Row>
      </div>

    </>
  );
}

export default History;
