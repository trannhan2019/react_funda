const InputCom = (props) => {
  const { label, name, type, form } = props;
  //const { register } = form;
  const {
    formState: { errors },
  } = form;

  return (
    <div className="form-floating mb-3">
      <input
        className={
          errors[`${name}`]
            ? 'form-control is-invalid'
            : 'form-control'
        }
        {...form.register(name)}
        type={type}
        name={name}
      />
      <label>{label}</label>
      {!!errors[`${name}`] && (
        <span className="invalid-feedback">
          {errors[`${name}`]?.message}
        </span>
      )}
    </div>
  );
};

export default InputCom;
