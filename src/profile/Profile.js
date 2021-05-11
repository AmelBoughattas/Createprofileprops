import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";

const Profile = (props) => {

    const FullName = props.FullName;
    const Bio = props.Bio;
    const Profession =props.Profession;

    const styleName = {color :"black",fontsize: "1.2em" , margin:"25px 0 0 60px"};
    const styleBio = {color :"black",fontsize: "1.2em", margin:"25px 0 0 60px"};
    const styleProf = {color :"black",fontsize: "1.2em",margin:"25px 0 0 60px"};
    const stylefooter = { fontSize:"18px" ,textAlign:"center" , letterSpacing : "5px",fontWeight :"bold", fontFamily :"sans serif", margin:"16em 0 0 0"};
   
    
    return (
        <div onLoad={props.alertName}>

             {props.children}

            <h2 style={styleName}>{FullName}</h2>

            <p style={styleBio}>Bio : Hi my name is {FullName}, <br/> I graduated in {Bio}, currently taking a cours
            <a href="https://www.gomycode.com"  rel="noreferrer" target="_blank"> GoMyCode</a></p>

            <p style={styleProf}>Profession : {Profession}</p>

            <footer style={stylefooter}>All rights Reserved © 2021</footer>
        </div>
    )
}

     Profile.defaultProps = {
        FullName :"Amel Boughattas",
        Bio: "professional master's degree in information systems engineering",
        Profession: "Web developper",
       
     }

     Profile.propTypes = {
         FullName : PropTypes.string,
         Bio : PropTypes.string,
         Profession : PropTypes.string,
     }

export default Profile;

