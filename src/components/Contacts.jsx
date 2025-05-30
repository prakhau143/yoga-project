import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

function Contacts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        data,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-sub-container">
        <div className="form-container">
          <h2>Contact Us</h2>
          <h3>Practice Yoga Studio</h3>
          <p>Burlington, VT</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                placeholder="Message"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && <span>This field is required</span>}
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-img"></div>
      </div>
    </div>
  );
}

export default Contacts;
