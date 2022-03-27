import React from "react";
import '../css/top_header.css';

const Top_Header = () =>{
    return(
        <div>
            <div className="container-fluid top_header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <div className="phone">
                                <a href="tel:+8617771032"><i class="fas fa-phone-alt"></i> 91-8617771032</a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="phone">
                                <a href="#"><i class="fas fa-envelope"></i> md9135@gmail.com</a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                        <div className="social">
                            <a href="www.facebook.com"><i class="fab fa-facebook"></i></a>
                            <a href="www.instagram.com"><i class="fab fa-instagram"></i></a>
                            <a href="www.twitter.com"><i class="fab fa-twitter"></i></a>
                            <a href="www.youtube.com"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top_Header