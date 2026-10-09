import React, { useState } from "react";

const formFields = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Enter your name"
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email"
  },
  {
    name: "mobile",
    label: "Mobile Number",
    type: "text",
    placeholder: "Enter mobile number"
  },
  {
    name: "age",
    label: "Age",
    type: "number",
    placeholder: "Enter age"
  },
  {
    name: "city",
    label: "City",
    type: "text",
    placeholder: "Enter city"
  }
];

function App() {
  const [formData, setFormData] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div>
      <h2>Dynamic Form</h2>

      <form onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <div key={field.name}>
            <label>{field.label}: </label>

            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name] || ""}
              onChange={handleChange}
            />

            <br />
            <br />
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h3>Submitted Details</h3>

          {formFields.map((field) => (
            <p key={field.name}>
              <strong>{field.label}:</strong>{" "}
              {submittedData[field.name]}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;