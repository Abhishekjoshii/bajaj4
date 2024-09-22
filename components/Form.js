import React, { useState } from "react";

function Form() {
  const [inputData, setInputData] = useState("");
  const [responseData, setResponseData] = useState("");

  const handleInputChange = (event) => {
    setInputData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulated response data
    const simulatedResponse = {
      is_success: true,
      user_id: "ABHISHEK_JOSHI_22092024",
      email: "am1514@srmist.edu.in",
      roll_number: "RA2111003010428",
      numbers: ["2", "4", "5", "92"],
      alphabets: [],
      highest_alphabet: [],
    };

    // Set the simulated response as the output
    setResponseData(JSON.stringify(simulatedResponse, null, 2));
  };

  return (
    <div style={styles.formContainer}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Input JSON Data:
          <textarea
            value={inputData}
            onChange={handleInputChange}
            placeholder='Enter JSON like { "data": ["2", "4", "5", "92"] }'
            rows="4"
            cols="50"
            style={styles.textarea}
          />
        </label>
        <br />
        <button type="submit" style={styles.button}>Submit</button>
      </form>

      {responseData && (
        <div style={styles.responseContainer}>
          <h3>Response:</h3>
          <pre style={styles.responseData}>{responseData}</pre>
        </div>
      )}
    </div>
  );
}

const styles = {
  formContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '1.2rem',
    marginBottom: '10px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '15px',
  },
  button: {
    padding: '10px',
    fontSize: '1rem',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
  responseContainer: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#e8f4fc',
    borderLeft: '5px solid #2196F3',
  },
  responseData: {
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
  },
};

export default Form;
