import React, { useState } from "react";
import "./Common.css";
import jsPDF from "jspdf";

import Logo from "./Images/HtmLogo.png"; // Import your logo image
import SupportLogo from "./support-logo.png";

import resix from "./Images/resix.png";
import Signature from "./Images/signature.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const HMSInvoice = () => {
  const [formData, setFormData] = useState({
    transportCharges: "",
    from: "",
    toLocation: "",
    storageCharges: "",
    insurance: "",
    name: "",
    mobile: "",
    address: "",
    email: "",
    dateOfoPacking: "",
    gst: "",
    docCharges: "",
    description: "",
  
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  let dateForCount = new Date();

  const handleClear = () => {
    setFormData({
      transportCharges: "",
      from: "",
      toLocation: "",
      storageCharges: "",
      insurance: "",
      name: "",
      mobile: "",
      address: "",
      email: "",
      dateOfoPacking: "",
      gst: "",
      docCharges: "",
      description: "",

    });
  };

  const day = dateForCount.getDate();

  let count = day + 166;

  const handleSubmit = (event) => {
    count = count + 1;

    console.log(count, "count");
    event.preventDefault();

    generatePDF(count);
  };

  const generatePDF = (count) => {
    const pdf = new jsPDF();
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(14);

    // pdf.addImage(Logo, "PNG", 15, 5, 80, 20);
    pdf.setFontSize(8);
    pdf.text(
      12,
      30,
      "No. 170,6th cross,Balaji Nagar, Bangalore - 560029"
    );
    pdf.text(
      12,
      34,
      "E-Mail :hmsanitation@gmail.com             Web : www.hmsanitation.in"
    );
    pdf.setFontSize(10);
    pdf.setFont(undefined, "bold");

    pdf.text(130, 18, "Invoice");

    pdf.setFillColor(0,63,171);

    // Add a filled rectangular box to the PDF
    pdf.rect(130, 24, 16, 7, "F"); // 'F' stands for 'Fill'

    // Set text color to white
    pdf.setTextColor(255, 255, 255); // White color
    pdf.text(`C`, 133, 30);

    pdf.setTextColor(0, 0, 0);
    pdf.setFontSize(10);
    pdf.setFont(undefined, "none");
    pdf.text(146, 30, " 72042 08209");


    //input
    pdf.rect(12, 41, 95, 7);
    pdf.text(`NAME: ${formData.name}`, 13, 45, { align: "left" });
    pdf.rect(12, 48, 95, 7);
    pdf.text(`NUMBER: ${formData.mobile}`, 13, 52.5, { align: "left" });
    pdf.rect(12, 55, 178, 7);
    pdf.text(`ADDRESS: ${formData.address}`, 13, 59.5, { align: "left" });

    const currentDate = new Date().toLocaleDateString();
    pdf.rect(107, 41, 83, 7);
    pdf.text(`DATE: ${currentDate}`, 108, 45.4);
    pdf.text(`BILL NO: ${count}`, 108, 52.5, { align: "left" });

    pdf.rect(107, 48, 83, 7);
   

    //end of first layer

    pdf.setFontSize(12);
    pdf.setFillColor(0,63,171);
    pdf.rect(12, 66, 178, 7, "F");



    pdf.setFont(undefined, "bold");
    pdf.setTextColor(255, 255, 255);
    pdf.text(`Sl No`, 14, 71);
    pdf.text(`Particulars`, 56, 71);
    pdf.text(`Rate`, 116, 71);
    pdf.text(`Qty`, 140, 71);
    pdf.text(`Amount`, 165, 71);

    pdf.setTextColor(0, 0, 0);
    pdf.setFont(undefined, "none");
    pdf.text(`01`, 17, 78);
    pdf.text(`02`, 17, 85);
    pdf.text(`03`, 17, 92);
    pdf.text(`04`, 17, 99);
    pdf.text(`05`, 17, 106);
    pdf.text(`06`, 17, 113);
    pdf.text(`07`, 17, 120);
    pdf.text(`08`, 17, 127);
    pdf.text(`09`, 17, 134);
    pdf.text(`10`, 17, 141);
    pdf.text(`11`, 17, 148);
    pdf.text(`12`, 17, 155);
    pdf.text(`13`, 17, 162);
    pdf.text(`14`, 17, 169);
    pdf.text(`15`, 17, 176);
    pdf.text(`16`, 17, 183);
    pdf.text(`17`, 17, 190);
    pdf.text(`18`, 17, 197);
    pdf.text(`19`, 17, 204);
    pdf.text(`20`, 17, 211);

    pdf.setDrawColor(0, 0, 0);
    pdf.rect(12, 73, 14, 7);
    pdf.rect(26, 73, 82, 7);
    pdf.rect(108, 73, 26, 7);
    pdf.rect(134, 73, 20, 7);
    pdf.rect(154, 73, 36, 7);
    //1
    pdf.rect(12, 66, 14, 7);
    pdf.rect(26, 66, 82, 7);
    pdf.rect(108, 66, 26, 7);
    pdf.rect(134, 66, 20, 7);
    pdf.rect(154, 66, 36, 7);
    //2
    pdf.rect(12, 80, 14, 7);
    pdf.rect(26, 80, 82, 7);
    pdf.rect(108, 80, 26, 7);
    pdf.rect(134, 80, 20, 7);
    pdf.rect(154, 80, 36, 7);
    //3
    pdf.rect(12, 87, 14, 7);
    pdf.rect(26, 87, 82, 7);
    pdf.rect(108, 87, 26, 7);
    pdf.rect(134, 87, 20, 7);
    pdf.rect(154, 87, 36, 7);
    //4
    pdf.rect(12, 87, 14, 7);
    pdf.rect(26, 87, 82, 7);
    pdf.rect(108, 87, 26, 7);
    pdf.rect(134, 87, 20, 7);
    pdf.rect(154, 87, 36, 7);
    //5
    pdf.rect(12, 87, 14, 7);
    pdf.rect(26, 87, 82, 7);
    pdf.rect(108, 87, 26, 7);
    pdf.rect(134, 87, 20, 7);
    pdf.rect(154, 87, 36, 7);
    //6
    pdf.rect(12, 94, 14, 7);
    pdf.rect(26, 94, 82, 7);
    pdf.rect(108, 94, 26, 7);
    pdf.rect(134, 94, 20, 7);
    pdf.rect(154, 94, 36, 7);
    //7
    pdf.rect(12, 101, 14, 7);
    pdf.rect(26, 101, 82, 7);
    pdf.rect(108, 101, 26, 7);
    pdf.rect(134, 101, 20, 7);
    pdf.rect(154, 101, 36, 7);
    //8
    pdf.rect(12, 108, 14, 7);
    pdf.rect(26, 108, 82, 7);
    pdf.rect(108, 108, 26, 7);
    pdf.rect(134, 108, 20, 7);
    pdf.rect(154, 108, 36, 7);
    //9
    pdf.rect(12, 115, 14, 7);
    pdf.rect(26, 115, 82, 7);
    pdf.rect(108, 115, 26, 7);
    pdf.rect(134, 115, 20, 7);
    pdf.rect(154, 115, 36, 7);
    //10
    pdf.rect(12, 122, 14, 7);
    pdf.rect(26, 122, 82, 7);
    pdf.rect(108, 122, 26, 7);
    pdf.rect(134, 122, 20, 7);
    pdf.rect(154, 122, 36, 7);
    //11
    pdf.rect(12, 129, 14, 7);
    pdf.rect(26, 129, 82, 7);
    pdf.rect(108, 129, 26, 7);
    pdf.rect(134, 129, 20, 7);
    pdf.rect(154, 129, 36, 7);
    //12
    pdf.rect(12, 136, 14, 7);
    pdf.rect(26, 136, 82, 7);
    pdf.rect(108, 136, 26, 7);
    pdf.rect(134, 136, 20, 7);
    pdf.rect(154, 136, 36, 7);
    //13
    pdf.rect(12, 143, 14, 7);
    pdf.rect(26, 143, 82, 7);
    pdf.rect(108, 143, 26, 7);
    pdf.rect(134, 143, 20, 7);
    pdf.rect(154, 143, 36, 7);
    //14
    pdf.rect(12, 150, 14, 7);
    pdf.rect(26, 150, 82, 7);
    pdf.rect(108, 150, 26, 7);
    pdf.rect(134, 150, 20, 7);
    pdf.rect(154, 150, 36, 7);
    //15
    pdf.rect(12, 157, 14, 7);
    pdf.rect(26, 157, 82, 7);
    pdf.rect(108, 157, 26, 7);
    pdf.rect(134, 157, 20, 7);
    pdf.rect(154, 157, 36, 7);
    //16
    pdf.rect(12, 164, 14, 7);
    pdf.rect(26, 164, 82, 7);
    pdf.rect(108, 164, 26, 7);
    pdf.rect(134, 164, 20, 7);
    pdf.rect(154, 164, 36, 7);
    //17
    pdf.rect(12, 171, 14, 7);
    pdf.rect(26, 171, 82, 7);
    pdf.rect(108, 171, 26, 7);
    pdf.rect(134, 171, 20, 7);
    pdf.rect(154, 171, 36, 7);
    //18
    pdf.rect(12, 178, 14, 7);
    pdf.rect(26, 178, 82, 7);
    pdf.rect(108, 178, 26, 7);
    pdf.rect(134, 178, 20, 7);
    pdf.rect(154, 178, 36, 7);
    //19
    pdf.rect(12, 185, 14, 7);
    pdf.rect(26, 185, 82, 7);
    pdf.rect(108, 185, 26, 7);
    pdf.rect(134, 185, 20, 7);
    pdf.rect(154, 185, 36, 7);
    //20
    pdf.rect(12, 192, 14, 7);
    pdf.rect(26, 192, 82, 7);
    pdf.rect(108, 192, 26, 7);
    pdf.rect(134, 192, 20, 7);
    pdf.rect(154, 192, 36, 7);
    //21
    pdf.rect(12, 199, 14, 7);
    pdf.rect(26, 199, 82, 7);
    pdf.rect(108, 199, 26, 7);
    pdf.rect(134, 199, 20, 7);
    pdf.rect(154, 199, 36, 7);
    //22
    pdf.rect(12, 206, 14, 7);
    pdf.rect(26, 206, 82, 7);
    pdf.rect(108, 206, 26, 7);
    pdf.rect(134, 206, 20, 7);
    pdf.rect(154, 206, 36, 7);

    pdf.rect(154, 213, 36, 10);
    pdf.rect(12, 213, 142, 10);
    pdf.rect(12, 223, 178, 50);
    pdf.setFontSize(18);
    pdf.setFont(undefined, "bold");
    pdf.text(`Total`, 135, 220);
 

    pdf.setFontSize(16);
    pdf.setTextColor(0,63,171);

    pdf.text(`For HM Sanitation`, 136, 230);

    pdf.setFontSize(14);
    pdf.setTextColor(0, 0, 0);


 



    // Remove spaces and special characters from name and mobile
    const sanitizedName = formData.name.replace(/[^a-zA-Z0-9]/g, "");
    const sanitizedMobile = formData.mobile.replace(/[^0-9]/g, "");

    const pdfName = `Hms_Invoice_${sanitizedName}.pdf`;

    pdf.save(pdfName);
  };

  return (
    <div className="form-container">
      {/* <h4><Link to="/">Go to Home</Link></h4> */}
      <h4>HM Saniation Invoice</h4>

      <form onSubmit={handleSubmit}>
        <div className="display-inline">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="input margin"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              title="Please enter name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="display-inline">
          <div className="form-group">
            <label htmlFor="mobile">Mobile:</label>
            <input
              className="input margin"
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="from">Transportation Charges</label>
            <input
              className="input margin"
              type="text"
              id="transportCharges"
              name="transportCharges"
              value={formData.transportCharges}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="display-inline">
          <div className="form-group">
            <label htmlFor="from">From Location:</label>
            <input
              className="input margin"
              type="text"
              id="from"
              name="from"
              value={formData.from}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="from">To Location:</label>
            <input
              type="text"
              id="toLocation"
              name="toLocation"
              value={formData.toLocation}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="display-inline">
          <div className="form-group">
            <label htmlFor="from">Storage Charges :</label>
            <input
              type="text"
              className="input margin"
              id="storageCharges"
              name="storageCharges"
              value={formData.storageCharges}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="from">GST :</label>
            <input
              type="text"
              className="input margin"
              id="gst"
              name="gst"
              value={formData.gst}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="display-inline">
          <div className="form-group">
            <label htmlFor="from">Insurance :</label>
            <input
              type="text"
              className="input margin"
              id="insurance"
              name="insurance"
              value={formData.insurance}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="from">Documentation Charges :</label>
            <input
              type="text"
              className="input margin"
              id="docCharges"
              name="docCharges"
              value={formData.docCharges}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className=" margin">
          <div className="form-group">
            <label htmlFor="from">Description :</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button type="submit" className="submit-button margin">
          Download
        </button>
        <button className="submit-button" onClick={handleClear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default HMSInvoice;
