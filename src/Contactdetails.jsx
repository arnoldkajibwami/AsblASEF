import React from "react";
// import emailjs from '@emailjs/browser'

export default function Contactdettails() {

    // const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('service_ac3z1yx', 'template_8cmzbjc', form.current, 'WcEILXJcAAgyN31No')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         })
    // }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 mr-auto">
                        {/* <h2>World Future</h2> */}
                        <h3>Contacter Nous</h3>
                        <p className="mb-5">Souhaitez-vous en savoir davantage sur nos programmes et nos activités? <br />
                            Veuillez contacter les personnes suivantes: </p>
                        <ul className="list-unstyled pl-md-5 mb-5">
                            {/* <li className="d-flex text-black mb-2">
                                <span className="mr-3"><span className="icon-map"></span></span> 34 Street Name, City Name Here, <br /> United States
                            </li> */}
                            <li className="d-flex text-black mb-2">
                                <span className="mr-3">
                                    <span className="icon-phone"></span>
                                </span> <p><a href="+243893486435" style={{ color: "skyblue" }}>+ (243)  893486435 </a></p>
                            </li>
                            <li className="d-flex text-black">
                                <span className="mr-3">
                                    <span className="icon-envelope-o"></span>
                                </span> <p><a href="asefasbl@gmail.com" style={{ color: "skyblue" }} id="fakimmail">asefasbl@gmail.com</a> </p>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-6">
                        <form className="mb-5" method="post" id="contactForm" name="contactForm">
                            <div className="row">

                                <div className="col-md-12 form-group">
                                    {/* <label for="name" className="col-form-label">Name</label> */}
                                    <input type="text" className="form-control" name="from_name" id="name" placeholder="Nom complet" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    {/* <label for="email" className="col-form-label">Email</label> */}
                                    <input type="text" className="form-control mt-5" name="from_email" id="email" placeholder="Address Email" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 form-group">
                                    {/* <label for="message" className="col-form-label">Message</label> */}
                                    <textarea className="form-control mt-5" name="message" id="message" cols="30" placeholder="Message" rows="7"></textarea>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 mt-5 ">
                                    <input type="submit" value="Confirmer" className="btn btn-color w-100" />
                                    <span className="submitting"></span>
                                </div>
                            </div>
                        </form>

                        <div id="form-message-warning mt-4"></div>
                        <div id="form-message-success">
                            Message Envoyer !
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
