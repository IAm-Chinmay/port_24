"use client";
import React from "react";
import { Formik } from "formik";
import emailjs from "emailjs-com";
import styles1 from "../../css/about.module.css";
import styles from "../../css/hireme.module.css";

function HireForm() {
  return (
    <div className={styles1.mainAbout}>
      <h1 className={styles.headHire}>Talk to Me, Goose!</h1>
      <hr
        style={{
          width: "90%",
          marginLeft: "5%",
          marginBottom: ".9rem",
          border: "none",
          height: "3px",
          color: "#333",
          backgroundColor: "#333",
        }}
      />
      <div>
        <Formik
          initialValues={{ name: "", email: "", msg: "" }}
          validate={(values) => {
            const error = {};
            if (!values.email) {
              error.email = "I need email to contact you !";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              error.email = "Not correct email :(";
            }
            if (!values.name) {
              error.name = "Do you have good name ? Enter it !";
            }
            if (!values.msg) {
              error.msg = "Enter message (I need context)";
            }
            return error;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            setSubmitting(true);
            try {
              await emailjs.send(
                "service_8wdjlno", // Replace with your EmailJS service ID
                "template_qlr63ap", // Replace with your EmailJS template ID
                values,
                "Tlg3RJwa--eNDdv9Y" // Replace with your EmailJS public key
              );
              console.log("SUCCESS!");
              alert("Message sent successfully!");
            } catch (error) {
              console.error("Error sending email:", error);
              alert("There was a problem sending the message.");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
            <form onSubmit={handleSubmit} className={styles.formMain}>
              <h5>Your good name</h5>
              <input
                className={styles.inputSec}
                type="text"
                name="name"
                required
                onChange={handleChange}
                value={values.name}
              />
              <h6 style={{ marginBottom: "2rem" }}>
                {errors.name && errors.name}
              </h6>
              <h5>Gimme your best email</h5>
              <input
                className={styles.inputSec}
                type="email"
                name="email"
                required
                value={values.email}
                onChange={handleChange}
              />
              <h6 style={{ marginBottom: "2rem" }}>
                {errors.email && errors.email}
              </h6>
              <h5>Wassup</h5>
              <textarea
                className={styles.inputSec2}
                cols={10}
                rows={5}
                required
                name="msg"
                value={values.msg}
                onChange={handleChange}
              />
              <h6 style={{ marginBottom: "2rem" }}>
                {errors.msg && errors.msg}
              </h6>
              <button
                className={styles.buttonEM}
                type="submit"
                disabled={isSubmitting}
              >
                Drop it in my inbox!
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default HireForm;
