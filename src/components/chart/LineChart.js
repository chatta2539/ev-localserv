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

import ReactApexChart from "react-apexcharts";
import { Typography, DatePicker } from "antd";
import { MinusOutlined } from "@ant-design/icons";
import lineChart from "./configs/lineChart";


const onChange = (date, dateString) => {
  console.log(date, dateString[0]);
};


function LineChart() {
  const { Title, Paragraph } = Typography;
  const { RangePicker } = DatePicker;

  return (
    <>
      <div className="linechart">
        <div>
        <li><RangePicker 
                  onChange={onChange} 
                  style={{
                    
                    height: "auto",
                    width: "auto",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontSize: "17px",
                    margin: "5px",
                    padding: "7px",
                    
                  }}/></li>
          {/* <Title level={3}>Income</Title> */}
          {/* <Paragraph className="lastweek">
            than last week <span className="bnb2">+30%</span>
          </Paragraph> */}
        </div>
        <div className="sales">
          <ul>

            
          </ul>
        </div>
      </div>


      <ReactApexChart
        options={lineChart.options}
        series={lineChart.series}
        type="bar"
        height={350}
        width={"100%"}
      />
    </>
  );
}

export default LineChart;
