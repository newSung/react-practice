import React, { useState } from "react";

function Register() {
    const [InputId, setId] = useState('');
    const [InputPw, setPw] = useState('');
    const [InputEmail, setEmail] = useState('');
    const onChangeId = (e) => {
        setId(e.target.value);
    }
    const onChangePw = (e) => {
        setPw(e.target.value);
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onClickReg = () => {

    }

    return (
        <div className="test3">
            <div className="test2">
                <div>
                    <h2 className="button1">Register</h2>
                    <input style={{ width: 800, marginTop: 30 }} type='text' name='input_id' placeholder='id' onChange={onChangeId}></input>
                    <br />
                    <br />
                    <input style={{ width: 800 }} type='text' name='input_id' placeholder='pw' onChange={onChangePw}></input>
                    <br />
                    <br />
                    <input style={{ width: 800, marginBottom: 30 }} type='text' name='input_id' placeholder='email' onChange={onChangeEmail}></input>
                    <div>
                        <button type="button" class="btn btn-light" onClick={onClickReg}>Register</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Register;