import { FloatingLabel, Form } from 'react-bootstrap';
import { Controller } from 'react-hook-form';

const InputRBS = (props) => {
  const { label, name, type, form } = props;
  const {
    formState: { errors },
  } = form;

  return (
    <FloatingLabel label={label} className="mb-3">
      <Controller
        name={name}
        control={form.control}
        render={({ field }) => (
          <Form.Control
            {...field}
            type={type}
            isInvalid={!!errors[`${name}`]}
          />
        )}
      />
      <Form.Control.Feedback type="invalid">
        {errors[`${name}`]?.message}
      </Form.Control.Feedback>
    </FloatingLabel>
  );
};

export default InputRBS;
