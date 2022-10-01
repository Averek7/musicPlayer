import React from 'react';
import 'font-awesome/css/font-awesome.css';
import "../styles/footer.css"

function Footer() {
  return (
    <>
        <footer>
            <div className="footer bg-dark text-center text-white">
                <div className="container p-4 pb-0">
                    <div className="text-center header">
                        <div className="col-12">
                            <h3>Music App</h3>
                            <br/>
                        </div>
                        <div className="col-12">
                            <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#55acee"}} href="https://www.facebook.com" role="button" ><i className="fa fa-facebook fa-lg"></i></a>
                            <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#55acee"}} href="#!" role="button" ><i className="fa fa-twitter fa-lg"></i></a>
                            <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#dd4b39"}} href="#!" role="button"><i class="fa fa-google fa-lg"></i></a>
                            <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#ac2bac"}} href="#!"role="button"><i class="fa fa-instagram fa-lg"></i></a>
                            <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#0082ca"}} href="https://www.linkedin.com" role="button"><i class="fa fa-linkedin fa-lg"></i></a>
                            <a className="btn text-white btn-floating m-1" style={{backgroundColor: "#333333"}} href="https://github.com" role="button"><i class="fa fa-github fa-lg"></i></a>
                        </div>
                    </div>
                   
                </div>
            </div>

        </footer>

       
    </>
  );
}

export default Footer