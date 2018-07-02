import React from 'react';
import './css/author.css';
import logo from './images/Linkedin.png';
import SocialButton from './socialButton'



class Author extends React.Component {

    
    render() {
        
        const handleSocialLogin = (user) => {
            console.log(user);
          }
           
          const handleSocialLoginFailure = (err) => {
            console.error(err);
          }

        return (
            <div>
                   
                  <div id="signup">
                        <input type="text" id="first" placeholder="First Name"/>
                        
                        <SocialButton className="social_button"
                            provider='linkedin'
                            appId='81fp2soxtsp0cr'
                            onLoginSuccess={handleSocialLogin}
                            onLoginFailure={handleSocialLoginFailure}
                            >
                            <img src={logo} alt="Login with Linkedin" />
                        </SocialButton> 
                    </div>
            </div>

            );
    }
}
export default Author;
