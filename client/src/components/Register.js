import React from 'react';
const axios = require('axios');

const Register = () => {

  const onSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name: 'Vitalii',
      email: 'vitally.tar25@gmail.com',
      password: '123456'
    };

    try{
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const body = JSON.stringify(newUser);

      const res = await axios.post('v1/users', body, config);
      console.log(res.data);
    } catch (e) {
      console.log(e.response.data);
    }
  };


  return (
      <div>
        <button onClick = {e => onSubmit(e)}>
          Click
        </button>
      </div>
  );
};

export default Register;