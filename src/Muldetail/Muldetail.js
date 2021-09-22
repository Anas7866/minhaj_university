import React from 'react'
import Navbar from "../Navbar/Navbar"
import "../Admission/Admission.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Footer from '../Footer/Footer';
import ScrollToTop from "react-scroll-to-top";
import "../Partners/Partners.css"

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
function Muldetail() {
    return (
        <div className="col-sm-12 p-0"  >
            <ScrollToTop />
            <div className="col-sm-12" style={{ backgroundColor: '#344E86' }}>

                <div className="container ">
                    <div className="row mb-0">

                        <div className="col-sm-8 align-text pb-0">
                            <ul class="list-inline pt-2 mb-0 pb-2">
                                <li class="list-inline-item" ><span style={{ color: "white", fontSize: "80%" }}><i class="fas fa-phone-alt"></i></span>&nbsp;<span style={{ color: "white" }}>0311-1222-685</span></li>
                                <li class="list-inline-item pl-2"><span style={{ color: "white", fontSize: "80%" }}><i class="far fa-envelope"></i></span>&nbsp;<span style={{ color: "white" }}>info@mul.edu.pk</span></li>
                                <li class="list-inline-item">
                                    <button type="submit" className="button ml-2"><i class="fas fa-user pr-2" style={{ fontSize: "80%" }}></i><b>Online Admission</b></button>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-4 align-text-second-list " style={{ margin: "auto" }}>
                            <ul class="list-inline  mb-0">
                                <li class="list-inline-item" ><span style={{ color: "white" }}>FAQs &nbsp;|</span></li>
                                <li class="list-inline-item pl-2"><span style={{ color: "white" }}>Help Desk &nbsp;|</span></li>
                                <li class="list-inline-item pl-2"><span style={{ color: "white" }}>CMS Login</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />

            <div className="col-sm-12 bg-our-partners" >
                <div className="col-sm-12 align-middle text-center " style={{ paddingTop: "8%" }}>
                    <h2 style={{ color: "white" }}><b>OUR PARTNERS</b></h2>
                    <p style={{ color: "lightgray" }}>Home <i style={{ fontSize: "40%" }} class="far fa-circle"></i> Our Partners</p>

                </div>

            </div>

            <div className="container mt-5"  >

                <div className="row">
                    <div className="col-sm-3 pl-0">
                        <div className="row">
                            <div className="col-sm-4 text-center " style={{ backgroundColor: "#3B5998" }}>
                                <p className="pt-2 pb-2 m-0" style={{ color: "white", fontSize: "80%" }}>Quick Links</p>
                            </div>
                            <div className="col-sm-8 dot-back" style={{ backgroundColor: "" }}>

                            </div>
                        </div>
                        <div className="col-sm-12 pt-2 pb-2  " style={{ borderBottom: "2px dashed lightgray" }}>
                            <p className="mb-0" style={{ color: 'lightgray' }}>Contact the Admission Office</p>
                        </div>
                        <div className="col-sm-12 pt-2 pb-2  " style={{ borderBottom: "2px dashed lightgray" }}>
                            <p className="mb-0" style={{ color: 'lightgray' }}>Fee Structure</p>
                        </div>
                        <div className="col-sm-12 pt-2 pb-2  " style={{ borderBottom: "2px dashed lightgray" }}>
                            <p className="mb-0" style={{ color: 'lightgray' }}>Rules and Regulations</p>
                        </div>
                        <div className="col-sm-12 pt-2 pb-2  " style={{ borderBottom: "2px dashed lightgray" }}>
                            <p className="mb-0" style={{ color: 'lightgray' }}>Scholarships</p>
                        </div>
                        <div className="col-sm-12 pt-2 pb-2  " style={{ borderBottom: "2px dashed lightgray" }}>
                            <p className="mb-0" style={{ color: 'lightgray' }}>CMS Login</p>
                        </div>
                        <div className="row mt-4">
                            <div className="col-sm-4 text-center " style={{ backgroundColor: "#3B5998" }}>
                                <p className="pt-2 pb-2 m-0" style={{ color: "white", fontSize: "80%" }}>Schools</p>
                            </div>
                            <div className="col-sm-8 dot-back" style={{ backgroundColor: "" }}>

                            </div>
                        </div>


                        <div className="col-sm-12 p-0">
                            <Carousel responsive={responsive}>
                                <div>  <div className="col-sm-12 p-0">
                                    <img src="https://www.mul.edu.pk/images/departments/mass-communication_15.jpg" className="img-fluid p-0 mt-3" />
                                </div>
                                    <div className="col-sm-12 p-0 ">
                                        <h5>School of Mass Communication</h5>
                                    </div></div>
                                <div>
                                    <div className="col-sm-12 p-0">
                                        <img src="	https://www.mul.edu.pk/images/departments/chemical-engineering_26.jpg" className="img-fluid p-0 mt-3" />
                                    </div>
                                    <div className="col-sm-12 p-0 ">
                                        <h5>School of Chemical Engineering</h5>
                                    </div>
                                </div>
                                <div>
                                    <div className="col-sm-12 p-0">
                                        <img src="https://www.mul.edu.pk/images/departments/mathematics_5.jpg" className="img-fluid p-0 mt-3" />
                                    </div>
                                    <div className="col-sm-12 p-0 ">
                                        <h5>School of Mathematics</h5>
                                    </div>
                                </div>
                                <div>
                                    <div className="col-sm-12 p-0">
                                        <img src="https://www.mul.edu.pk/images/departments/islamic-economics-banking-finance_10.jpg" className="img-fluid p-0 mt-3" />
                                    </div>
                                    <div className="col-sm-12 p-0 ">
                                        <h5>School of Islamic Economics Banking Finance</h5>
                                    </div>
                                </div>
                            </Carousel>

                        </div>

                        <div className="row mt-2 mb-5">
                            <div className="col-sm-4 text-center " style={{ backgroundColor: "#3B5998" }}>
                                <p className="pt-2 pb-2 m-0" style={{ color: "white", fontSize: "80%" }}>Facebook</p>
                            </div>
                            <div className="col-sm-8 dot-back" style={{ backgroundColor: "" }}>

                            </div>
                        </div>
                        <div className="col-sm-12"></div>


                    </div>




                    <div className="col-sm-9">
                        <h4 style={{ color: "#344E86" }}><b>MUL AN INTERNATIONAL UNIVERSITY</b></h4>
                        <p style={{color:"gray"}}>Minhaj University Lahore was founded in 1986 by Shaykh-ul-Islam Prof. Dr Muhammad Tahir-ul-Qadri, patron-in-chief of Minhaj ul Quran International. It is located in a significant place which is easily approachable from all the main areas of the city. Its campuses are situated at Township & Model Town. Degree awarding status was granted by Govt. of the Punjab vide Act No: XII of 2005. The Higher Education Commission of Pakistan has also recognized Minhaj University, as ‘W3‘ranking University.
                            It comprises of nine faculties that of Computer Science & Information Technology, Basic Sciences & Mathematics, Economics & Management Sciences, Social Sciences & Humanities, Languages, Shariah & Islamic Studies, Engineering, Allied Health Sciences, Applied Sciences. Faculties have numerous Schools and Teaching Departments. University also has two centres including the International Centre of Research in Islamic Economic (ICRIE) and International Center of Excellence (ICE). It has a purpose-built campus with allied administrative and educational facilities like science laboratories, Computer Lab, Research Lab,  libraries, hostels, cafeteria, mosque, parking areas and playground. Programs at BS / MA / M.Sc / MS / M.Phil and P.hD level are offered in all the faculties.</p>
                            <p style={{color:'gray'}}>In nutshell, Minhaj University generates in students concept of building up hallmark of career formation by both academic and empirical wisdom, vision and observation to understand what they are going to be with the concept of maturity with purity is a surety of success and thus paving the way to glorious success.</p>
                            <p style={{color:"gray"}}><b>Mission</b></p>
                            <p style={{color:"gray"}}>With exposure to new ideas and critical ways of thinking and learning, students actualize their potential for intellectual and human development. Future leaders are nurtured to be tolerant, humane and productive beings so that they are in a position to make a positive contribution to the nation and the international community. We believe hat our students' character and attitude reflect their education.</p>
                            <p style={{color:"gray"}}><b>Vision</b></p>
                            <p style={{color:"gray"}}>With exposure to new ideas and critical ways of thinking and learning, students actualize their potential for intellectual and human development. Future leaders are nurtured to be tolerant, humane and productive beings so that they are in a position to make a positive contribution to the nation and the international community. We believe hat our students' character and attitude reflect their education.</p>
                            <p style={{color:"gray"}}><b>Core Values</b></p>
                            <ul className="ml-0" style={{color:"gray"}} >
                                <li>A culture of academic excellence and moral values</li>
                                <li>The pursuit of excellence at work and in life</li>
                                <li>An environment of trust, cooperation and accountability</li>
                                <li>Imbibing and living by academic integrity</li>
                            </ul>
                            <p style={{color:"gray"}}><b>Core Values</b></p>
                            <ul style={{color:"gray"}} className="ml-0">
                                <li>Discipline</li>
                                <li>Innovation</li>
                                <li>Excellence</li>
                                <li>Charity</li>
                            </ul>
                            <p style={{color:"gray"}}><b>Goals</b></p>
                            <ul style={{color:"gray"}} className="ml-0 mb-5">
                                <li>The grooming of professionals recognized for the quality of scholarship, research and service.</li>
                                <li>Improvement in   the quality of education in order to meet national and international standards.</li>
                                <li>The promotion of applied research with a view to make a solid contribution towards society.</li>
                                <li>The inculcation of strong work ethics to turn professionals into productive citizens and national leaders.</li>
                            </ul>




                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Muldetail;
