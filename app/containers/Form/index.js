import React from 'react';
import { Container, Paper, Box, Typography } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Section from '../../components/Section';

export default class FormContact extends React.Component {
  render() {
    return (
      <Section>
        <Container maxWidth="md">
          <Box mt={2}>
            <Typography variant="h4" noWrap>
              Contact
            </Typography>
          </Box>
          <Paper>
            <Formik
              initialValues={{ email: '', password: '' }}
              validate={values => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                  <Field type="password" name="password" />
                  <ErrorMessage name="password" component="div" />
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </Paper>
        </Container>
      </Section>
    );
  }
}
