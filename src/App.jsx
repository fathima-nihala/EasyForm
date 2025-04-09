import React from "react";
import DynamicForm from "./shared/DynamicForm";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const App = () => {
  const formFields = [
    { name: "name", label: "Name", type: "text", placeholder: "Enter name" },
    { name: "email", label: "Email", type: "email", placeholder: "Enter email" },
    {
      name: "role",
      label: "Role",
      type: "select",
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
        { label: "Guest", value: "guest" },
      ],
    },
    {
      name: "bio",
      label: "Bio",
      type: "textarea",
      placeholder: "Tell us about yourself",
    },
  ];

  const handleFormSubmit = (data) => {
    console.log("Form Data:", data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div className="flex flex-col items-center min-h-screen justify-center p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Dynamic Form Example</h1>
      <DynamicForm fields={formFields} onSubmit={handleFormSubmit} submitIcon={CheckCircleIcon} />
    </div>
  );
};

export default App;
