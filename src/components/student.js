import React from 'react';
import './css/student.css';
import SocialButton from './socialButton';
import logo from './images/Google.png';

class Student extends React.Component {


    render() {

        const handleSocialLogin = (user) => {
            console.log(user);
          }
           
          const handleSocialLoginFailure = (err) => {
            console.error(err);
          }

        return (
            
            <div>
                        
                <div id="login">
                    <input type="text" id="phone" placeholder="Mob.No."/>
                    <SocialButton className="social_button"
                        provider='google'
                        appId='708042691473-tdateuqlkp46ip02jlsl7vgpgu22nqh0.apps.googleusercontent.com'
                        onLoginSuccess={handleSocialLogin}
                        onLoginFailure={handleSocialLoginFailure}
                        >
                        <img src={logo} alt="Login with Google" />
                    </SocialButton>
                </div>
          
            </div>
        
      );
    }
}
export default Student;
