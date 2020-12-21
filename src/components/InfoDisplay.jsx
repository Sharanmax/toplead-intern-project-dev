import React, { Component } from "react"


import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { Divider, Table, Button } from "antd"

const WhiteSpace = () => <div style={{ margin: "20px 0" }} />

const InfoDisplay = (props) => {
  const { values } = props
  console.log("info-display", values)

  let csvData= values;
 

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      {" "}
      <div style={{ background: "white", maxWidth: "800px", padding: "20px" }}>
        <ExportCSV fileName={values.name} csvData={[csvData]} />
        <table>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
          <tr>
            <td>Name</td>
            <td>{values.name}</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>{values.phoneNumber}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{values.email}</td>
          </tr>
          <tr>
            <td>Degree</td>
            <td>{values.degree}</td>
          </tr>
          <tr>
            <td>Location</td>
            <td>{values.location}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{values.city}</td>
          </tr>
          <tr>
            <td>Pin Code</td>
            <td>{values.pinCode}</td>
          </tr>
          <tr>
            <td>Total Experience</td>
            <td>{values.totalExperience}</td>
          </tr>
          <tr>
            <td>skills</td>
            <td>
              {values.skills && values.skills.length > 0
                ? values.skills.map((sk, key) => <p key={key}>{sk}</p>)
                : "None"}
            </td>
          </tr>
          <tr>
            <td>Date Of Joining</td>
            <td>{values.dateOfJoining}</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default InfoDisplay




export const ExportCSV = ({csvData, fileName}) => {
 var allSkills=''
  csvData[0].skills && Array.isArray(csvData[0].skills) !==0 && csvData[0].skills.map((skll)=>{
    allSkills = allSkills + ' ' + skll; 
  });
  csvData[0].skills= allSkills;

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToCSV = (csvData, fileName) => {
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, fileName + fileExtension);
    }

    return (
        <Button  onClick={(e) => exportToCSV(csvData,fileName)}>Export</Button>
    )
}