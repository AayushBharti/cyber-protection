import React, { useState } from "react";
import "./pan.css";
const PanAuth = ({ data }) => {
  const [panNumber, setPanNumber] = useState("");
  const [error, setError] = useState("");

  const [result, setResult] = useState(null);

  const handleTransBtn = () => {
    // Find data with the given PAN ID
    const ite = data.items;
    const foundData = ite.find((item) => item.panId === panNumber);
    if (foundData === undefined) {
      alert("Enter valid Pan Number");
      return;
    }
    setResult(foundData);
    console.log(result);
    // console.log(result.accountDetails.bankName);
  };

  let bal = 0;
  function balHandler() {
    bal = 1;
  }

  return (
    <div className=" max-w-[1280px] mx-auto mt-40 p-4  panauth rounded-xl shadow-lg">
      <div className="text-white">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Acknowledgement
        </h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="mb-4 flex justify-center items-center flex-col">
          <label className="block text-2xl font-bold mb-4">
            Enter Pan number:
          </label>
          <input
            type="text"
            className="block text-black w-[500px] text-center font-semibold h-10 p-5 text-xl rounded-lg border-black border-2 shadow-md focus:border-blue-300 focus:ring focus:ring-blue-200"
            value={panNumber}
            placeholder="Enter Pan Number"
            onChange={(e) => setPanNumber(e.target.value)}
          />
          <button
            className="bg-blue-500 mt-5 text-xl text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            onClick={handleTransBtn}
          >
            Check Transactions
          </button>
        </div>
      </div>

      {result ? (
        <div>
          <div className="mt-20">
            <div className="account bg-gray-700 text-white rounded-2xl p-10 mb-15">
              <h2 className=" text-2xl font-bold mb-5 bg-blue-950 w-fit py-2 px-6 rounded-3xl">
                Account Details
              </h2>
              <p className="text-xl">
                Account Number :{" "}
                {result.accounts[0].accountDetails.accountNumber}
              </p>
              <p className="text-xl">
                Account Type : {result.accounts[0].accountDetails.accountType}
              </p>
              <p className="text-xl">
                Bank Name : {result.accounts[0].accountDetails.bankName}
              </p>
              <p
                className=" text-xl bg-blue-700 w-fit py-2 px-6 rounded-3xl text-white mt-5"
                onClick={balHandler}
              >
                Current Balance : {result.accounts[0].currentBalance}
                
              </p>
            </div>
            <div className="mt-14 bg-gray-300 rounded-2xl p-10 mb-15 ">
              <div>
                <h2 className="text-2xl font-bold mb-5 bg-green-700 w-fit py-2 px-6 rounded-3xl text-white">
                  Transaction
                </h2>
                <p className="text-xl">
                  Amount : {result.accounts[0].transactions[0].amount}
                </p>
                <p className="text-xl">
                  Transactions Id :{" "}
                  {result.accounts[0].transactions[0].transactionId}
                </p>
                <p className="text-xl">
                  Bank Name : {result.accounts[0].transactions[0].bankName}
                </p>
                <p className="text-xl">
                  Date And Time : {result.accounts[0].transactions[0].dateTime}
                </p>
                <p className="text-xl">
                  Destination Account :{" "}
                  {result.accounts[0].transactions[0].destinationAccount}
                </p>
                <p className="text-xl">
                  Destination Bank Name :{" "}
                  {
                    result.accounts[0].transactions[0]
                      .destinationAccountBankName
                  }
                </p>
                <a href="">
                <button className="px-6 py-3 bg-blue-700 rounded-full text-white mt-4">View in Map</button>
                </a>
                <iframe className="rounded-3xl mt-10 shadow-lg" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54540.32626205005!2d75.47468926768595!3d31.310090683161658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5af12d018ee1%3A0xac7ffb7e5e14285f!2sState%20Bank%20of%20India!5e0!3m2!1sen!2sin!4v1709996945250!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="mt-4 ">
                <h2 className="text-2xl font-bold mb-5 bg-green-700 w-fit py-2 px-6 rounded-3xl text-white">
                  Transaction
                </h2>
                <p className="text-xl">
                  Amount : {result.accounts[0].transactions[1].amount}
                </p>
                <p className="text-xl">
                  Transactions Id :{" "}
                  {result.accounts[0].transactions[1].transactionId}
                </p>
                <p className="text-xl">
                  Bank Name : {result.accounts[0].transactions[1].bankName}
                </p>
                <p className="text-xl">
                  Date And Time : {result.accounts[0].transactions[1].dateTime}
                </p>
                <p className="text-xl">
                  Destination Account :{" "}
                  {result.accounts[0].transactions[1].destinationAccount}
                </p>
                <p className="text-xl">
                  Destination Bank Name :{" "}
                  {
                    result.accounts[0].transactions[1]
                      .destinationAccountBankName
                  }
                </p>
                <a href="">
                <button className="px-6 py-3 bg-blue-700 rounded-full text-white mt-4">View in Map</button>
                </a>
                <iframe className="rounded-3xl mt-10 shadow-lg" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112086.0457785567!2d77.10093809166851!3d28.609107401160625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce391c0000009%3A0x76f61cb71fe9f37e!2sICICI%20Bank%20Delhi%20Janpath!5e0!3m2!1sen!2sin!4v1709997796749!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
          <div className="mt-20 ">
            <div className="account bg-gray-700 text-white rounded-2xl p-10 mb-15">
              <h2 className="text-2xl font-bold mb-5  bg-blue-950 w-fit py-2 px-6 rounded-3xl">
                Account Details
              </h2>
              <p className="text-xl">
                Account Number :{" "}
                {result.accounts[1].accountDetails.accountNumber}
              </p>
              <p className="text-xl">
                Account Type : {result.accounts[1].accountDetails.accountType}
              </p>
              <p className="text-xl">
                Bank Name : {result.accounts[1].accountDetails.bankName}
              </p>
              <p className=" text-xl bg-blue-700 w-fit py-2 px-6 rounded-3xl text-white mt-5">
                Current Balance : {result.accounts[1].currentBalance}
              </p>
            </div>
            <div className="mt-14 bg-gray-300 rounded-2xl p-10 mb-15 ">
              <div>
                <h2 className="text-2xl font-bold mb-5 bg-green-700 w-fit py-2 px-6 rounded-3xl text-white">
                  Transaction
                </h2>
                <p className="text-xl">
                  Amount : {result.accounts[1].transactions[0].amount}
                </p>
                <p className="text-xl">
                  Transactions Id :{" "}
                  {result.accounts[1].transactions[0].transactionId}
                </p>
                <p className="text-xl">
                  Bank Name : {result.accounts[1].transactions[0].bankName}
                </p>
                <p className="text-xl">
                  Date And Time : {result.accounts[1].transactions[0].dateTime}
                </p>
                <p className="text-xl">
                  Destination Account :{" "}
                  {result.accounts[1].transactions[0].destinationAccount}
                </p>
                <p className="text-xl">
                  Destination Bank Name :{" "}
                  {
                    result.accounts[1].transactions[0]
                      .destinationAccountBankName
                  }
                  <a href="">
                <button className="px-6 py-3 bg-blue-700 rounded-full text-white mt-4">View in Map</button>
                </a>
                <iframe className="rounded-3xl mt-10 shadow-lg" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54540.32626205005!2d75.47468926768595!3d31.310090683161658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5af12d018ee1%3A0xac7ffb7e5e14285f!2sState%20Bank%20of%20India!5e0!3m2!1sen!2sin!4v1709996945250!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </p>
              </div>
              <div className="mt-4 ">
                <h2 className="text-2xl font-bold mb-5 bg-green-700 w-fit py-2 px-6 rounded-3xl text-white">
                  Transaction
                </h2>
                <p className="text-xl">
                  Amount : {result.accounts[1].transactions[1].amount}
                </p>
                <p className="text-xl">
                  Transactions Id :{" "}
                  {result.accounts[1].transactions[1].transactionId}
                </p>
                <p className="text-xl">
                  Bank Name : {result.accounts[1].transactions[1].bankName}
                </p>
                <p className="text-xl">
                  Date And Time : {result.accounts[1].transactions[1].dateTime}
                </p>
                <p className="text-xl">
                  Destination Account :{" "}
                  {result.accounts[1].transactions[1].destinationAccount}
                </p>
                <p className="text-xl">
                  Destination Bank Name :{" "}
                  {
                    result.accounts[1].transactions[1]
                      .destinationAccountBankName
                  }
                  <a href="">
                <button className="px-6 py-3 bg-blue-700 rounded-full text-white mt-4">View in Map</button>
                </a>
                <iframe className="rounded-3xl mt-10 shadow-lg" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54540.32626205005!2d75.47468926768595!3d31.310090683161658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5af12d018ee1%3A0xac7ffb7e5e14285f!2sState%20Bank%20of%20India!5e0!3m2!1sen!2sin!4v1709996945250!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <div className="account bg-gray-700 text-white rounded-2xl p-10 mb-15">
              <h2 className="text-2xl font-bold mb-5  bg-blue-950 w-fit py-2 px-6 rounded-3xl">
                Account Details
              </h2>
              <p className="text-xl">
                Account Number :{" "}
                {result.accounts[2].accountDetails.accountNumber}
              </p>
              <p className="text-xl">
                Account Type : {result.accounts[2].accountDetails.accountType}
              </p>
              <p className="text-xl">
                Bank Name : {result.accounts[2].accountDetails.bankName}
              </p>
              <p className=" text-xl bg-blue-700 w-fit py-2 px-6 rounded-3xl text-white mt-5">
                Current Balance : {result.accounts[2].currentBalance}
              </p>
            </div>
            <div className="mt-14 bg-gray-300 rounded-2xl p-10 mb-15 ">
              <div>
                <h2 className="text-2xl font-bold mb-5 bg-green-700 w-fit py-2 px-6 rounded-3xl text-white">
                  Transaction
                </h2>
                <p className="text-xl">
                  Amount : {result.accounts[2].transactions[0].amount}
                </p>
                <p className="text-xl">
                  Transactions Id :{" "}
                  {result.accounts[2].transactions[0].transactionId}
                </p>
                <p className="text-xl">
                  Bank Name : {result.accounts[2].transactions[0].bankName}
                </p>
                <p className="text-xl">
                  Date And Time : {result.accounts[2].transactions[0].dateTime}
                </p>
                <p className="text-xl">
                  Destination Account :{" "}
                  {result.accounts[2].transactions[0].destinationAccount}
                </p>
                <p className="text-xl">
                  Destination Bank Name :{" "}
                  {
                    result.accounts[2].transactions[0]
                      .destinationAccountBankName
                  }
                </p>
              </div>
              <div className="mt-4 ">
                <h2 className="text-2xl font-bold mb-5 bg-green-700 w-fit py-2 px-6 rounded-3xl text-white">
                  Transaction
                </h2>
                <p className="text-xl">
                  Amount : {result.accounts[2].transactions[1].amount}
                </p>
                <p className="text-xl">
                  Transactions Id :{" "}
                  {result.accounts[2].transactions[1].transactionId}
                </p>
                <p className="text-xl">
                  Bank Name : {result.accounts[2].transactions[1].bankName}
                </p>
                <p className="text-xl">
                  Date And Time : {result.accounts[2].transactions[1].dateTime}
                </p>
                <p className="text-xl">
                  Destination Account :{" "}
                  {result.accounts[2].transactions[1].destinationAccount}
                </p>
                <p className="text-xl">
                  Destination Bank Name :{" "}
                  {
                    result.accounts[2].transactions[1]
                      .destinationAccountBankName
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-10">Enter data to see details</div>
      )}
    </div>
  );
};

export default PanAuth;
