import React from "react";
import "./price.css";
const Price = () => {
  return (
    <div id="price" className="section">
      <h2 className="table_header ">Choose Your Plan</h2>
      <div className="tables">
        {" "}
        <table>
          <tr>
            <th>Basic</th>
          </tr>
          <tr>
            <td>Photography</td>
          </tr>
          <tr>
            <td>5Gb Storage </td>
          </tr>
          <tr>
            <td>Web Design </td>
          </tr>
          <tr>
            <td>
              <div className="price">
                <h2 className="price_pro">$10</h2>
                <h4 className="period">per month</h4>
              </div>
            </td>
          </tr>
          <tr>
            <td className="btn-container">
              <button className="btn_table btn"> Sign Up</button>
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <th>Pro</th>
          </tr>
          <tr>
            <td>Web Design</td>
          </tr>
          <tr>
            <td>50Gb Storage </td>
          </tr>
          <tr>
            <td>Endless support</td>
          </tr>
          <tr>
            <td>
              <div className="price">
                {" "}
                <h2 className="price_pro">$20</h2>
                <h4 className="period">per month</h4>
              </div>
            </td>
          </tr>
          <tr>
            <td className="btn-container">
              <button className="btn_table btn"> Sign Up</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Price;
