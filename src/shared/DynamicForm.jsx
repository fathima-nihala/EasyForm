
import React, { useState } from "react";
import DynamicButton from "./DynamicButton";

const DynamicForm = ({ fields, onSubmit, submitIcon }) => {
  const initialFormState = fields.reduce((acc, field) => {
    acc[field.name] = field.defaultValue || "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e, name) => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialFormState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white rounded-xl p-6 max-w-md w-full shadow-xl"
    >
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col">
          <label
            htmlFor={field.name}
            className="mb-2 text-sm font-semibold text-gray-800"
          >
            {field.label}
          </label>

          {field.type === "select" ? (
            <select
              id={field.name}
              value={formData[field.name]}
              onChange={(e) => handleChange(e, field.name)}
              disabled={field.disabled}
              className="bg-gray-50 border border-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select</option>
              {field.options.map((opt, i) => (
                <option key={i} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          ) : field.type === "textarea" ? (
            <textarea
              id={field.name}
              value={formData[field.name]}
              onChange={(e) => handleChange(e, field.name)}
              disabled={field.disabled}
              rows={4}
              className="bg-gray-50 border border-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            />
          ) : (
            <input
              id={field.name}
              type={field.type}
              value={formData[field.name]}
              onChange={(e) => handleChange(e, field.name)}
              placeholder={field.placeholder}
              disabled={field.disabled}
              className="bg-gray-50 border border-gray-300 text-sm rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          )}
        </div>
      ))}

      <DynamicButton
        label="Submit"
        type="submit"
        variant="primary"
        icon={submitIcon}
        className="w-full justify-center"
      />
    </form>
  );
};

export default DynamicForm;
