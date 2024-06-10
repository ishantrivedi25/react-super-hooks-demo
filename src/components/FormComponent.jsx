import React from 'react';
import { useForm } from 'react-super-hooks';

const FormComponent = () => {
    const { values, handleChange, handleSubmit } = useForm(
        { username: '', password: '' },
        () => {
            console.log("Credentials: ", values);
        }
    );

    return (
        <div className="wrapper">
            <h3><span>useForm</span> hook</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <span>Username:</span>
                    <input type="text" name="username" value={values.username} onChange={handleChange} />
                </div>
                <div>
                    <span>Password:</span>
                    <input type="password" name="password" value={values.password} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default FormComponent;