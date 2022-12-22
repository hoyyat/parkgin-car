import React from "react";
import styled from 'styled-components';

const LogIn = () => {
    return (
        <div className="login-wrap">
            <div className="loginbox">
                <h2>주차 관리</h2>
                <div>
                    <div>아이디</div>
                        <input type="text" />
                    <div>비밀번호</div>
                        <input type="text" />
                    <button>로그인</button>
                </div>
                <div>
                    <p>회원가입 &gt;</p>
                    <p>아이디 찾기 &gt;</p>
                    <p>비밀번호 찾기 &gt;</p>
                </div>
            </div>
        </div>
    );
}

export default LogIn;