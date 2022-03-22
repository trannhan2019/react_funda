import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

import InputCom from '../../common/InputCom';
import InputRBS from '../../common/InputRBS';
//import { useEffect } from 'react';

const LoginForm = (props) => {
  const { onSubmit, error_list } = props;
  const schema = yup.object().shape({
    email: yup.string().required('Please enter email').email(),
    //password: yup.string().required('Please enter password'),
  });

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (data) => {
    if (onSubmit) {
      if (error_list.password) {
        form.setError('password', {
          type: 'server',
          message: error_list.password,
        });
      } else {
        onSubmit(data);
      }
    }
  };

  //   useEffect(() => {
  //     form.setError('password', {
  //       type: 'server',
  //       message: 'Something went wrong with password',
  //     });
  //   }, [error_list.password]);

  return (
    <div className="bg-primary">
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header">
                      <h3 className="text-center font-weight-light my-4">
                        Login
                      </h3>
                    </div>
                    <div className="card-body">
                      <form
                        onSubmit={form.handleSubmit(handleSubmit)}
                      >
                        <InputCom
                          label="Email Address *"
                          name="email"
                          type="email"
                          form={form}
                        />

                        <InputRBS
                          form={form}
                          name="password"
                          label="Your Password *"
                          type="password"
                        />

                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            id="inputRememberPassword"
                            type="checkbox"
                            value=""
                          />
                          <label className="form-check-label">
                            Remember Password
                          </label>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                          <Link className="small" to="#">
                            Forgot Password?
                          </Link>
                          <button
                            className="btn btn-primary"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center py-3">
                      <div className="small">
                        <Link to="#">Need an account? Sign up!</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
