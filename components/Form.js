import React, { useState } from "react";
import './Form.css'; 

function Form() {
  const [inputData, setInputData] = useState("");
  const [responseData, setResponseData] = useState("");

  const handleInputChange = (event) => {
    setInputData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    const simulatedResponse = {
      is_success: true,
      user_id: "ABHISHEK_JOSHI_22092024",
      email: "am1514@srmist.edu.in",
      roll_number: "RA2111003010428",
      numbers: ["2", "4", "5", "92"],
      alphabets: [],
      highest_alphabet: [],
    };

    
    setResponseData(JSON.stringify(simulatedResponse, null, 2));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <label className="form-label">
          Input JSON Data:
          <textarea
            value={inputData}
            onChange={handleInputChange}
            placeholder='Enter JSON like { "data": ["2", "4", "5", "92"] }'
            rows="4"
            cols="50"
            className="form-textarea"
          />
        </label>
        <br />
        <button type="submit" className="form-button">Submit</button>
      </form>

      {responseData && (
        <div className="response-container">
          <h3>Response:</h3>
          <pre className="response-data">{responseData}</pre>
        </div>
      )}
    </div>
  );
}

export default Form;
