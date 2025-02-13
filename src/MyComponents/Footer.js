import React from 'react';
import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark text-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>My Todo App</h5>
                        <p className="text-muted">Stay organized and productive</p>
                    </div>

                    <div className="col-md-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/about" className="text-light">About: smanish</a></li>
                            <li><a href="/contact" className="text-light">Contact: 8529706985</a></li>
                        </ul>
                    </div>

                    <div className="col-md-3">
                        <h5>Connect</h5>
                        <div className="social-links">
                            <a href="https://www.linkedin.com" className="btn btn-outline-light btn-sm m-1">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://facebook.com" className="btn btn-outline-light btn-sm m-1">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="https://github.com" className="btn btn-outline-light btn-sm m-1">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-top pt-3 mt-3 text-center">
                    <small className="text-muted">
                        © 2023 My Todo App. All rights reserved.
                    </small>
                </div>
            </div>
        </footer>
    )
}