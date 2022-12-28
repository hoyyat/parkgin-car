import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSignInMutation } from "../auth/useAuth";
import { authActions } from "../redux/modules/authenticateReducer";
import { SignInResp } from "../auth/useAuth";
import { useNavigate } from "react-router-dom";

export type LoginData = {
  account: string;
  password: string;
};

const LogIn = () => {
  const {register, handleSubmit, formState: {errors}} =  useForm<LoginData>();
  const { mutate } = useSignInMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: LoginData) => {
    // mutate.mutateAsync(data).then(data => {
    //   console.log(data, 'component')
    // })
    
    mutate(data, {
      onSuccess: (response) => {
        const resp: SignInResp = response.data;

        if (resp.code === 200) {
          const { name, type } = resp.info;
          dispatch(authActions.login({ name, role: type }));
          console.log('hi');
          navigate("/customers/customer", { replace: true });
        }
      },
    });
  };

  return (
    <div className="login-wrap">
      <form onSubmit={handleSubmit(onSubmit)}>
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
      </form>
    </div>
  );
};

export default LogIn;
