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
    no1Rate: "",no2Rate: "",no3Rate: "",no4Rate: "",no5Rate: "",no6Rate: "",no7Rate: "",no8Rate: "",
    no9Rate: "",no10Rate: "",no11Rate: "",no12Rate: "",no13Rate: "",no14Rate: "",no15Rate: "",no16Rate: "",
    no17Rate: "",no18Rate: "",no19Rate: "",no20Rate: "",

    no1Item: "",no2Item: "",no3Item: "",no4Item: "",no5Item: "",no6Item: "",no7Item: "",no8Item: "",
    no9Item: "",no10Item: "",no11Item: "",no12Item: "",no13Item: "",no14Item: "",no15Item: "",no16Item: "",
    no17Item: "",no18Item: "",no19Item: "",no20Item: "",

    qty1: "", qty2: "", qty3: "", qty4: "", qty5: "", qty6: "", qty7: "", qty8: "", qty9: "", qty10: "",
    qty11: "", qty12: "", qty13: "", qty14: "", qty15: "", qty16: "", qty17: "", qty18: "", qty19: "", qty20: "",
    amount1: "",
    amount2: "",
    name: "",
    mobile: "",
    address: "",
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
      no1Rate: "",no2Rate: "",no3Rate: "",no4Rate: "",no5Rate: "",no6Rate: "",no7Rate: "",no8Rate: "",
    no9Rate: "",no10Rate: "",no11Rate: "",no12Rate: "",no13Rate: "",no14Rate: "",no15Rate: "",no16Rate: "",
    no17Rate: "",no18Rate: "",no19Rate: "",no20Rate: "",

    no1Item: "",no2Item: "",no3Item: "",no4Item: "",no5Item: "",no6Item: "",no7Item: "",no8Item: "",
    no9Item: "",no10Item: "",no11Item: "",no12Item: "",no13Item: "",no14Item: "",no15Item: "",no16Item: "",
    no17Item: "",no18Item: "",no19Item: "",no20Item: "",

    qty1: "", qty2: "", qty3: "", qty4: "", qty5: "", qty6: "", qty7: "", qty8: "", qty9: "", qty10: "",
    qty11: "", qty12: "", qty13: "", qty14: "", qty15: "", qty16: "", qty17: "", qty18: "", qty19: "", qty20: "",
      name: "",
      mobile: "",
      address: "",
  
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
    pdf.text(12, 30, "No. 170,6th cross,Balaji Nagar, Bangalore - 560029");
    pdf.text(
      12,
      34,
      "E-Mail :hmsanitation@gmail.com             Web : www.hmsanitation.in"
    );
    pdf.setFontSize(10);
    pdf.setFont(undefined, "bold");

    pdf.text(130, 18, "Invoice");

    pdf.setFillColor(0, 63, 171);

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
    pdf.rect(12, 55, 185, 7);
    pdf.text(`ADDRESS: ${formData.address}`, 13, 59.5, { align: "left" });
  
    const currentDate = new Date().toLocaleDateString();
    pdf.rect(107, 41, 90, 7);
    pdf.text(`DATE: ${currentDate}`, 108, 45.4);
    pdf.text(`BILL NO: ${count}`, 108, 52.5, { align: "left" });

    pdf.rect(107, 48, 90, 7);

    //end of first layer

    pdf.setFontSize(12);
    pdf.setFillColor(0, 63, 171);
    pdf.rect(12, 66, 185, 7, "F");

    pdf.setFont(undefined, "bold");
    pdf.setTextColor(255, 255, 255);
    pdf.text(`Sl No`, 14, 71);
    pdf.text(`Particulars`, 56, 71);
    pdf.text(`Rate`, 116, 71);
    pdf.text(`Qty`, 140, 71);
    pdf.text(`Amount`, 168, 71);

    pdf.setTextColor(0, 0, 0);
    pdf.setFont(undefined, "none");

    pdf.setDrawColor(0, 0, 0);

    pdf.rect(12, 73, 14, 7);
    pdf.rect(26, 73, 82, 7);
    pdf.rect(108, 73, 26, 7);
    pdf.rect(134, 73, 20, 7);
    pdf.rect(154, 73, 43, 7);
    pdf.text(`01`, 17, 78);
    pdf.text(`${formData.no1Item}`, 30, 78);
    pdf.text(`${formData.no1Rate}`, 116, 78);
    pdf.text(`${formData.qty1}`, 143, 78);
    let amount1 = formData.no1Rate * formData.qty1
    if (isNaN(amount1) || amount1=== 0) {
      amount1 = "";
    }
    pdf.text(`${amount1}`, 170, 78);

    //1
    pdf.rect(12, 66, 14, 7);
    pdf.rect(26, 66, 82, 7);
    pdf.rect(108, 66, 26, 7);
    pdf.rect(134, 66, 20, 7);
    pdf.rect(154, 66, 43, 7);
    //2
    pdf.rect(12, 80, 14, 7);
    pdf.rect(26, 80, 82, 7);
    pdf.rect(108, 80, 26, 7);
    pdf.rect(134, 80, 20, 7);
    pdf.rect(154, 80, 43, 7);
    pdf.text(`02`, 17, 85);
    pdf.text(`${formData.no2Item}`, 30, 85);
    pdf.text(`${formData.no2Rate}`, 116, 85);
    pdf.text(`${formData.qty2}`, 143, 85); 
   
    let amount2 = formData.no2Rate * formData.qty2;
    if (isNaN(amount2) || amount2 === 0) {
      amount2 = "";
    }
    pdf.text(`${amount2}`, 170, 85);
    //3
    pdf.rect(12, 87, 14, 7);
    pdf.rect(26, 87, 82, 7);
    pdf.rect(108, 87, 26, 7);
    pdf.rect(134, 87, 20, 7);
    pdf.rect(154, 87, 43, 7);
    pdf.text(`03`, 17, 92);
    pdf.text(`${formData.no3Item}`, 30, 92);
    pdf.text(`${formData.no3Rate}`, 116, 92);
    pdf.text(`${formData.qty3}`, 143, 92);
    let amount3 = formData.no3Rate * formData.qty3
    if (isNaN(amount3) || amount3=== 0) {
      amount3 = "";
    }
    pdf.text(`${amount3}`, 170, 92);

    //4
    pdf.rect(12, 87, 14, 7);
    pdf.rect(26, 87, 82, 7);
    pdf.rect(108, 87, 26, 7);
    pdf.rect(134, 87, 20, 7);
    pdf.rect(154, 87, 43, 7);
    pdf.text(`04`, 17, 99);
    pdf.text(`${formData.no4Item}`, 30, 99);
    pdf.text(`${formData.no4Rate}`, 116, 99);
    pdf.text(`${formData.qty4}`, 143, 99);
    let amount4 = formData.no4Rate * formData.qty4
    if (isNaN(amount4) || amount4=== 0) {
      amount4 = "";
    }
    pdf.text(`${amount4}`, 170, 99);
    //5
    pdf.rect(12, 87, 14, 7);
    pdf.rect(26, 87, 82, 7);
    pdf.rect(108, 87, 26, 7);
    pdf.rect(134, 87, 20, 7);
    pdf.rect(154, 87, 43, 7);
    pdf.text(`05`, 17, 106);
    pdf.text(`${formData.no5Item}`, 30, 106);
    pdf.text(`${formData.no5Rate}`, 116, 106);
    pdf.text(`${formData.qty5}`, 143, 106);

    let amount5 = formData.no5Rate * formData.qty5
    if (isNaN(amount5) || amount5=== 0) {
      amount5 = "";
    }

    pdf.text(`${amount5}`, 170, 106);
    //6
    pdf.rect(12, 94, 14, 7);
    pdf.rect(26, 94, 82, 7);
    pdf.rect(108, 94, 26, 7);
    pdf.rect(134, 94, 20, 7);
    pdf.rect(154, 94, 43, 7);
    pdf.text(`06`, 17, 113);
    pdf.text(`${formData.no6Item}`, 30, 113);
    pdf.text(`${formData.no6Rate}`, 116, 113);
    pdf.text(`${formData.qty6}`, 143, 113);

    let amount6 = formData.no6Rate * formData.qty6
    if (isNaN(amount6) || amount6=== 0) {
      amount6 = "";
    }

    pdf.text(`${amount5}`, 170, 113);
    //7
    pdf.rect(12, 101, 14, 7);
    pdf.rect(26, 101, 82, 7);
    pdf.rect(108, 101, 26, 7);
    pdf.rect(134, 101, 20, 7);
    pdf.rect(154, 101, 43, 7);
    pdf.text(`07`, 17, 120);
    pdf.text(`${formData.no7Item}`, 30, 120);
    pdf.text(`${formData.no7Rate}`, 116, 120);
    pdf.text(`${formData.qty7}`, 143, 120);

    let amount7 = formData.no7Rate * formData.qty7
    if (isNaN(amount7) || amount7=== 0) {
      amount7 = "";
    }
    pdf.text(`${amount7}`, 170, 120);
    //8
    pdf.rect(12, 108, 14, 7);
    pdf.rect(26, 108, 82, 7);
    pdf.rect(108, 108, 26, 7);
    pdf.rect(134, 108, 20, 7);
    pdf.rect(154, 108, 43, 7);
    pdf.text(`08`, 17, 127);
    pdf.text(`${formData.no8Item}`, 30, 127);
    pdf.text(`${formData.no8Rate}`, 116, 127);
    pdf.text(`${formData.qty8}`, 143, 127);

    let amount8 = formData.no8Rate * formData.qty8
    if (isNaN(amount8) || amount8=== 0) {
      amount8 = "";
    }
    pdf.text(`${amount8}`, 170, 127);
    //9
    pdf.rect(12, 115, 14, 7);
    pdf.rect(26, 115, 82, 7);
    pdf.rect(108, 115, 26, 7);
    pdf.rect(134, 115, 20, 7);
    pdf.rect(154, 115, 43, 7);
    pdf.text(`09`, 17, 134);
    pdf.text(`${formData.no9Item}`, 30, 134);
    pdf.text(`${formData.no9Rate}`, 116, 134);
    pdf.text(`${formData.qty9}`, 143, 134);

    let amount9 = formData.no9Rate * formData.qty9
    if (isNaN(amount9) || amount9=== 0) {
      amount9 = "";
    }
    pdf.text(`${amount9}`, 170, 134);
    //10
    pdf.rect(12, 122, 14, 7);
    pdf.rect(26, 122, 82, 7);
    pdf.rect(108, 122, 26, 7);
    pdf.rect(134, 122, 20, 7);
    pdf.rect(154, 122, 43, 7);
    pdf.text(`10`, 17, 141);
    pdf.text(`${formData.no10Item}`, 30, 141);
    pdf.text(`${formData.no10Rate}`, 116, 141);
    pdf.text(`${formData.qty10}`, 143, 141);

    let amount10 = formData.no10Rate * formData.qty10
    if (isNaN(amount10) || amount10=== 0) {
      amount10 = "";
    }
    pdf.text(`${amount10}`, 170, 141);
    //11
    pdf.rect(12, 129, 14, 7);
    pdf.rect(26, 129, 82, 7);
    pdf.rect(108, 129, 26, 7);
    pdf.rect(134, 129, 20, 7);
    pdf.rect(154, 129, 43, 7);
    pdf.text(`11`, 17, 148);
    pdf.text(`${formData.no11Item}`, 30, 148);
    pdf.text(`${formData.no11Rate}`, 116, 148);
    pdf.text(`${formData.qty11}`, 143, 148);

    let amount11 = formData.no11Rate * formData.qty11
    if (isNaN(amount11) || amount11=== 0) {
      amount11 = "";
    }
    pdf.text(`${amount11}`, 170, 148);
    //12
    pdf.rect(12, 136, 14, 7);
    pdf.rect(26, 136, 82, 7);
    pdf.rect(108, 136, 26, 7);
    pdf.rect(134, 136, 20, 7);
    pdf.rect(154, 136, 43, 7);
    pdf.text(`12`, 17, 155);
    pdf.text(`${formData.no12Item}`, 30, 155);
    pdf.text(`${formData.no12Rate}`, 116, 155);
    pdf.text(`${formData.qty12}`, 143, 155);

    let amount12 = formData.no12Rate * formData.qty12
    if (isNaN(amount12) || amount12=== 0) {
      amount12 = "";
    }
    pdf.text(`${amount12}`, 170, 155);
    //13
    pdf.rect(12, 143, 14, 7);
    pdf.rect(26, 143, 82, 7);
    pdf.rect(108, 143, 26, 7);
    pdf.rect(134, 143, 20, 7);
    pdf.rect(154, 143, 43, 7);
    pdf.text(`13`, 17, 162);
    pdf.text(`${formData.no13Item}`, 30, 162);
    pdf.text(`${formData.no13Rate}`, 116, 162);
    pdf.text(`${formData.qty13}`, 143, 162);

    let amount13 = formData.no13Rate * formData.qty13
    if (isNaN(amount13) || amount13=== 0) {
      amount13 = "";
    }
    pdf.text(`${amount13}`, 170, 162);
    //14
    pdf.rect(12, 150, 14, 7);
    pdf.rect(26, 150, 82, 7);
    pdf.rect(108, 150, 26, 7);
    pdf.rect(134, 150, 20, 7);
    pdf.rect(154, 150, 43, 7);
    pdf.text(`14`, 17, 169);
    pdf.text(`${formData.no14Item}`, 30, 169);
    pdf.text(`${formData.no14Rate}`, 116, 169);
    pdf.text(`${formData.qty14}`, 143, 169);

    let amount14 = formData.no14rRate * formData.qty14
    if (isNaN(amount14) || amount14=== 0) {
      amount14 = "";
    }
    pdf.text(`${amount14}`, 170, 169);
    //15
    pdf.rect(12, 157, 14, 7);
    pdf.rect(26, 157, 82, 7);
    pdf.rect(108, 157, 26, 7);
    pdf.rect(134, 157, 20, 7);
    pdf.rect(154, 157, 43, 7);
    pdf.text('15', 17, 176);
    pdf.text(`${formData.no15Item}`, 30, 176);
    pdf.text(`${formData.no15Rate}`, 116, 176);
    pdf.text(`${formData.qty15}`, 143, 176);

    let amount15 = formData.no15Rate * formData.qty15
    if (isNaN(amount15) || amount15=== 0) {
      amount15 = "";
    }
    pdf.text(`${amount15}`, 170, 176);
    //16
    pdf.rect(12, 164, 14, 7);
    pdf.rect(26, 164, 82, 7);
    pdf.rect(108, 164, 26, 7);
    pdf.rect(134, 164, 20, 7);
    pdf.rect(154, 164, 43, 7);
    pdf.text(`16`, 17, 183);
    pdf.text(`${formData.no16Item}`, 30, 183);
    pdf.text(`${formData.no16Rate}`, 116, 183);
    pdf.text(`${formData.qty16}`, 143, 183);

    let amount16 = formData.no16Rate * formData.qty16
    if (isNaN(amount16) || amount16=== 0) {
      amount16 = "";
    }
    pdf.text(`${amount16}`, 170, 183);
    //17
    pdf.rect(12, 171, 14, 7);
    pdf.rect(26, 171, 82, 7);
    pdf.rect(108, 171, 26, 7);
    pdf.rect(134, 171, 20, 7);
    pdf.rect(154, 171, 43, 7);
    pdf.text(`17`, 17, 190);
    pdf.text(`${formData.no17Item}`, 30, 190);
    pdf.text(`${formData.no17Rate}`, 116, 190);
    pdf.text(`${formData.qty17}`, 143, 190);

    let amount17 = formData.no17Rate * formData.qty17
    if (isNaN(amount17) || amount17=== 0) {
      amount17 = "";
    }
    pdf.text(`${amount17}`, 170, 190);
    //18
    pdf.rect(12, 178, 14, 7);
    pdf.rect(26, 178, 82, 7);
    pdf.rect(108, 178, 26, 7);
    pdf.rect(134, 178, 20, 7);
    pdf.rect(154, 178, 43, 7);
    pdf.text(`18`, 17, 197);
    pdf.text(`${formData.no18Item}`, 30, 197);
    pdf.text(`${formData.no18Rate}`, 116, 197);
    pdf.text(`${formData.qty18}`, 143, 197);

    let amount18 = formData.no18Rate * formData.qty18
    if (isNaN(amount18) || amount18=== 0) {
      amount18 = "";
    }
    pdf.text(`${amount18}`, 170, 197);
    //19
    pdf.rect(12, 185, 14, 7);
    pdf.rect(26, 185, 82, 7);
    pdf.rect(108, 185, 26, 7);
    pdf.rect(134, 185, 20, 7);
    pdf.rect(154, 185, 43, 7);
    pdf.text(`19`, 17, 204);
    pdf.text(`${formData.no19Item}`, 30, 204);
    pdf.text(`${formData.no19Rate}`, 116, 204);
    pdf.text(`${formData.qty19}`, 143, 204);

    let amount19 = formData.no19Rate * formData.qty19
    if (isNaN(amount19) || amount19=== 0) {
      amount19 = "";
    }
    pdf.text(`${amount19}`, 170, 204);
    //20
    pdf.rect(12, 192, 14, 7);
    pdf.rect(26, 192, 82, 7);
    pdf.rect(108, 192, 26, 7);
    pdf.rect(134, 192, 20, 7);
    pdf.rect(154, 192, 43, 7);
    pdf.text(`20`, 17, 211);
    pdf.text(`${formData.no20Item}`, 30, 211);
    pdf.text(`${formData.no20Rate}`, 116, 211);
    pdf.text(`${formData.qty20}`, 143, 211);

    let amount20 = formData.no20Rate * formData.qty20
    if (isNaN(amount20) || amount20=== 0) {
      amount20 = "";
    }
    pdf.text(`${amount20}`, 170, 211);

    pdf.rect(12, 199, 14, 7);
    pdf.rect(26, 199, 82, 7);
    pdf.rect(108, 199, 26, 7);
    pdf.rect(134, 199, 20, 7);
    pdf.rect(154, 199, 43, 7);

    pdf.rect(12, 206, 14, 7);
    pdf.rect(26, 206, 82, 7);
    pdf.rect(108, 206, 26, 7);
    pdf.rect(134, 206, 20, 7);
    pdf.rect(154, 206, 43, 7);

    pdf.rect(154, 213, 43, 10);
    pdf.rect(12, 213, 142, 10);
    pdf.rect(12, 223, 185, 50);
    pdf.setFontSize(18);
    pdf.setFont(undefined, "bold");
    pdf.text(`Total`, 135, 220);
    let totalAmount = amount1 + amount2 + amount3 + amount4 + amount5 + amount6 + amount7 + amount8 + amount9 + amount10 + amount11 + amount12 + amount13 + amount14 + amount15 + amount16 + amount17 + amount18 + amount19 + amount20
    pdf.text(`${totalAmount}`, 165, 220);

    pdf.setFontSize(16);
    pdf.setTextColor(0, 63, 171);

    pdf.text(`For HM Sanitation`, 136, 230);

    pdf.text(`Thank You`, 70, 340);

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
   
            <input
              type="text"
              className="input margin"
              placeholder="Name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              title="Please enter name"
            />
          </div>

          <div className="form-group">
            <input
              className="input margin"
              type="text"
              id="mobile"
              placeholder="Mobile"

              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
            />
          </div>
         
        </div>
        <div className="display-inline">
          

          <div className="form-group">
            <input
              className="inputAddress "
              type="text"
              id="address"
              placeholder="Address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="display-inline ">
          <div className="form-group">
            <label>Particulars</label>
            <input
              className="inputItem margin"
              type="text"
              id="no1Item"
              placeholder="Item 1"
              name="no1Item"
              value={formData.no1Item}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Qty</label>
            <input
              className="inputQty"
              type="text"
              id="qty1"
              placeholder="Qty 1"
              name="qty1"
              value={formData.qty1}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Rate</label>
            <input
              className="inputRate"
              type="text"
              id="no1Rate"
              placeholder="Rate 1"
              name="no1Rate"
              value={formData.no1Rate}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* 2 */}
        <div className="display-inline ">
          <div className="form-group">
            <input
              className="inputItem margin"
              type="text"
              id="no2Item"
              name="no2Item"
              value={formData.no2Item}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputQty"
              type="text"
              id="qty2"
              name="qty2"
              value={formData.qty2}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputRate"
              type="text"
              id="no2Rate"
              name="no2Rate"
              value={formData.no2Rate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* 3 */}
        <div className="display-inline ">
          <div className="form-group">
            <input
              className="inputItem margin"
              type="text"
              id="no3Item"
              name="no3Item"
              value={formData.no3Item}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputQty"
              type="text"
              id="qty3"
              name="qty3"
              value={formData.qty3}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputRate"
              type="text"
              id="no3Rate"
              name="no3Rate"
              value={formData.no3Rate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* 4 */}
        <div className="display-inline ">
          <div className="form-group">
            <input
              className="inputItem margin"
              type="text"
              id="no4Item"
              name="no4Item"
              value={formData.no4Item}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputQty"
              type="text"
              id="qty4"
              name="qty4"
              value={formData.qty4}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputRate"
              type="text"
              id="no4Rate"
              name="no4Rate"
              value={formData.no4Rate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* 5 */}
        <div className="display-inline ">
          <div className="form-group">
            <input
              className="inputItem margin"
              type="text"
              id="no5Item"
              name="no5Item"
              placeholder="Item 5"
              value={formData.no5Item}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputQty"
              type="text"
              id="qty5"
              placeholder="Qty 5"
              name="qty5"
              value={formData.qty5}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputRate"
              type="text"
              id="no5Rate"
              placeholder="Rate 5"
              name="no5Rate"
              value={formData.no5Rate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {formData.no5Rate != "" ?
       
        <div>
        <div className="display-inline ">
          <div className="form-group">
            <input
              className="inputItem margin"
              type="text"
              id="no6Item"
              placeholder="Item 6"
              name="no6Item"
              value={formData.no6Item}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputQty"
              type="text"
              id="qty6"
              placeholder="Qty 6"
              name="qty6"
              value={formData.qty6}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputRate"
              type="text"
              id="no6Rate"
              placeholder="Rate 6"
              name="no6Rate"
              value={formData.no6Rate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        
        <div className="display-inline ">
          <div className="form-group">
            <input
              className="inputItem margin"
              type="text"
              id="no7Item"
              name="no7Item"
              value={formData.no7Item}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputQty"
              type="text"
              id="qty7"
              name="qty7"
              value={formData.qty7}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputRate"
              type="text"
              id="no7Rate"
              name="no7Rate"
              value={formData.no7Rate}
              onChange={handleInputChange}
            />
          </div>
        </div>
    
        <div className="display-inline ">
          <div className="form-group">
            <input
              className="inputItem margin"
              type="text"
              id="no8Item"
              name="no8Item"
              value={formData.no8Item}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputQty"
              type="text"
              id="qty8"
              name="qty8"
              value={formData.qty8}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputRate"
              type="text"
              id="no8Rate"
              name="no8Rate"
              value={formData.no8Rate}
              onChange={handleInputChange}
            />
          </div>
        </div>
  
        <div className="display-inline ">
          <div className="form-group">
            <input
              className="inputItem margin"
              type="text"
              id="no9Item"
              name="no9Item"
              value={formData.no9Item}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputQty"
              type="text"
              id="qty9"
              name="qty9"
              value={formData.qty9}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputRate"
              type="text"
              id="no9Rate"
              name="no9Rate"
              value={formData.no9Rate}
              onChange={handleInputChange}
            />
          </div>
        </div>
    
        <div className="display-inline ">
          <div className="form-group">
            <input
              className="inputItem margin"
              type="text"
              id="no10Item"
              name="no10Item"
              value={formData.no10Item}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputQty"
              type="text"
              id="qty10"
              name="qty10"
              value={formData.qty10}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputRate"
              type="text"
              id="no10Rate"
              name="no10Rate"
              value={formData.no10Rate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        </div>
        : ""
        }
         {formData.no10Rate != "" ?
       
       <div>
        {/* 11 */}
        <div className="display-inline ">
          <div className="form-group">
            <input
              className="inputItem margin"
              type="text"
              id="no11Item"
              name="no11Item"
              value={formData.no11Item}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputQty"
              type="text"
              id="qty11"
              name="qty11"
              value={formData.qty11}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputRate"
              type="text"
              id="no11Rate"
              name="no11Rate"
              value={formData.no11Rate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* 12 */}
        <div className="display-inline ">
          <div className="form-group">
            <input
              className="inputItem margin"
              type="text"
              id="no12Item"
              name="no12Item"
              value={formData.no12Item}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputQty"
              type="text"
              id="qty12"
              name="qty12"
              value={formData.qty12}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputRate"
              type="text"
              id="no12Rate"
              name="no12Rate"
              value={formData.no12Rate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* 13 */}
        <div className="display-inline ">
          <div className="form-group">
            <input
              className="inputItem margin"
              type="text"
              id="no13Item"
              name="no13Item"
              value={formData.no13Item}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputQty"
              type="text"
              id="qty13"
              name="qty13"
              value={formData.qty13}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputRate"
              type="text"
              id="no13Rate"
              name="no13Rate"
              value={formData.no13Rate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* 14 */}
        <div className="display-inline ">
          <div className="form-group">
            <input
              className="inputItem margin"
              type="text"
              id="no14Item"
              name="no14Item"
              value={formData.no14Item}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputQty"
              type="text"
              id="qty14"
              name="qty14"
              value={formData.qty14}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputRate"
              type="text"
              id="no14Rate"
              name="no14Rate"
              value={formData.no14Rate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* 15 */}
        <div className="display-inline ">
          <div className="form-group">
            <input
              className="inputItem margin"
              type="text"
              id="no15Item"
              name="no15Item"
              value={formData.no15Item}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputQty"
              type="text"
              id="qty15"
              name="qty15"
              value={formData.qty15}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputRate"
              type="text"
              id="no15Rate"
              name="no15Rate"
              value={formData.no15Rate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        </div>
          : ""
        }
         {formData.no15Rate != "" ?
       
       <div>
        {/* 16 */}
        <div className="display-inline ">
          <div className="form-group">
            <input
              className="inputItem margin"
              type="text"
              id="no16Item"
              name="no16Item"
              value={formData.no16Item}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputQty"
              type="text"
              id="qty16"
              name="qty16"
              value={formData.qty16}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputRate"
              type="text"
              id="no16Rate"
              name="no16Rate"
              value={formData.no16Rate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* 17 */}
        <div className="display-inline ">
          <div className="form-group">
            <input
              className="inputItem margin"
              type="text"
              id="no17Item"
              name="no17Item"
              value={formData.no17Item}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputQty"
              type="text"
              id="qty17"
              name="qty17"
              value={formData.qty17}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputRate"
              type="text"
              id="no17Rate"
              name="no17Rate"
              value={formData.no17Rate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* 18 */}
        <div className="display-inline ">
          <div className="form-group">
            <input
              className="inputItem margin"
              type="text"
              id="no18Item"
              name="no18Item"
              value={formData.no18Item}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputQty"
              type="text"
              id="qty18"
              name="qty18"
              value={formData.qty18}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputRate"
              type="text"
              id="no18Rate"
              name="no18Rate"
              value={formData.no18Rate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* 19 */}
        <div className="display-inline ">
          <div className="form-group">
            <input
              className="inputItem margin"
              type="text"
              id="no19Item"
              name="no19Item"
              value={formData.no19Item}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputQty"
              type="text"
              id="qty19"
              name="qty19"
              value={formData.qty19}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputRate"
              type="text"
              id="no19Rate"
              name="no19Rate"
              value={formData.no19Rate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* 20 */}
        <div className="display-inline ">
          <div className="form-group">
            <input
              className="inputItem margin"
              type="text"
              id="no20Item"
              name="no20Item"
              value={formData.no20Item}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputQty"
              type="text"
              id="qty20"
              name="qty20"
              value={formData.qty20}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              className="inputRate"
              type="text"
              id="no20Rate"
              name="no20Rate"
              value={formData.no20Rate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        </div>
     

        : ""
      }

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
