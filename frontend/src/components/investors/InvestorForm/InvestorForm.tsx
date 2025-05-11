import React, { useCallback } from "react";
import STATE_ABBREVIATIONS from "./constants";
import { Investor } from "../../../types";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  investor?: Investor;
  onSubmit: (values: Investor) => void;
}

const InvestorForm: React.FC<Props> = ({
  title,
  investor,
  onSubmit,
}: Props) => {
  const navigate = useNavigate();
  const cancel = useCallback(() => {
    navigate("/investors");
  }, [navigate]);

  const initialValues = {
    first_name: "",
    last_name: "",
    date_of_birth: "",
    phone: "",
    address_1: "",
    address_2: "",
    state: STATE_ABBREVIATIONS[0],
    zip: "",
    ...investor,
  };
  return (
    <div className="InvestorForm">
      <h2 className="text-start">{title}</h2>
      <hr />
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={(values: Investor) => onSubmit(values)}
      >
        {({ values }) => {
          return (
            <Form className="text-start">
              <div className="row">
                <div className="col-2">
                  <label htmlFor="first_name">First Name</label>
                  <div className="col">
                    <Field
                      name="first_name"
                      value={values.first_name}
                      autoFocus
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <label htmlFor="last_name">Last Name</label>
                  <div className="col">
                    <Field
                      name="last_name"
                      value={values.last_name}
                      autoFocus
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <label htmlFor="date_of_birth">DOB</label>
                  <div className="col">
                    <Field
                      name="date_of_birth"
                      value={values.date_of_birth}
                      autoFocus
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <label htmlFor="phone">Phone</label>
                  <div className="col">
                    <Field name="phone" value={values.phone} autoFocus />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <label htmlFor="address_1">Address 1</label>
                  <div className="col">
                    <Field
                      name="address_1"
                      value={values.address_1}
                      autoFocus
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <label htmlFor="address_2">Address 2</label>
                  <div className="col">
                    <Field
                      name="address_2"
                      value={values.address_2}
                      autoFocus
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <label htmlFor="state">State</label>
                  <div className="col">
                    <Field
                      name="state"
                      as="select"
                      value={values.state}
                      autoFocus
                    >
                      {STATE_ABBREVIATIONS.map((abbr: string, idx: number) => (
                        <option key={idx} value={abbr}>
                          {abbr}
                        </option>
                      ))}
                    </Field>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <label htmlFor="zip">Zip</label>
                  <div className="col">
                    <Field name="zip" value={values.zip} autoFocus />
                  </div>
                </div>
              </div>
              <br />
              <hr />
              <div className="mt-5 text-start">
                <input
                  className="btn btn-primary mr-10"
                  type="submit"
                  value="Save"
                />
                &nbsp;&nbsp;
                <button className="btn btn-secondary" onClick={cancel}>
                  Cancel
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default InvestorForm;
