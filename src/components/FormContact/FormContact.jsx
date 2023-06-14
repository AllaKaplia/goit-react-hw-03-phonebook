import * as yup from 'yup';
import { Formik, Form, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { Input, ButtonAdd, LabelForm, ErrorText } from "./FormContact.styled";

const ErrorError = ({ name }) => {
  return (
    <ErrorMessage name={name}
    render={message => <ErrorText>{message}</ErrorText>} />
  );
};

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 'Name is invalid')
    .required('Name is required'),
  number: yup
    .string()
    .matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, 'Phone number is invalid')
    .required('Phone number is required'),
});

const initialValue = {
  name: '',
  number: ''
}

const FormContact = ({ addContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    addContact(values);
    resetForm();
  }

  return (
    <Formik initialValues={initialValue} validationSchema={schema} onSubmit={handleSubmit}>
      <Form autoComplete='off'>
      <LabelForm>
        The name of the new contact
        <Input
          type="text"
          name="name"
          id={nanoid()}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ErrorError name='name' />
      </LabelForm>
        <LabelForm>
          Phone number
          <Input
            type="tel"
            name="number"
            id={nanoid()}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorError name='number' />
        </LabelForm>
        <ButtonAdd type="submit">Add contact</ButtonAdd>
      </Form>
    </Formik>
  );
}

export default FormContact;