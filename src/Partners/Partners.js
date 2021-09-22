import React from 'react'
import Navbar from "../Navbar/Navbar"
import "../Admission/Admission.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Footer from '../Footer/Footer';
import ScrollToTop from "react-scroll-to-top";
import "../Partners/Partners.css"
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

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
function Partners() {
    return (
        <div className="col-sm-12 p-0" >
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
                        <div className="col-sm-12">
                            <div className="row pt-2 pb-2">
                                <div className="col-sm-4" style={{ margin: "auto" }}>
                                    <img src="https://www.mul.edu.pk/images/posts/foreign-collaboration/mou-with-aaoifi_74.jpg" className="img-fluid " id="main" />
                                </div>
                                <div className="col-sm-8">
                                    <div className="col-sm-12">
                                        <h5 className="mb-0">MOU with AAOIFI</h5>
                                        <img src="images/Line 2.png" className="img-fluid" />
                                        <h6 style={{ color: " #3B5998" }}><i class="far fa-calendar-alt"></i> January 6, 2019</h6>
                                        <p style={{ color: "gray" }}>Minhaj University Lahore has signed another Memorandum of understanding at 2ndWorld Islamic Economics & Finance Conference</p>
                                        <button className="btn btn-primary" style={{ backgroundColor: "#3B5998", borderColor: "#3B5998" }}> <Link to="/partnerdetail" style={{color:"white", textDecoration:"none"}}> View details </Link> </button>
                                    </div>
                                </div>
                            </div>
                            <div className="row pt-2 pb-2">
                                <div className="col-sm-4" style={{ margin: "auto" }}>
                                    <img src="https://www.mul.edu.pk/images/posts/foreign-collaboration/mou-with-tazkia-university-college-of-islamic-economics-indonesia_47.jpg" className="img-fluid " id="main" />
                                </div>
                                <div className="col-sm-8">
                                    <div className="col-sm-12">
                                        <h5 className="mb-0">MOU with AAOIFI</h5>
                                        <img src="images/Line 2.png" className="img-fluid" />
                                        <h6 style={{ color: " #3B5998" }}><i class="far fa-calendar-alt"></i> January 6, 2019</h6>
                                        <p style={{ color: "gray" }}>Minhaj University Lahore has signed another Memorandum of understanding at 2ndWorld Islamic Economics & Finance Conference</p>
                                        <button className="btn btn-primary" style={{ backgroundColor: "#3B5998", borderColor: "#3B5998" }}> View details </button>
                                    </div>
                                </div>
                            </div>

                            <div className="row pt-2 pb-2">
                                <div className="col-sm-4" style={{ margin: "auto" }}>
                                    <img src="https://www.mul.edu.pk/images/posts/foreign-collaboration/mou-with-trisakti-university-indonesia_49.jpg" className="img-fluid " id="main" />
                                </div>
                                <div className="col-sm-8">
                                    <div className="col-sm-12">
                                        <h5 className="mb-0">MOU with AAOIFI</h5>
                                        <img src="images/Line 2.png" className="img-fluid" />
                                        <h6 style={{ color: " #3B5998" }}><i class="far fa-calendar-alt"></i> January 6, 2019</h6>
                                        <p style={{ color: "gray" }}>Minhaj University Lahore has signed another Memorandum of understanding at 2ndWorld Islamic Economics & Finance Conference</p>
                                        <button className="btn btn-primary" style={{ backgroundColor: "#3B5998", borderColor: "#3B5998" }}> View details </button>
                                    </div>
                                </div>
                            </div>

                            
                        </div>

                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Partners
