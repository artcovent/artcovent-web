import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h2>ARTCOVENT</h2>
                        <p>Character Illustration Academy</p>
                    </div>

                    <div className="footer-links">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="http://pf.kakao.com/_VvfzG" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="KakaoTalk">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 3c-5.523 0-10 3.577-10 8 0 2.72 1.706 5.13 4.35 6.54-.188.694-1.24 4.53-1.28 4.67-.05.19.07.37.26.37.11 0 .22-.05.48-.23 3.32-2.2 4.69-3.08 4.75-3.13.47.07.95.11 1.44.11 5.523 0 10-3.577 10-8s-4.477-8-10-8z" />
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/@artcovent" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="YouTube">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                            <a href="https://x.com/covent_official" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="X (Twitter)">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/artcovent_official/" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact</h3>
                        <p>Mail : artcovent@naver.com</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-info">
                        <p>아트코벤트 원격평생교육원 | 서울 중구 삼일대로 363 8층 810-09호</p>
                        <p>대표자명 : 임지혜 | 사업자등록번호 : 495 04 01199</p>
                        <p>통신판매업 신고번호 : 2018-서울강남-04388 | 원격평생교육시설신고 : 제 원격-382호</p>
                        <p className="copyright">CopyrightⓒARTCOVENT.co.,ltd. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
