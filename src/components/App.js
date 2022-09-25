import "./App.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="container">
      {userInfo != undefined ? (
        <div
          class="alert alert-success"
          role="alert"
          style={{ marginTop: "10px" }}
        >
          Form Has been Submitted Successfully to Great Vibes!
        </div>
      ) : (
        <p></p>
      )}
      <div className="text-center" style={{ marginTop: "20px" }}>
        <h1 style={{ color: "white" }}>It's Great Vibes here! Message Us!</h1>
      </div>
      <div className="row">
        <div className="col-lg-7 mx-auto">
          <div className="card mt-2 mx-auto p-4">
            <div className="card-body">
              <div className="container">
                <form
                  id="contact-form"
                  role="form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="controls">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            id="form_name"
                            type="text"
                            name="Name"
                            className="form-control"
                            placeholder="Name"
                            {...register("Name", {
                              required: "Name is Required",
                              minLength: {
                                value: 4,
                                message: "Please type atleast 4 characters",
                              },
                            })}
                          />
                          <p className="error">
                            {errors?.Name && errors.Name.message}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            id="form_email"
                            type="text"
                            name="Email"
                            className="form-control"
                            placeholder="Email"
                            {...register("Email", {
                              required: "Email is Required",
                              pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Please enter a valid email",
                              },
                            })}
                          />
                          <p className="error">
                            {errors?.Email && errors.Email.message}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Mobile Number</label>
                          <input
                            id="form_mobile"
                            type="text"
                            name="Mobile Number"
                            className="form-control"
                            placeholder="Mobile Number"
                            {...register("Mobile", {
                              pattern: {
                                value: /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/,
                                message: "Please enter a valid phone number",
                              },
                            })}
                          />
                          <p className="error">
                            {errors?.Mobile && errors.Mobile.message}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Country</label>
                          <input
                            id="form_country"
                            type="text"
                            name="Country"
                            className="form-control"
                            placeholder="Country"
                            {...register("Country", {})}
                          />
                          <p className="error">
                            {errors?.Country && errors.Country.message}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>State</label>
                          <input
                            id="form_state"
                            type="text"
                            name="State"
                            className="form-control"
                            placeholder="State"
                            {...register("State", {})}
                          />
                          <p className="error">
                            {errors?.State && errors.State.message}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>City</label>
                          <input
                            id="form_city"
                            type="text"
                            name="City"
                            className="form-control"
                            placeholder="City"
                            {...register("City", {})}
                          />
                          <p className="error">
                            {errors?.City && errors.City.message}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Message</label>
                          <textarea
                            id="form_message"
                            name="message"
                            className="form-control"
                            placeholder="Write your message here."
                            rows="4"
                            {...register("Message", {
                              required: "Message is Required",
                              minLength: {
                                value: 20,
                                message:
                                  "Message should be atleast 20 characters.",
                              },
                              maxLength: {
                                value: 500,
                                message:
                                  "Message cannout exceed 500 characters.",
                              },
                            })}
                          ></textarea>
                          <p className="error">
                            {errors?.Message && errors.Message.message}
                          </p>
                        </div>
                      </div>

                      <div className="col-md-12 sendbutton">
                        <center>
                          <input
                            type="submit"
                            className="btn btn-success btn-send  pt-2 btn-block"
                            value="Send Message"
                          />
                        </center>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
