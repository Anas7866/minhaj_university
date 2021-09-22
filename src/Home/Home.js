import React from 'react'
import "../Home/Home.css"
import $ from "jquery";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CountUp from 'react-countup';
import Navbar from "../Navbar/Navbar"
import Footer from '../Footer/Footer';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};







function Home() {




    return (
        <div className="col-sm-12 p-0" >



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
            {/* header nav */}



            <Navbar/>
            {/* <div className="col-sm-12">
                        <div className="bg-video">
            <div id="home-video" className="video">
                <div className="player video-container" data-property={{videoURL:'https://www.youtube.com/watch?v=ydquV3uyaUI',containment:'#home-video',autoPlay:true, showControls:false, mute:false, startAt:0, opacity:1}} />
            </div>
            </div> */}
            <div className="col-sm-12 p-0">
                <video autoPlay muted loop >
                    <source src="video/video.mp4" type="video/mp4" />

                    Your browser does not support the video tag.
                </video>


            </div>

            <div className="container">
                <div className="row" id="negative-margin">
                    <div className="col-sm-3" style={{ backgroundColor: "#3B5998" }}>
                        <div className="col-sm-12 text-center">
                            <i class="fas fa-user" id="user-icon"></i>
                        </div>
                        <div className="col-sm-12 text-center pt-3">
                          <Link to="/admission" style={{textDecoration:"none"}}>  <h4 id="text-color">ADMISSION</h4> </Link>
                        </div>
                    </div>
                    <div className="col-sm-3" style={{ backgroundColor: "#37538D" }}>
                        <div className="col-sm-12 text-center">

                            <i class="fas fa-book" id="user-icon"></i>

                        </div>
                        
                        <div className="col-sm-12 p-0 text-center pt-3">
                        
                            <h4 id="text-color"> <a style={{color:"white", textDecoration:"none"}} href="https://lrc.mul.edu.pk/">LIBRARY & RESOURCE CENTER</a></h4>
                           
                            
                        </div>
                       
                    </div>
                    <div className="col-sm-3" style={{ backgroundColor: "#344E86" }}>
                        <div className="col-sm-12 text-center">

                            <i class="fas fa-globe-europe" id="user-icon"></i>
                        </div>
                        <div className="col-sm-12 text-center pt-3">
                           <Link to="/Partners" style={{color:"white", textDecoration:"none"}}> <h4 id="text-color">OUR PARTNERS</h4> </Link>
                        </div>
                    </div>
                    <div className="col-sm-3" style={{ backgroundColor: "#314A7E" }}>
                        <div className="col-sm-12 text-center">

                            <i class="fas fa-server" id="user-icon"></i>
                        </div>
                       
                        <div className="col-sm-12 text-center pt-3 ">
                            <h4 id="text-color"><a style={{textDecoration:"none", color:"white"}} href="https://conferences.mul.edu.pk/">CONFRENCES</a></h4>
                        </div>
                     
                    </div>
                </div>
            </div>
            <div className="container pt-5">

                <div className="row">
                    <div className="col-sm-6">
                        <h5>WELCOME TO <b style={{ color: "#37538D" }}> MINHAJ UNIVERSITY</b></h5>
                        <p>
                            Minhaj University Lahore was founded in 1986 by Shaykh-ul-Islam Prof. Dr Muhammad Tahir-ul-Qadri, patron-in-chief of Minhaj ul Quran International. It is located in a significant place which is easily approachable from all the main areas of the city. Its campuses are situated at Township & Model Town. Degree awarding status was granted by Govt. of the Punjab vide Act No: XII of 2005. The Higher Education Commission of Pakistan has also recognized Minhaj University, as ‘W3‘ ranking University.
                        </p>
                        <p>
                            It comprises of nine faculties that of Computer Science & Information Technology, Basic Sciences & Mathematics, Economics & Management Sciences, Social Sciences & Humanities, Languages, Shariah & Islamic Studies, Engineering, Allied Health Sciences, Applied Sciences.


                        </p>
                        <button className="btn btn-primary pl-3 pr-3 mb-2" style={{ backgroundColor: '#2D4373', borderColor: "#2D4373" }}>
                           <Link style={{textDecoration:"none", color:"white"}} to="/mul_details">  View details </Link>
                        </button>

                    </div>
                    <div className="col-sm-6">
                        <img data-toggle="modal" data-target="#exampleModal" src="https://www.mul.edu.pk/images/about/video-add-mul.jpg" className="img-fluid" />
                        {/* Modal */}
                        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content" style={{ backgroundColor: "#3b589800", borderColor: "#3b589800", paddingTop: "25%" }}>
                                    {/* <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div> */}
                                    <div className="modal-body" >
                                        <iframe width="100%" height="300vh" src="https://www.youtube.com/embed/ydquV3uyaUI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                    {/* <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                    </div>





                </div>


            </div>
            <div className="col-sm-12 p-0 mt-5 back-image" >

                {/* <div className="col-sm-12 p-0 mt-5 pb-2"  style={{position:"absolute", zIndex:"100"}}>


                <ParallaxProvider>
                                <Parallax className="custom-class" y={[-10, 10]} tagOuter="figure">
                <img src="https://www.mul.edu.pk/images/bg/bg1.jpg" className="img-fluid" style={{ width: "100%" }} />
                </Parallax>
                            </ParallaxProvider>

            </div> */}


                <div className="container" style={{ position: "relative", zIndex: "101", paddingTop: "5%", paddingBottom: "5%" }} >
                    <div className="col-sm-12">
                        <div className="row ">
                            <div className="col-sm-6">
                                <div className="col-sm-12" style={{ backgroundColor: '#3B5998' }}>
                                    <h3 className="pt-2 pb-3 mb-0" style={{ color: 'white' }}>Events inquery</h3>
                                </div>
                                <div className="col-sm-12 " style={{ backgroundColor: 'white' }}>
                                    <div className="row pb-3 pt-4">
                                        <div className="col-sm-6">
                                            <label style={{ color: 'grey' }}><b>Name *</b></label>
                                            <input className="form-control" type="text" style={{ boxShadow: "none" }} placeholder="Enter Full Name" />
                                        </div>
                                        <div className="col-sm-6">
                                            <label style={{ color: 'grey' }}><b>Cell No. *</b></label>
                                            <input className="form-control" type="text" style={{ boxShadow: "none" }} placeholder="Enter Cell No." />
                                        </div>
                                    </div>
                                    <div className="col-sm-12 p-0 pt-1">
                                        <label style={{ color: 'grey' }}><b>Name *</b></label>
                                        <input className="form-control" type="text" style={{ boxShadow: "none" }} placeholder="Enter Full Name" />
                                    </div>
                                    <div className="col-sm-12 p-0 pt-4">
                                        <label style={{ color: 'grey' }}><b>Name *</b></label>
                                        <input className="form-control" type="text" style={{ boxShadow: "none" }} placeholder="Enter Full Name" />
                                    </div>
                                    <div className="col-sm-12 p-0 pt-4">
                                        <label style={{ color: 'grey' }}><b>Name *</b></label>
                                        <input className="form-control" type="text" style={{ boxShadow: "none" }} placeholder="Enter Full Name" />
                                    </div>
                                    <div className="col-sm-12 p-0 pt-4">
                                        <label style={{ color: 'grey' }}><b>Name *</b></label>
                                        <input className="form-control" type="text" style={{ boxShadow: "none" }} placeholder="Enter Full Name" />
                                    </div>
                                    <div className="col-sm-12 p-0 pt-5 pb-5" >
                                        <button className="btn btn-primary" style={{ width: "100%", backgroundColor: "#3B5998", borderColor: "#3B5998" }}>
                                            Apply Now
                                        </button>
                                    </div>

                                </div>

                            </div>

                            <div className="col-sm-6">
                                <div className="col-sm-12">
                                    <h3 style={{ color: "white" }}>UPCOMING EVENTS</h3>

                                </div>
                                <div className="col-sm-12">
                                    <img src="images/Line 2.png" />

                                </div>
                                <div className="row">
                                    <div className="col-sm-6 col-6 text-right pr-0">
                                        <div className="col-sm-12 pr-0 text-right">
                                            <img src="https://www.mul.edu.pk/images/posts/upcoming-events/thumb/call-for-papers_286.jpg" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-6 text-left pl-0" >
                                        <div className="col-sm-12 pl-0 text-left" style={{ backgroundColor: "#344E86", height: "100%" }}>
                                            <div className="col-sm-12 pt-3">
                                                <h4 style={{ color: "white" }}>Call for Papers</h4>
                                                <span id="text-size-calender"><i class="far fa-calendar-alt"></i></span><span id="text-size-calender" className="pl-2">October 30, 2021</span>
                                                <p id="text-size-readmore" style={{ color: "white", cursor: "pointer" }} className="pt-2"><Link style={{color:"white", textDecoration:"none"}} to="/upcoming-events">Read more</Link> <i class="fas fa-long-arrow-alt-right"></i></p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>




                </div>


            </div>

            <div className="col-sm-12 text-center pt-5">
                <h2>Recent <span style={{ color: '#3B568F' }}> News </span></h2>
            </div>
            <div className="container">

                <Carousel className="pt-5 pb-4" responsive={responsive}>
                    <div>
                        <div className="col-sm-12">
                            <div className="card">
                                <img className="card-img-top" src="https://www.mul.edu.pk/images/posts/news/thumb/admissions-open-fall-2020_283.jpg" className="img-fluid" />
                                <div className="card-body" style={{ backgroundColor: '#F8F8F8' }}>
                                    <h4 className="card-title">ADMISSION OPEN 2020</h4>
                                    <span id="text-size-calender-card"><i class="far fa-calendar-alt"></i></span><span id="text-size-calender-card" className="pl-2">October 30, 2021</span><br />

                                    <a href="#!" className="btn btn-primary mt-2" style={{ backgroundColor: "#2D4373", borderColor: "#2D4373" }} >Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="col-sm-12">
                            <div className="card">
                                <img className="card-img-top" src="https://www.mul.edu.pk/images/posts/news/thumb/an-exclusive-session-with-prof-humayon-dar_285.jpg" className="img-fluid" />
                                <div className="card-body" style={{ backgroundColor: '#F8F8F8' }}>
                                    <h4 className="card-title">AN EXCLUSIVE SESSION </h4>
                                    <span id="text-size-calender-card"><i class="far fa-calendar-alt"></i></span><span id="text-size-calender-card" className="pl-2">October 30, 2021</span><br />

                                    <a href="#!" className="btn btn-primary mt-2" style={{ backgroundColor: "#2D4373", borderColor: "#2D4373" }} >Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="col-sm-12">
                            <div className="card">
                                <img className="card-img-top" src="https://www.mul.edu.pk/images/posts/news/thumb/glob-fist-2021_284.jpg" className="img-fluid" />
                                <div className="card-body" style={{ backgroundColor: '#F8F8F8' }}>
                                    <h4 className="card-title">GLOBE FIRST 2021</h4>
                                    <span id="text-size-calender-card"><i class="far fa-calendar-alt"></i></span><span id="text-size-calender-card" className="pl-2">October 30, 2021</span><br />

                                    <a href="#!" className="btn btn-primary mt-2" style={{ backgroundColor: "#2D4373", borderColor: "#2D4373" }} >Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="col-sm-12">
                            <div className="card">
                                <img className="card-img-top" src="https://www.mul.edu.pk/images/posts/news/thumb/an-exclusive-session-with-prof-humayon-dar_285.jpg" className="img-fluid" />
                                <div className="card-body" style={{ backgroundColor: '#F8F8F8' }}>
                                    <h4 className="card-title">AN EXCLUSIVE SESSION </h4>
                                    <span id="text-size-calender-card"><i class="far fa-calendar-alt"></i></span><span id="text-size-calender-card" className="pl-2">October 30, 2021</span><br />

                                    <a href="#!" className="btn btn-primary mt-2" style={{ backgroundColor: "#2D4373", borderColor: "#2D4373" }} >Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel>
                <div className="row pt-5 pb-4">



                </div>
            </div>



            <div className="col-sm-12 pt-4 text-center">
                <h2 style={{ color: "#37538d" }}><b>SCHOOLS</b></h2>
            </div>

            <div className="container pt-4 pb-5">

                <Carousel responsive={responsive}>
                    <div>
                        <div className="col-sm-12">
                            <div className="containerr">
                                <img src="https://www.mul.edu.pk/images/departments/thumb/political-science_13.jpg" alt="Avatar" className="img-fluid  imagee" />
                                <div className="overlayy">
                                    <div className="textt">
                                        <button className="btn btn-primary" style={{ backgroundColor: "#37538d", borderRadius: "0px", borderColor: "#37538d" }}><i class="fas fa-link"></i></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="col-sm-12">
                            <div className="containerr">
                                <img src="	https://www.mul.edu.pk/images/departments/thumb/computer-science_1.jpg" alt="Avatar" className="img-fluid  imagee" />
                                <div className="overlayy">
                                    <div className="textt">
                                        <button className="btn btn-primary" style={{ backgroundColor: "#37538d", borderRadius: "0px", borderColor: "#37538d" }}><i class="fas fa-link"></i></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="col-sm-12">
                            <div className="containerr">
                                <img src="https://www.mul.edu.pk/images/departments/thumb/international-relations_14.jpg" alt="Avatar" className="img-fluid  imagee" />
                                <div className="overlayy">
                                    <div className="textt">
                                        <button className="btn btn-primary" style={{ backgroundColor: "#37538d", borderRadius: "0px", borderColor: "#37538d" }}><i class="fas fa-link"></i></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="col-sm-12">
                            <div className="containerr">
                                <img src="https://www.mul.edu.pk/images/departments/thumb/international-relations_14.jpg" alt="Avatar" className="img-fluid  imagee" />
                                <div className="overlayy">
                                    <div className="textt">
                                        <button className="btn btn-primary" style={{ backgroundColor: "#37538d", borderRadius: "0px", borderColor: "#37538d" }}><i class="fas fa-link"></i></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </Carousel>

            </div>

            <div className="col-sm-12 mb-5 mt-5" id="bg-img" >
                <div className="container">
                    <div className="row" style={{ color: 'white' }}>
                        <div className="col-sm-3" style={{ verticalAlign: "auto", paddingTop: "8%" }} >
                            <div className="col-sm-12 text-center ">
                                <i id="home-icon" class="fas fa-home"></i>
                            </div>
                            <div className="col-sm-12 text-center pt-2">
                                <h2 style={{ color: "white" }}><CountUp end={9} duration={1} /></h2>
                            </div>
                            <div className="col-sm-12 text-center">
                                <h4 style={{ color: "white" }}>FACULTIES</h4>
                            </div>
                        </div>
                        <div className="col-sm-3" style={{ verticalAlign: "auto", paddingTop: "8%" }} >
                            <div className="col-sm-12 text-center ">
                                <i id="home-icon" class="far fa-building"></i>
                            </div>
                            <div className="col-sm-12 text-center pt-2">
                                <h2 style={{ color: "white" }}><CountUp end={32} duration={1} /></h2>
                            </div>
                            <div className="col-sm-12 text-center">
                                <h4 style={{ color: "white" }}>DEPARTMENTS</h4>
                            </div>
                        </div>
                        <div className="col-sm-3" style={{ verticalAlign: "auto", paddingTop: "8%" }} >
                            <div className="col-sm-12 text-center ">
                                <i id="home-icon" class="fas fa-book"></i>
                            </div>
                            <div className="col-sm-12 text-center pt-2">
                                <h2 style={{ color: "white" }}><CountUp end={200} duration={1} /></h2>
                            </div>
                            <div className="col-sm-12 text-center">
                                <h4 style={{ color: "white" }}>PROGRAMS</h4>
                            </div>
                        </div>
                        <div className="col-sm-3" style={{ verticalAlign: "auto", paddingTop: "8%" }} >
                            <div className="col-sm-12 text-center ">
                                <i id="home-icon" class="fas fa-graduation-cap"></i>
                            </div>
                            <div className="col-sm-12 text-center pt-2">
                                <h2 style={{ color: "white" }}><CountUp end={30000} duration={7} /></h2>
                            </div>
                            <div className="col-sm-12 text-center">
                                <h4 style={{ color: "white" }}>ALUMNI</h4>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="col-sm-12 pl-0">
                            <h3>PHOTO <span style={{ color: "#2D4373" }}>GALLERY</span></h3>
                            <img src="images/Line 2.png" className="img-fluid" />
                        </div>
                        <div className="row mb-2">
                            <div className="col-sm-3 mt-3 containerr ">
                                <a target="_blank" href="https://www.mul.edu.pk/images/gallery/thumb/Minhaj-UNiversity-Lahore-Convocation-2018_1.jpg">
                                    <img src="https://www.mul.edu.pk/images/gallery/thumb/Minhaj-UNiversity-Lahore-Convocation-2018_1.jpg" className="img-fluid" />
                                </a>
                                <div className="overlayy">
                                    <div className="textt">
                                        <button className="btn btn-primary" style={{ backgroundColor: "#37538d", borderRadius: "50%", borderColor: "#37538d" }}><i class="fas fa-image"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 mt-3 ">
                                <img src="https://www.mul.edu.pk/images/gallery/thumb/Independence-Day_2.jpg" className="img-fluid" />
                            </div>
                            <div className="col-sm-3 mt-3 ">
                                <img src="https://www.mul.edu.pk/images/gallery/thumb/MoU-Signing-Ceremony_3.jpg" className="img-fluid" />
                            </div>
                            <div className="col-sm-3 mt-3 ">
                                <img src="https://www.mul.edu.pk/images/gallery/thumb/MoU-Signing-Ceremony_3.jpg" className="img-fluid" />
                            </div>
                            <div className="col-sm-3 mt-3">
                                <img src="https://www.mul.edu.pk/images/gallery/thumb/3rd-WIEFC_4.jpg" className="img-fluid" />
                            </div>
                            <div className="col-sm-3 mt-3">
                                <img src="https://www.mul.edu.pk/images/gallery/thumb/Founder-s-Day_5.jpg" className="img-fluid" />
                            </div>
                            <div className="col-sm-3 mt-3">
                                <img src="https://www.mul.edu.pk/images/gallery/thumb/Alumni_6.jpg" className="img-fluid" />
                            </div>
                            <div className="col-sm-3 mt-3">
                                <img src="https://www.mul.edu.pk/images/gallery/thumb/G3-Social-Responsibility-Award_7.jpg" className="img-fluid" />
                            </div>
                            <div className="col-sm-3 mt-3  ">
                                <img src="https://www.mul.edu.pk/images/gallery/thumb/Millad-Conference_8.jpg" className="img-fluid" />
                            </div>
                            <div className="col-sm-3 mt-3 ">
                                <img src="https://www.mul.edu.pk/images/gallery/thumb/2020Sprts-Festival_9.jpg" className="img-fluid" />
                            </div>
                            <div className="col-sm-3 mt-3 ">
                                <img src="https://www.mul.edu.pk/images/gallery/thumb/2020Sprts-Festival_9.jpg" className="img-fluid" />
                            </div>
                            <div className="col-sm-3 mt-3 ">
                                <img src="https://www.mul.edu.pk/images/gallery/thumb/Azhar-ALi_10.jpg" className="img-fluid" />
                            </div>
                            <div className="col-sm-3 mt-3">
                                <img src="https://www.mul.edu.pk/images/gallery/thumb/3rd-WIEFC_4.jpg" className="img-fluid" />
                            </div>
                            <div className="col-sm-3 mt-3">
                                <img src="https://www.mul.edu.pk/images/gallery/thumb/Founder-s-Day_5.jpg" className="img-fluid" />
                            </div>
                            <div className="col-sm-3 mt-3">
                                <img src="https://www.mul.edu.pk/images/gallery/thumb/Alumni_6.jpg" className="img-fluid" />
                            </div>
                            <div className="col-sm-3 mt-3">
                                <img src="https://www.mul.edu.pk/images/gallery/thumb/G3-Social-Responsibility-Award_7.jpg" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 ">
                        <div className="col-sm-12 pl-0">
                            <h3>WHAT <span style={{ color: "#2D4373" }}>PEOPLE SAY?</span></h3>
                            <img src="images/Line 2.png" className="img-fluid" />
                        </div>


                        <div className="scrollbar m-0 mt-3" id="style-7">
                            <div className="force-overflow">
                                <div className="col-sm-12 mt-2" style={{ backgroundColor: "#3B5998", borderRadius: "10px" }}>
                                    <p style={{ color: "white" }} className="pt-3 pb-3">
                                        My experience at Minhaj University is great. It is a noble institution with excellent educational facilities. I am actively participating in different activities of MUL’s of Seekers Club, where I learned a lot.
                                    </p>
                                    <div className="row pb-4">
                                        <div className="col-sm-6">
                                            <div className="row" >
                                                <div className="col-sm-4" >
                                                    <img src="https://www.mul.edu.pk/images/testimonials/nabia-sajid_13.jpg" className="img-fluid" style={{ borderRadius: "50%" }} />
                                                </div>
                                                <div className="col-sm-8 pl-0" >
                                                    <div className="col-sm-12 pl-0" >
                                                        <h5 style={{ color: 'white' }}>Nabia Sajid</h5>
                                                    </div>
                                                    <div className="col-sm-12 pl-0" >
                                                        <h6 style={{ color: 'lightgray' }}>BBA</h6>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-6"></div>
                                    </div>
                                </div>

                                <div className="col-sm-12 mt-2" style={{ backgroundColor: "#3B5998", borderRadius: "10px" }}>
                                    <p style={{ color: "white" }} className="pt-3 pb-3">
                                        My experience at Minhaj University is great. It is a noble institution with excellent educational facilities. I am actively participating in different activities of MUL’s of Seekers Club, where I learned a lot.
                                    </p>
                                    <div className="row pb-4 ">
                                        <div className="col-sm-6">
                                            <div className="row" >
                                                <div className="col-sm-4" >
                                                    <img src="https://www.mul.edu.pk/images/testimonials/mubashir-sohail_12.jpg" className="img-fluid" style={{ borderRadius: "50%" }} />
                                                </div>
                                                <div className="col-sm-8 pl-0" >
                                                    <div className="col-sm-12 pl-0" >
                                                        <h5 style={{ color: 'white' }}>Nabia Sajid</h5>
                                                    </div>
                                                    <div className="col-sm-12 pl-0" >
                                                        <h6 style={{ color: 'lightgray' }}>BBA</h6>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-6"></div>
                                    </div>
                                </div>

                                <div className="col-sm-12 mt-2" style={{ backgroundColor: "#3B5998", borderRadius: "10px" }}>
                                    <p style={{ color: "white" }} className="pt-3 pb-3">
                                        My experience at Minhaj University is great. It is a noble institution with excellent educational facilities. I am actively participating in different activities of MUL’s of Seekers Club, where I learned a lot.
                                    </p>
                                    <div className="row pb-4 ">
                                        <div className="col-sm-6">
                                            <div className="row" >
                                                <div className="col-sm-4" >
                                                    <img src="https://www.mul.edu.pk/images/testimonials/qaseem-ur-rahman_11.jpg" className="img-fluid" style={{ borderRadius: "50%" }} />
                                                </div>
                                                <div className="col-sm-8 pl-0" >
                                                    <div className="col-sm-12 pl-0" >
                                                        <h5 style={{ color: 'white' }}>Nabia Sajid</h5>
                                                    </div>
                                                    <div className="col-sm-12 pl-0" >
                                                        <h6 style={{ color: 'lightgray' }}>BBA</h6>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-6"></div>
                                    </div>
                                </div>

                                <div className="col-sm-12 mt-2" style={{ backgroundColor: "#3B5998", borderRadius: "10px" }}>
                                    <p style={{ color: "white" }} className="pt-3 pb-3">
                                        My experience at Minhaj University is great. It is a noble institution with excellent educational facilities. I am actively participating in different activities of MUL’s of Seekers Club, where I learned a lot.
                                    </p>
                                    <div className="row pb-4 ">
                                        <div className="col-sm-6">
                                            <div className="row" >
                                                <div className="col-sm-4" >
                                                    <img src="	https://www.mul.edu.pk/images/testimonials/ashfaq-hussain_10.jpg" className="img-fluid" style={{ borderRadius: "50%" }} />
                                                </div>
                                                <div className="col-sm-8 pl-0" >
                                                    <div className="col-sm-12 pl-0" >
                                                        <h5 style={{ color: 'white' }}>Nabia Sajid</h5>
                                                    </div>
                                                    <div className="col-sm-12 pl-0" >
                                                        <h6 style={{ color: 'lightgray' }}>BBA</h6>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-sm-6"></div>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </div>

            <div className="col-sm-12 pt-5 text-center">
                <h2 style={{ color: "#37538d" }}><b>DEPARTMENTS</b></h2>
            </div>

            <div className="container pt-4 pb-5">

                <Carousel responsive={responsive}>
                    <div>
                        <div className="col-sm-12 ">
                            <div className="containerr">
                                <div className="col-sm-12 p-0" style={{ border: "2px solid lightgray", borderBottom: "none" }} >
                                    <img src="https://www.mul.edu.pk/images/posts/highlights/thumb/center-of-research-development_14.jpg" alt="Avatar" className="img-fluid   imagee" />
                                    <div className="overlayy">
                                        <div className="textt">
                                            <button className="btn btn-primary" style={{ backgroundColor: "#37538d", borderRadius: "0px", borderColor: "#37538d" }}><i class="fas fa-link"></i></button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 pt-2 pb-2" style={{ borderBottom: "2px solid #3B5998", borderTop: "2px solid lightgray", borderLeft: "2px solid lightgray", borderRight: "2px solid lightgray" }}>
                                    <b> RESEARCH </b>


                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="col-sm-12">
                            <div className="containerr" >
                                <div className="col-sm-12 p-0" style={{ border: "2px solid lightgray", borderBottom: "none" }}>
                                    <img src="https://www.mul.edu.pk/images/posts/highlights/thumb/advancement-office_16.jpg" alt="Avatar" className="img-fluid  imagee" />
                                    <div className="overlayy">
                                        <div className="textt">
                                            <button className="btn btn-primary" style={{ backgroundColor: "#37538d", borderRadius: "0px", borderColor: "#37538d" }}><i class="fas fa-link"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 pt-2 pb-2" style={{ borderBottom: "2px solid #3B5998", borderTop: "2px solid lightgray", borderLeft: "2px solid lightgray", borderRight: "2px solid lightgray" }}>
                                    <b>  ADVANCEMENT </b>


                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="col-sm-12">
                            <div className="containerr">
                                <div className="col-sm-12 p-0" style={{ border: "2px solid lightgray", borderBottom: "none" }}>
                                    <img src="https://www.mul.edu.pk/images/departments/thumb/international-relations_14.jpg" alt="Avatar" className="img-fluid  imagee" />
                                    <div className="overlayy">
                                        <div className="textt">
                                            <button className="btn btn-primary" style={{ backgroundColor: "#37538d", borderRadius: "0px", borderColor: "#37538d" }}><i class="fas fa-link"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 pt-2 pb-2" style={{ borderBottom: "2px solid #3B5998", borderTop: "2px solid lightgray", borderLeft: "2px solid lightgray", borderRight: "2px solid lightgray" }}>
                                    <b> INTERNATIONAL</b>


                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className="col-sm-12">
                            <div className="containerr" >
                                <div className="col-sm-12 p-0" style={{ border: "2px solid lightgray", borderBottom: "none" }}>

                                    <img src="https://www.mul.edu.pk/images/departments/thumb/international-relations_14.jpg" alt="Avatar" className="img-fluid  imagee" />
                                    <div className="overlayy">
                                        <div className="textt">
                                            <button className="btn btn-primary" style={{ backgroundColor: "#37538d", borderRadius: "0px", borderColor: "#37538d" }}><i class="fas fa-link"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 pt-2 pb-2" style={{ borderBottom: "2px solid #3B5998", borderTop: "2px solid lightgray", borderLeft: "2px solid lightgray", borderRight: "2px solid lightgray" }}>
                                    <b>  INTERNATIONAL </b>


                                </div>
                            </div>

                        </div>
                    </div>
                </Carousel>

            </div>
            
            {/* <div className="col-sm-12 bg-img-footer">
                <div className="container">

                    <div className="row">
                        <div className="col-sm-3">
                            <div className="col-sm-12 pt-5">
                                <img src="https://www.mul.edu.pk/images/logo-mul-footer.png" className="img-fluid" style={{ width: "100%" }} />
                            </div>
                            <div className="col-sm-12 pr-0 pt-2" style={{ color: "lightgray" }}>
                                <p>
                                    MUL was founded in 1986 by Shaykh-ul-Islam Prof. Dr M. Tahir-ul-Qadri, patron-in-chief of Minhaj ul Quran <br /> International. Degree awarding status was granted by Govt. of the Punjab. The HEC of Pakistan has also recognized MUL, as ‘W3‘ ranking University.
                                </p>
                                <p style={{ cursor: "pointer" }} >
                                    <span style={{ color: "#3B5998" }}> <i class="fas fa-angle-double-right"></i> </span> Read more
                                </p>
                            </div>
                            <div className="col-sm-12 ">
                                <span><i id="icon-social-media" class="fab fa-facebook"></i></span><span><i id="icon-social-media-2" class="fab fa-twitter-square"></i></span><span><i id="icon-social-media-2" class="fab fa-linkedin"></i></span><span><i id="icon-social-media-2" class="fab fa-google-plus-square"></i></span>
                            </div>

                        </div>
                        <div className="col-sm-3">
                            <div className="col-sm-12 pt-5">
                                <h5 style={{ color: "white" }}>Latest News</h5>
                                <img src="images/Line 2.png" className="img-fluid" />
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-6">
                                    <div className="col-sm-12">
                                        <img src="	https://www.mul.edu.pk/images/posts/news/footer/admissions-open-fall-2020_283.jpg" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-6 pl-0 pr-0">
                                    <p style={{ color: "white", fontSize: "70%", }}><b>Admission Open Fall 2021</b> </p>
                                    <p style={{ fontSize: "70%", color: "gray" }}>June 1, 2021</p>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-sm-6 col-6">
                                    <div className="col-sm-12">
                                        <img src="https://www.mul.edu.pk/images/posts/news/footer/an-exclusive-session-with-prof-humayon-dar_285.jpg" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-6 pl-0">
                                    <p style={{ color: "white", fontSize: "70%", }}> <b>AN EXCLUSIVE SESSION WITH PROF HUMAYON</b></p>
                                    <p style={{ fontSize: "70%", color: "gray" }}>June 1, 2021</p>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-sm-6 col-6">
                                    <div className="col-sm-12">
                                        <img src="https://www.mul.edu.pk/images/posts/news/footer/glob-fist-2021_284.jpg" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-6 pl-0">
                                    <p style={{ color: "white", fontSize: "70%", }}><b>Admission Open Fall 2021</b></p>
                                    <p style={{ fontSize: "70%", color: "gray" }}>June 1, 2021</p>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-sm-6 col-6">
                                    <div className="col-sm-12">
                                        <img src="https://www.mul.edu.pk/images/posts/news/footer/a-panel-discussion-of-muls-authors_282.jpg" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-sm-6 col-6 pl-0">
                                    <p style={{ color: "white", fontSize: "70%", }}><b>Admission Open Fall 2021</b></p>
                                    <p style={{ fontSize: "70%", color: "gray" }}>June 1, 2021</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="col-sm-12 pt-5">
                                <h5 style={{ color: "white" }}>Useful Links</h5>
                                <img src="images/Line 2.png" className="img-fluid" />
                            </div>
                            <div className="col-sm-12">
                            <div className="col-sm-12" style={{borderBottom:"1px dashed gray"}}>
                                <h6 style={{ color: "lightgray" }}>Admission</h6>
                                
                            </div>
                            </div>
                            <div className="col-sm-12 pt-2 pb-2">
                            <div className="col-sm-12" style={{borderBottom:"1px dashed gray"}}>
                                <h6 style={{ color: "lightgray" }}>Fee Calculator</h6>
                                
                            </div>
                            </div>
                            <div className="col-sm-12 pt-1 pb-2">
                            <div className="col-sm-12" style={{borderBottom:"1px dashed gray"}}>
                                <h6 style={{ color: "lightgray" }}>CMS Login</h6>
                                
                            </div>
                            </div>
                            <div className="col-sm-12 pt-1 pb-2">
                            <div className="col-sm-12" style={{borderBottom:"1px dashed gray"}}>
                                <h6 style={{ color: "lightgray" }}>Academic Calendar</h6>
                                
                            </div>
                            </div>
                            <div className="col-sm-12 pt-1 pb-2">
                            <div className="col-sm-12" style={{borderBottom:"1px dashed gray"}}>
                                <h6 style={{ color: "lightgray" }}>About University</h6>
                                
                            </div>
                            </div>
                            <div className="col-sm-12 pt-1 pb-3">
                            <div className="col-sm-12" style={{borderBottom:"1px dashed gray"}}>
                                <h6 style={{ color: "lightgray" }}>MUL Social Media Policy</h6>
                                
                            </div>
                            </div>
                            <div className="col-sm-12 pb-3">
                            <div className="col-sm-12" style={{borderBottom:"1px dashed gray"}}>
                                <h6 style={{ color: "lightgray" }}>Contact Us</h6>
                                
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="col-sm-12 pt-5">
                                <h5 style={{ color: "white" }}>Quick Contact</h5>
                                <img src="images/Line 2.png" className="img-fluid" />
                            </div>
                            <div className="col-sm-12" style={{borderBottom:"1px dashed gray"}}>
                                <h6 style={{ color: "lightgray" }}>0311-1222-685</h6>
                                
                            </div>
                            <div className="col-sm-12 pt-2" style={{borderBottom:"1px dashed gray"}}>
                                <h6 style={{ color: "lightgray" }}>0311-1222-685</h6>
                                
                            </div>
                            <div className="col-sm-12 pt-2" style={{borderBottom:"1px dashed gray"}}>
                                <h6 style={{ color: "lightgray" }}>Minhaj University Lahore Main Campus Hamdard Chowk,Township, Lahore, Pakistan</h6>
                                
                            </div>
                            <div className="col-sm-12 pt-2" style={{color:"lightgray"}}>
                                <h6>Download Mobile Apps</h6>
                            </div>
                            <div className="col-sm-12 pr-0" style={{color:"white"}}>
                                <button className="btn btn-primay" style={{backgroundColor:"#4C70BA", color:"white"}}> <i class="fab fa-google-play"></i> Play Store </button><span> <button className="btn btn-primay" style={{backgroundColor:"#4C70BA", color:"white"}}> <i class="fab fa-apple"></i> App Store </button></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div> */}

            <Footer/>
            




        </div>
    )
}

export default Home
