import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormContact = styled(Form)`
  padding: 20px;
  width: 500px;
`;
export const LabelName = styled.label`
  text-align: left;
  margin-bottom: 20px;
`;
export const Input = styled(Field)`
  padding: 3px;
  display: block;
  width: 300px;
  text-align: left;
  margin: 0;
`;
export const Error = styled(ErrorMessage)`
  /* position: absolute; */
  margin-top: -30px;
  margin-left: 320px;
  width: 300px;

  text-align: left;
  font-size: 16px;
  color: red;
`;
export const Button = styled.button`
  width: 90px;
  text-align: left;
  margin: 0;
`;
