import React, { useRef, useState } from "react";
import "./Dashboard.css";
import logo from "./Asset/Logo and company.svg";
import excel from "./Asset/Excel.svg";
import accicon from "./Asset/Mask Group.svg";
import notifi from "./Asset/Vector.svg";
import upload from "./Asset/upload.svg";
import Calendar from "./Asset/Calendar.svg";
import Category from "./Asset/Category.svg";
import Chart from "./Asset/Chart.svg";
import Document from "./Asset/Document.svg";
import Notification from "./Asset/Notification.svg";
import Setting from "./Asset/Setting.svg";
import Ticket from "./Asset/Ticket.svg";
// import { useCSVReader } from "react-papaparse";
import Papa from "papaparse";

export const Dashboard = () => {
  const fileRef = useRef();
  const [csvData, setCsvData] = useState([]);
  const [file, setFile] = useState(null); // eslint-disable-line

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    Papa.parse(selectedFile, {
      complete: (result) => {
        setCsvData(result.data);
      },
      header: true, // If the CSV file has headers
    });
  };

  const clickFileChange = () => {
    fileRef.current.click();
  };

  return (
    <>
      <section className="Main-ctn">
        <div className="header-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="header-area">
          <h2>Upload CSV</h2>
          <div className="head-ctn">
            <img src={notifi} alt="notificaton" />
            <img src={accicon} alt="icon" />
          </div>
        </div>

        <div className="nan-siderbar">
          <ul>
            <li>
              <img src={Category} alt="icons" />
              Dashboard
            </li>
            <li>
              <img src={Chart} alt="icons" />
              Upload
            </li>
            <li>
              <img src={Ticket} alt="icons" />
              Invoice
            </li>
            <li>
              <img src={Document} alt="icons" />
              Schedule
            </li>
            <li>
              <img src={Calendar} alt="icons" />
              Calendar
            </li>
            <li>
              <img src={Notification} alt="icons" />
              Notification
            </li>
            <li>
              <img src={Setting} alt="icons" />
              Settings
            </li>
          </ul>
        </div>
        <div className="dashboard-ctn">
          <div className="upload-ctn">
            <div className="uld-area">
              <img src={excel} alt="excel icon" />
              <h4>Drop your excel sheet here or brower</h4>
            </div>

            <div>
              <input
                ref={fileRef}
                hidden
                type="file"
                onChange={handleFileChange}
              />
            </div>

            <button className=" upload-btn" onClick={clickFileChange}>
              <img src={upload} alt="upload" /> Upload
            </button>
          </div>
        </div>
        <div className="table-ctn">
          {csvData.length > 0 && (
            <div>
              <div>
                <h2>Upload</h2>
              </div>

              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {Object.keys(csvData[0]).map((header, index) => (
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        key={index}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                  {csvData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {Object.values(row).map((value, colIndex) => (
                        <td
                          className="px-6 py-4 whitespace-nowrap"
                          key={colIndex}
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* {csvData.length > 0 && (
          <div className="table-ctn">
            <div>
              <h2>Upload</h2>
            </div>

            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  {Object.keys(csvData[0]).map((header, index) => (
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      key={index}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {csvData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {Object.values(row).map((value, colIndex) => (
                      <td
                        className="px-6 py-4 whitespace-nowrap"
                        key={colIndex}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )} */}
      </section>
    </>
  );
};

export default Dashboard;
