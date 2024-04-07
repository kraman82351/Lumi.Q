import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';
import { assets } from '../../assets/assets.js';
import 'bootstrap/dist/css/bootstrap.css';
import { emailValidate } from '../../helper/validate.js'; // Import your email validation function
import './login.css';

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues : {
      email : '',
      password: ''
    },
    validate : emailValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        console.log(values)
          const response = await axios.post('http://localhost:5000/api/login', values); // Assuming you're using axios for HTTP requests
          console.log(response)
          if (response.status === 200) {
              navigate('/profile');
          } else {
              toast.error('Login failed. Please try again.');
          }
      } catch (error) {
          toast.error('An error occurred while logging in. Please try again later.');
      }
  }
  })


  return (
    <section className="vh-100 bottom-info" style={{ backgroundColor: '#DDDDDD' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1913ba64-f52f-4dfc-b544-c1a0bc12b19d/d1xmein-817388c9-3a07-45de-9f3e-015f0022100a.jpg/v1/fit/w_600,h_929,q_70,strp/deathnote_rules___page_1_by_deathnote_club_d1xmein-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTI5IiwicGF0aCI6IlwvZlwvMTkxM2JhNjQtZjUyZi00ZGZjLWI1NDQtYzFhMGJjMTJiMTlkXC9kMXhtZWluLTgxNzM4OGM5LTNhMDctNDVkZS05ZjNlLTAxNWYwMDIyMTAwYS5qcGciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.0Jr8MMOqWnRCIedtgH_YbENc01jsRKN53K4Q4z_e33Q"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: '1rem 0 0 1rem' }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">

                    <form onSubmit={formik.handleSubmit}>


                      <div className="form-outline mb-4">
                        <input {...formik.getFieldProps('email')} type="email" id="form2Example17" placeholder='Email' className="form-control form-control-lg" />
                        
                      </div>

                      <div className="form-outline mb-4">
                        <input {...formik.getFieldProps('password')} type="password" placeholder='Password' id="form2Example27" className="form-control form-control-lg" />
                       
                      </div>

                      <div className="pt-1 mb-4 bottom-info" >
                        <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                      </div>

                      <div className="bottom-info">
                        <p>
                          Code_Shinigami@2024
                        </p>
                      </div>
                      <Toaster/>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
