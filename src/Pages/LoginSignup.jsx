import React,{useState } from 'react' ;
import './CSS/LoginSignup.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const LoginSignup = () => {
  const initialValues = {
    username: "",
    password: "",
    email: "",
  };

  const [state, setState] = useState("login");

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onSubmit = async (values) => {
    const { username, email, password } = values;
    const formData = { username, email, password };

    let responseData;
    const url =
      state === "login"
        ? "http://localhost:4000/login"
        : "http://localhost:4000/signup";

    await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state === "login" ? "Log In" : "Sign Up"}</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="loginsignup-fields">
              {state === "sign up" && (
                <Field type="text" name="username" placeholder="Your Name" />
              )}
              <ErrorMessage
                name="username"
                component="div"
                className="error-message"
              />

              <Field type="email" name="email" placeholder="Email Address" />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />

              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />

              <button type="submit" disabled={isSubmitting}>
                Continue
              </button>
            </Form>
          )}
        </Formik>

        <p className="loginsignup-login">
          {state === "sign up" ? (
            <>
              Already have an account?{" "}
              <span onClick={() => setState("login")}>Login here</span>
            </>
          ) : (
            <>
              Create an account?{" "}
              <span onClick={() => setState("sign up")}>Click here</span>
            </>
          )}
        </p>

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
