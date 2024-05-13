import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./profile.css";
import axios from "axios";

const EditProfileForm = () => {
    const initialValues = {
        username: "",
        email: "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        currentPassword: Yup.string().required("Current password is required"),
        newPassword: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("New password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
            .required("Confirm password is required"),
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        console.log(values);
        try {
            const response = await axios.post("your-api-endpoint", values);
            console.log(response.data);
        } catch (error) {
            console.error("Error:", error);
        }
        setSubmitting(false);
    };


    return (
        <div className="profile-parent">
            <h1>Edit Profile</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="child">
                            <label htmlFor="username">Username</label>
                            <Field type="text" id="username" name="username" />
                            <ErrorMessage name="username" component="div" className="error" />
                        </div>
                        <div className="child">
                            <label htmlFor="email">Email</label>
                            <Field type="email" id="email" name="email" />
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>
                        <div className="child">
                            <label htmlFor="currentPassword">Current Password</label>
                            <Field
                                type="password"
                                id="currentPassword"
                                name="currentPassword"
                            />
                            <ErrorMessage
                                name="currentPassword"
                                component="div"
                                className="error"
                            />
                        </div>
                        <div className="child">
                            <label htmlFor="newPassword">New Password</label>
                            <Field type="password" id="newPassword" name="newPassword" />
                            <ErrorMessage
                                name="newPassword"
                                component="div"
                                className="error"
                            />
                        </div>
                        <div className="child">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <Field
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                            />
                            <ErrorMessage
                                name="confirmPassword"
                                component="div"
                                className="error"
                            />
                        </div>
                        <button
                            className="profile-submit-btn"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default EditProfileForm;
