import React from 'react'
import Navbar from "../Navbar/Navbar"
import "../Admission/Admission.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Footer from '../Footer/Footer';

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

function Admission() {
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
            <Navbar />
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
                            <h5>Admission Open Fall 2021</h5>
                            <h6 style={{ color: "#3B5998" }}><i class="far fa-calendar-alt"></i> 1 June 2021 </h6>
                        </div>
                        <div className="col-sm-12 mt-4">
                            <img src="https://www.mul.edu.pk/images/posts/news/admissions-open-fall-2020_283.jpg" className="img-fluid" />
                        </div>
                        <div className="col-sm-12 mt-3 mb-3">
                            <h4 style={{ color: " #3B5998" }}>Associate Degree Programs | Morning    </h4>
                        </div>
                        <div className="col-sm-12" style={{overflowX:"auto"}}>
                            <table className="table table-striped">
                                <thead style={{backgroundColor:"#3B5998", color:"white"}}>
                                    <tr>
                                       
                                        <th>PROGRAM</th>
                                        <th>ELIGIBILITY</th>
                                        <th>ADMISSION FEE</th>
                                        <th>SEMESTER FEE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                       
                                        <td>Computer Sciences</td>
                                        <td>50% marks in FSc, ICS, DAE</td>
                                        <td>30,200</td>
                                        <td>33750x2</td>
                                    </tr>
                                    <tr>
                                       
                                    <td>Computer Sciences</td>
                                        <td>50% marks in FSc, ICS, DAE</td>
                                        <td>30,200</td>
                                        <td>33750x2</td>
                                    </tr>

                                    <tr>
                                       
                                    <td>Computer Sciences</td>
                                        <td>50% marks in FSc, ICS, DAE</td>
                                        <td>30,200</td>
                                        <td>33750x2</td>
                                    </tr>

                                    <tr>
                                       
                                    <td>Computer Sciences</td>
                                        <td>50% marks in FSc, ICS, DAE</td>
                                        <td>30,200</td>
                                        <td>33750x2</td>
                                    </tr>

                                    <tr>
                                       
                                    <td>Computer Sciences</td>
                                        <td>50% marks in FSc, ICS, DAE</td>
                                        <td>30,200</td>
                                        <td>33750x2</td>
                                    </tr>

                                    <tr>
                                       
                                    <td>Computer Sciences</td>
                                        <td>50% marks in FSc, ICS, DAE</td>
                                        <td>30,200</td>
                                        <td>33750x2</td>
                                    </tr>
                                </tbody>
                            </table>


                        </div>
                        <div className="col-sm-12 mb-3">
                           <a href="https://www.mul.edu.pk/english/inquiry/"> <button className="btn btn-primary" style={{backgroundColor:"#3B5998", borderColor:"#3B5998"}}>Apply Now</button> </a> <span> <a href="https://mul.edu.pk/downloads/How-to-Apply-Online.pdf"> <button className="btn btn-primary" style={{backgroundColor:"#3B5998", borderColor:"#3B5998"}}>How to Apply Online</button> </a></span>
                        </div>

                        {/* second */}
                        <div className="col-sm-12 mt-3 mb-3">
                            <h4 style={{ color: " #3B5998" }}>BS Programs | Morning    </h4>
                        </div>
                        <div className="col-sm-12" style={{overflowX:"auto"}}>
                            <table className="table table-striped">
                                <thead style={{backgroundColor:"#3B5998", color:"white"}}>
                                    <tr>
                                       
                                        <th>PROGRAM</th>
                                        <th>ELIGIBILITY</th>
                                        <th>ADMISSION FEE</th>
                                        <th>SEMESTER FEE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                       
                                        <td>Computer Sciences</td>
                                        <td>50% marks in FSc, ICS, DAE</td>
                                        <td>30,200</td>
                                        <td>33750x2</td>
                                    </tr>
                                    <tr>
                                       
                                    <td>Computer Sciences</td>
                                        <td>50% marks in FSc, ICS, DAE</td>
                                        <td>30,200</td>
                                        <td>33750x2</td>
                                    </tr>

                                    <tr>
                                       
                                    <td>Computer Sciences</td>
                                        <td>50% marks in FSc, ICS, DAE</td>
                                        <td>30,200</td>
                                        <td>33750x2</td>
                                    </tr>

                                    <tr>
                                       
                                    <td>Computer Sciences</td>
                                        <td>50% marks in FSc, ICS, DAE</td>
                                        <td>30,200</td>
                                        <td>33750x2</td>
                                    </tr>

                                    <tr>
                                       
                                    <td>Computer Sciences</td>
                                        <td>50% marks in FSc, ICS, DAE</td>
                                        <td>30,200</td>
                                        <td>33750x2</td>
                                    </tr>

                                    <tr>
                                       
                                    <td>Computer Sciences</td>
                                        <td>50% marks in FSc, ICS, DAE</td>
                                        <td>30,200</td>
                                        <td>33750x2</td>
                                    </tr>
                                </tbody>
                            </table>


                        </div>
                        <div className="col-sm-12 mb-3">
                            <button className="btn btn-primary" style={{backgroundColor:"#3B5998", borderColor:"#3B5998"}}>Apply Now</button> <span><button className="btn btn-primary" style={{backgroundColor:"#3B5998", borderColor:"#3B5998"}}>How to Apply Online</button></span>
                        </div>

                        {/* third */}
                        <div className="col-sm-12 mt-3 mb-3">
                            <h4 style={{ color: " #3B5998" }}>LL.B. (5 Years) | Morning    </h4>
                        </div>
                        <div className="col-sm-12" style={{overflowX:"auto"}}>
                            <table className="table table-striped">
                                <thead style={{backgroundColor:"#3B5998", color:"white"}}>
                                    <tr>
                                       
                                        <th>PROGRAM</th>
                                        <th>ELIGIBILITY</th>
                                        <th>ADMISSION FEE</th>
                                        <th>SEMESTER FEE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                       
                                        <td>Computer Sciences</td>
                                        <td>50% marks in FSc, ICS, DAE</td>
                                        <td>30,200</td>
                                        <td>33750x2</td>
                                    </tr>
                                    <tr>
                                       
                                    <td>Computer Sciences</td>
                                        <td>50% marks in FSc, ICS, DAE</td>
                                        <td>30,200</td>
                                        <td>33750x2</td>
                                    </tr>

                                    <tr>
                                       
                                    <td>Computer Sciences</td>
                                        <td>50% marks in FSc, ICS, DAE</td>
                                        <td>30,200</td>
                                        <td>33750x2</td>
                                    </tr>

                                    <tr>
                                       
                                    <td>Computer Sciences</td>
                                        <td>50% marks in FSc, ICS, DAE</td>
                                        <td>30,200</td>
                                        <td>33750x2</td>
                                    </tr>

                                    <tr>
                                       
                                    <td>Computer Sciences</td>
                                        <td>50% marks in FSc, ICS, DAE</td>
                                        <td>30,200</td>
                                        <td>33750x2</td>
                                    </tr>

                                    <tr>
                                       
                                    <td>Computer Sciences</td>
                                        <td>50% marks in FSc, ICS, DAE</td>
                                        <td>30,200</td>
                                        <td>33750x2</td>
                                    </tr>
                                </tbody>
                            </table>


                        </div>
                        <div className="col-sm-12 mb-3">
                            <button className="btn btn-primary" style={{backgroundColor:"#3B5998", borderColor:"#3B5998"}}>Apply Now</button> <span><button className="btn btn-primary" style={{backgroundColor:"#3B5998", borderColor:"#3B5998"}}>How to Apply Online</button></span>
                        </div>
                        <div className="col-sm-12 mb-3 ">
                       
                            <hr/>
                            
                        </div>
                        <div className="col-sm-12" style={{height:"70vh"}}>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ydquV3uyaUI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="col-sm-12 mt-3">
                            <h5 style={{color:"red"}}>Required Documents for Admission:</h5>
                            <ol >
                                <li>Complete and signed Application Form</li>
                                <li>Matriculation Certificates </li>
                                <li> Intermediate Certificate </li>
                                <li>Graduation Degree (If applicable)</li>
                                <li>Master Degree (If applicable)</li>
                                <li> CNIC Copy (Original to be seen)</li>
                                <li>Five photos (one attested on the back)</li>
                                <li>Result Card NTS/Undertaking (for M.Phil)</li>
                                <li> Domicile Certificate </li>
                                <li> All documents copies should be attested </li>

                            </ol>
                        </div>
                        <div className="col-sm-12">
                            
                               <h5 style={{color:"red"}}>Admissions Office Timings:</h5>
                                <p>Monday - Friday: 8:30 - 4:30</p>
                                <h5 style={{color:"red"}}>Contact Details: </h5>
                                <p> Direct Line: 042-35145629 </p>
                                <p>UAN: 03111222685 </p>
                                <p>042-35145621-26, Ext: 320-321 </p>
                                <p>admission@mul.edu.pk </p>
                               



                           
                        </div>

                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Admission
