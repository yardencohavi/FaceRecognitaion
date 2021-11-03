// import react from "react";

const Navigation = ({onRouteChange, isSignedIn}) => {
        if(isSignedIn){
            return(
                <nav className="flex justify-end">
                <p onClick={() => onRouteChange('signout')} className="f3 link dim black pa3 pointer">Sign out</p>
                </nav>
            )
        }else {
            return (
                <nav className="flex justify-end">
                <p onClick={() => onRouteChange('signin')} className="f3 link dim black pa3 pointer">Sign in</p>
                <p onClick={() => onRouteChange('register')} className="f3 link dim black pa3 pointer">Register</p>
                </nav>
            )
        }

}

export default Navigation;