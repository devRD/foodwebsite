import React from 'react';
import './footer.css';

const Footer = () => {
  return(
     <footer className="bg-dark">
      <div className="container footer__cont">
        <div className="row">
          <div className="col-sm-6 col-md-4 text-center">
            <h1>Brand Name</h1>
            <p className="footer__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
            
          </div>
          <div className="col-sm-6 col-md-4 footer__links text-center">
            <a href="#" target="_blank">Link 1</a>
            <a href="#" target="_blank">Link 2</a>
            <a href="#" target="_blank">Link 3</a>
          </div>
          <div className="col-sm-12 col-md-4 footer__social text-center">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-google"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a> 
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
