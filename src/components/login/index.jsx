import { useState } from "react";
import "./index.css";

const Login = () => {

    const [allValues,setValues] = useState({
        username:"",
        password:""
    });

    const onSubmitUserDetails = async(event)=>{
        event.preventDefault();


        let api = "https://apis.ccbp.in/login";

        let userDetails = {
            username: allValues.username,
            password: allValues.password
        }

        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails)
        }

        let response = await fetch(api , options);

        let data = await response.json();

        console.log(data);

      

    }

    const onChangeUsername = (e)=>{

        setValues({...allValues, username : e.target.value})

    }

    const onChangePassword = (e)=>{

        setValues({...allValues, password : e.target.value})
    }



  return (
    <div className="login-cont">
      <form className="form-cont" onSubmit={onSubmitUserDetails}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChangeUsername}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={onChangePassword}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
