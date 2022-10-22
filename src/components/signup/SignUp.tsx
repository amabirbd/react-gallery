import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { RootState } from "../../app/store";
import { login } from "../../features/login/loginSlice";

interface Values {
  name: string;
  username: string;
  email: string;
  password: string;
}

const signupSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too short").max(250, "Too Long!").required("Required"),
  username: Yup.string().max(50, "Too Long!").required("Required"),
  email: Yup.string().email("Field should contain a valid e-mail").max(255).required("E-mail is required"),
  password: Yup.string()
    .required("Please Enter your password")
    .min(6, "Password must be atleast 6 characters long!")
    .max(50, "Password must be less than 50 characters!"),
});

function SignUp() {

  const isAuthenticated = useSelector((state: RootState) => state.login.isAuthenticated)
  const dispatch = useDispatch()

  console.log(isAuthenticated);

  const navigate = useNavigate();

  return (
    <div className="signup-form w-96 m-auto mt-12">
      <h1 className="text-3xl font-bold underline">Sign Up</h1>

      <Formik
        initialValues={{
          name: "",
          username: "",
          email: "",
          password: "",
        }}
        validationSchema={signupSchema}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          console.log(values)
          dispatch(login(values))
            navigate("/sign-in")
        }}
      >
         {({ errors, touched }) => (
        <Form className="flex flex-col justify-center">
        <label className="text-left pt-2 ">Full Name</label>
          <Field
            id="name"
            name="name"
            placeholder="John Doe"
            type="text"
            className="border-2 p-2"
          />
          {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
          <label className="text-left pt-2 ">User Name</label>
          <Field
            id="username"
            name="username"
            placeholder=""
            type="text"
            className="border-2 p-2"
          />
          {errors.username && touched.username ? (
             <div>{errors.username}</div>
           ) : null}
          <label className="text-left pt-2 ">Email</label>

          <Field
            id="email"
            name="email"
            placeholder=""
            type="email"
            className="border-2 p-2"
          />
          {errors.email && touched.email ? (
             <div>{errors.email}</div>
           ) : null}
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
          {errors.password && touched.password ? (
             <div>{errors.password}</div>
           ) : null}

          <button type="submit" className="bg-orange-500 p-5 mt-5 rounded-md">
            Submit
          </button>
        </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUp;
