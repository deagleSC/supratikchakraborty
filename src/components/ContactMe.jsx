import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactMe.css';

const ContactMe = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tmxgmx9', 'template_vyqjtyw', form.current, 'JkFLKEEDTOin3HTIE')
        .then((result) => console.log(result.text))
        .then((alert("Your message has been sent.")))
        .catch((error) => {
            console.log(error.text);
        });

        e.target.reset();
    }

    return ( 
        <div className="contactMe">
            <h2><b>Get in Touch</b></h2>
            <form ref={form} className="form row" onSubmit={sendEmail}>
                <div className="senderInfo col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <input type="text" className="form-control" placeholder="Name" name="from_name"></input>
                    <input type="email" className="form-control" placeholder="Email" required={true} name="from_email"></input>
                    <input type="text" className="form-control" placeholder="Company" name="company"></input>
                </div>

                <div className="message col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                    <textarea type="textarea" className="form-control" placeholder="Message" required={true} name="message"></textarea>
                </div>

                <input type="submit" className="btn btn-md submit"></input>
            </form>
        </div>
    )
}

export default ContactMe;