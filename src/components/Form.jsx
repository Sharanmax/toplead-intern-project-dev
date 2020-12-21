import React, { Component } from "react"
import { Formik, withFormik } from "formik"
import {
  Input,
  InputNumber,
  SubmitButton,
  DatePicker,
  Select,
  Form,
} from "formik-antd"
import { Divider } from "antd"

import { AntDesignOutlined } from "@ant-design/icons"
import { email, phoneNumber, minLength } from "./validation"

const { TextArea } = Input
const FormItem = Form.Item
const { Option } = Select

const WhiteSpace = () => <div style={{ margin: "20px 0" }} />

const PageForm = (props) => {
  const { values, onSubmit, history } = props
  const handleSubmit = (valu) => {
    onSubmit(valu)
    history.push("/display")
  }
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      {" "}
      <div style={{ background: "white", maxWidth: "500px", padding: "20px" }}>
        <Formik initialValues={values} onSubmit={handleSubmit}>
          <Form>
            <FormItem name="name" validate={minLength(4)}>
              <Input name="name" placeholder="Name" />
            </FormItem>
            <WhiteSpace />

            <FormItem name="phoneNumber" validate={phoneNumber}>
              <Input
                name="phoneNumber"
                prefix="+91"
                placeholder="Phone Number"
              />
            </FormItem>
            <WhiteSpace />

            <FormItem name="email" validate={email}>
              <Input name="email" placeholder="Email" />
            </FormItem>
            <WhiteSpace />
            <Input name="degree" placeholder="Degree" />
            <WhiteSpace />
            <TextArea name="address" placeholder="Address" />
            <WhiteSpace />
            <Input name="city" placeholder="City" />
            <WhiteSpace />
            <InputNumber
              style={{ width: "100%" }}
              name="pinCode"
              placeholder="Pin-Code"
            />
            <WhiteSpace />
            <Divider />
            <TextArea name="totalExperience" placeholder="Experience" />
            <WhiteSpace />
            <Select
              mode="tags"
              style={{ width: "100%" }}
              name="skills"
              placeholder={<div align="left">Skills</div>}
            >
              <Option value="Coding">Coding</Option>
              <Option value="Design">Design</Option>
            </Select>
            <WhiteSpace />
            <DatePicker name="dateOfJoining" placeholder="Date Of Joining" />
            <WhiteSpace />
            <SubmitButton
              style={{ marginTop: 10 }}
              icon={<AntDesignOutlined />}
            >
              Submit
            </SubmitButton>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default PageForm
