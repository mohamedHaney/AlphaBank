import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./payments-details.css";

const PaymentsDetails = () => {
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);

  const handleCheckboxChange1 = () => {
    setChecked1(!isChecked1);
    setChecked2(false); // Uncheck the other checkbox
  };

  const handleCheckboxChange2 = () => {
    setChecked2(!isChecked2);
    setChecked1(false); // Uncheck the other checkbox
  };

  const buttonStyle1 = isChecked1 ? { backgroundColor: "orangered" } : {};
  const buttonStyle2 = isChecked2 ? { backgroundColor: "orangered" } : {};

  return (
    <div className="main">
      <div className="first-d">
        <p className="p-details">payment details</p>
        <div className="sec-d">
          <div className="small-div">
            <i className="fa-solid fa-building-columns"></i>
            <p>Alpha Bank</p>
          </div>
        </div>
      </div>
      <div className="second-d">
        <p>Please check the payment details</p>
        <div className="ss-d">
          <div className="inner">
            <p>Amount</p>
            <p>450 AED</p>
          </div>
          <div className="inner">
            <p>Payee Name</p>
            <p>MERCHANT</p>
          </div>
          <div className="inner">
            <p>Payee Account</p>
            <p>78543222344</p>
          </div>
          <div className="inner">
            <p>Payment Reference</p>
            <p> Merchant LTD.</p>
          </div>
        </div>
      </div>
      <div className="third-d">
        <p>Please select the account to pay from</p>
        <div className="t-d">
          <div
            className={`tt-d ${isChecked1 ? "checked" : ""}`}
            style={buttonStyle1}
            onClick={handleCheckboxChange1}
          >
            <div className="tt-d-inner">
              <input type="checkbox" checked={isChecked1} onChange={handleCheckboxChange1} />
              <div className="first">
                <p>Savings Accounts</p>
                <p>12345678912058</p>
              </div>
            </div>
            <div className="second">
              <p>Balance</p>
              <p>20332.45 AED</p>
            </div>
          </div>
          <div
            className={`tt-d ${isChecked2 ? "checked" : ""}`}
            style={buttonStyle2}
            onClick={handleCheckboxChange2}
          >
            <div className="tt-d-inner">
              <input type="checkbox" checked={isChecked2} onChange={handleCheckboxChange2} />
              <div className="first">
                <p>Current Accounts</p>
                <p>12345678912058</p>
              </div>
            </div>
            <div className="second">
              <p>Balance</p>
              <p>20332.45 AED</p>
            </div>
          </div>
        </div>
      </div>
      <div className="forth-d">
        <p>
          Press <span>Proceed </span>to make payment
        </p>
        <div className="payment-details-buttons">
          <Link to="/">
            <button>Cancel</button>
          </Link>
          <Link to="/payment-details/loading">
            <button className="active">Proceed</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentsDetails;
