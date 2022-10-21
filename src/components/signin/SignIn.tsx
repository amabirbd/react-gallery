import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { RootState } from "../../app/store";
import { login } from "../../features/login/loginSlice";

interface Values {
  username: string;
  password: string;
}

const signupSchema = Yup.object().shape({
  username: Yup.string().max(50, "Too Long!").required("Required"),
  password: Yup.string()
    .required("Please Enter your password")
    .min(6, "Password must be atleast 6 characters long!")
    .max(50, "Password must be less than 50 characters!"),
});

function SignIn() {

  const isAuthenticated = useSelector((state: RootState) => state.login.isAuthenticated)
  const dispatch = useDispatch()

  console.log(isAuthenticated);

  const navigate = useNavigate();

  return (
    <div className="signup-form w-96 m-auto mt-12">
      <h1 className="text-3xl font-bold underline">Sign In</h1>

      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={signupSchema}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          console.log(values)
          dispatch(login(values))
          if(isAuthenticated) {
            navigate("/")
          }
        }}
      >
        
        <Form className="flex flex-col justify-center">
          <label className="text-left pt-2 ">User Name</label>
          <Field
            id="username"
            name="username"
            placeholder=""
            type="text"
            className="border-2 p-2"
          />
          <label htmlFor="password" className="text-left pt-2 ">
            Password
          </label>

          <Field
            id="password"
            name="password"
            placeholder=""
            type="password"
            className="border-2 p-2"
          />

          <button type="submit" className="bg-orange-500 p-5 mt-5 rounded-md">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default SignIn;
