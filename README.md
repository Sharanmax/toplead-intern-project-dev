
# Description
This project is based on formik components, formik-antd and antd library.
# formik-antd
This library enriches several Ant Design components with a required name: string prop that connects them to a Formik form field. It is quite simple. Instead of importing your form components from antd, you need to import them from 'formik-antd' and set their name prop. Now the component is connected/synced with the corresponding Formik field!

The Ant Design components are feature rich and provide a lot of props to customize their visual presentation. These features and also their apis stay exactly the same. Visit their documentation to learn more.
# formik
Formik is a small group of React components and hooks for building forms in React and React Native. It helps with the three most annoying parts:

Getting values in and out of form state
Validation and error messages
Handling form submission
By colocating all of the above in one place, Formik keeps things organized--making testing, refactoring, and reasoning about your forms a breeze.
# antd
 a React UI library  that contains a set of high quality components and demos for building rich, interactive user interfaces.

# Getting started

# to run this project
npm install

npm run start

# formik-antd
npm install formik-antd

Add import "antd/dist/antd.css" to your index.js file or check the Advanced setup section
# antd
 npm install antd
# formik
 npm install formik --save

# Submitting and Resetting Forms
Directly under each <Formik> container a <Form> component should be placed. This component composes the functionality provided by Ant Designs (https://ant.design/components/form/) as well as Formiks (https://jaredpalmer.com/formik/docs/api/form) <Form> components:


The SubmitButton and ResetButton will disable automatically depending on form state. The ResetButton is enabled if the form is dirty. The SubmitButton is enabled if the form is valid or if it is not dirty and the submit count is zero. If you do want to control the disable behavior yourself you can provide the disable: boolean prop. I.e. <SubmitButton disabled={false} /> will make the button always be enabled.

# Form- and Field-level Validation

Formik provides form- and field-level validation callbacks to provide validation logic. How to validate is neither part of formik nor of this library.

Form-level validation is done by setting formiks validate prop. Field-level validation is optional available on the components. Additional to the name prop formiks optional validate?: (value: any) => undefined | string | Promise<any> is added to all core components to allow field-level validation. There is one special case to be aware of when using field-level validation: When using the Form.Item component with another Antd field component, the validate prop has to be added to the Form.Item, not the input component:





