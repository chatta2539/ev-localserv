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
import { useState, useEffect } from "react";
import {
  Card,
  Col,
  Row,
  Typography,
  Tooltip,
  Progress,
  Upload,
  message,
  Button,
  Timeline,
  Radio,
  Flex,
  Segmented,
  Switch
} from "antd";
import {
  ToTopOutlined,
  MenuUnfoldOutlined,
  RightOutlined,
} from "@ant-design/icons";

import { ExclamationCircleTwoTone  } from '@ant-design/icons';

const { Title, Paragraph, Text, Link } = Typography;



function Test1() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const [switchChecked, setSwitchChecked] = useState(false);
  const handleSwitchChange = (checked) => {
    setSwitchChecked(checked);
  };


  return (<>

    <div className="layout-content" >

      <Row gutter={[24, 0]}>

        <Col xl={12} className="mb-24"  >
          <div style={{ position: "relative" }}>
            <Card bordered={false}>
              {/* <Switch
                checked={switchChecked}
                onChange={handleSwitchChange}
                style={{ position: "absolute", top: 10, right: 10 }}
              /> */}
              <Title level={3} style={{ marginLeft: "10px" }}>DC 40kW</Title>

              <div style={{ textAlign: "center" }}>
                <Title level={1}>กำลังชาร์จ...</Title>
                <Title level={5} style={{ marginBottom: "30px", marginTop: "-15px" }}>Charging...</Title>


                <span>SoC %</span>
                <Title>48 %</Title>

                <Row justify="center" style={{ marginBottom: "0px" }}>
                  <Col span={6} style={{ marginRight: "35px" }}>
                    <span>ค่าบริการ</span>
                    <Title>฿578.23</Title>
                  </Col>
                  <Col span={6} style={{ marginLeft: "35px" }}>
                    <span>พลังงาน</span>
                    <Title>232.5 kWh</Title>
                  </Col>
                </Row>
                <Row justify="space-around">
                  <Col span={6}>
                    {/* <Title level={5}>แรงดัน</Title> */}
                    <span>แรงดัน</span>
                  </Col>
                  <Col span={6}>
                    {/* <Title level={5}>กระแสไฟ</Title> */}
                    <span>กระแสไฟ</span>

                  </Col>
                  <Col span={6}>
                    {/* <Title level={5}>กระแสไฟ</Title> */}
                    <span>กระแสไฟ</span>
                  </Col>
                </Row>
                <Row justify="space-around" style={{ marginBottom: "15px" }}>
                  <Col span={6}>
                    <Title level={3}>232.5 V</Title>
                  </Col>
                  <Col span={6}>
                    <Title level={3}>32.5 A</Title>
                  </Col>
                  <Col span={6}>
                    <Title level={3}>6.9 kW</Title>
                  </Col>
                </Row>
                <Title level={2}> {formatTime(timer)}</Title>
                <Button type="primary" danger style={{ width: "50%", marginBottom: "25px" }}>
                  Stop
                </Button>


              </div>
              <div style={{ position: "absolute", top: 10, right: 10 }}>
                <ExclamationCircleTwoTone className="blink" twoToneColor="#52c41a" style={{ fontSize: "24px" }} />
              </div>
            </Card>
          </div>


        </Col>


        <Col xl={12} className="mb-24"  >
          <div style={{ position: "relative" }}>
            <Card bordered={false}>
              {/* <Switch
                checked={switchChecked}
                onChange={handleSwitchChange}
                style={{ position: "absolute", top: 10, right: 10 }}
              /> */}
              <Title level={3} style={{ marginLeft: "10px" }}>AC 40kW</Title>

              <div style={{ textAlign: "center" }}>
                <Title level={1}>กำลังชาร์จ...</Title>
                <Title level={5} style={{ marginBottom: "30px", marginTop: "-15px" }}>Charging...</Title>

{/* 
                <span>SoC %</span>
                <Title>48 %</Title> */}

                <Row justify="center" style={{ marginBottom: "0px" }}>
                  <Col span={6} style={{ marginRight: "35px" }}>
                    <span>ค่าบริการ</span>
                    <Title>฿578.23</Title>
                  </Col>
                  <Col span={6} style={{ marginLeft: "35px" }}>
                    <span>พลังงาน</span>
                    <Title>232.5 kWh</Title>
                  </Col>
                </Row>
                <Row justify="space-around">
                  <Col span={6}>
                    {/* <Title level={5}>แรงดัน</Title> */}
                    <span>แรงดัน</span>
                  </Col>
                  <Col span={6}>
                    {/* <Title level={5}>กระแสไฟ</Title> */}
                    <span>กระแสไฟ</span>

                  </Col>
                  <Col span={6}>
                    {/* <Title level={5}>กระแสไฟ</Title> */}
                    <span>กระแสไฟ</span>
                  </Col>
                </Row>
                <Row justify="space-around" style={{ marginBottom: "15px" }}>
                  <Col span={6}>
                    <Title level={3}>232.5 V</Title>
                  </Col>
                  <Col span={6}>
                    <Title level={3}>32.5 A</Title>
                  </Col>
                  <Col span={6}>
                    <Title level={3}>6.9 kW</Title>
                  </Col>
                </Row>
                <Title level={2}> {formatTime(timer)}</Title>
                <Button type="primary" danger style={{ width: "50%", marginBottom: "25px" }}>
                  Stop
                </Button>


              </div>
              <div style={{ position: "absolute", top: 10, right: 10 }}>
                <ExclamationCircleTwoTone className="blink" twoToneColor="#52c41a" style={{ fontSize: "24px" }} />
              </div>
            </Card>
          </div>


        </Col>



      </Row>
    </div>
  </>
  );
}

export default Test1;
