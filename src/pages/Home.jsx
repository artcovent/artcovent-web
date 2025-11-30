import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import FloatingHearts from '../components/FloatingHearts';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <FloatingHearts />
            <Hero />

            <Section id="about" title="About ARTCOVENT">
                <div className="about-content">
                    <div className="about-text">
                        <h3>Professional Character Illustration Course</h3>
                        <p>
                            현직 일러스트레이터들이 모인 아트코벤트는 학생 개개인의 눈높이에 맞춘 교육을 지향합니다
                        </p>
                        <p>
                            가볍게 시작하는 즐거운 취미 미술은 물론, 취업을 위한 전문 포트폴리오 과정까지 폭넓게 아우릅니다
                        </p>
                        <p>
                            세심한 지도와 소통으로 어떤 목표를 가지고 오시든 그 꿈이 현실이 되도록 든든한 길잡이가 되어드리겠습니다
                        </p>
                        <div className="about-features">
                            <a href="https://cafe.naver.com/f-e/cafes/29626144/menus/55?viewType=I" target="_blank" rel="noopener noreferrer" className="feature-item feature-link">
                                <div className="feature-icon">📋</div>
                                <h4>클래스 안내</h4>
                                <p>자세한 강좌 정보 확인하기</p>
                            </a>
                            <a href="https://www.youtube.com/@artcovent" target="_blank" rel="noopener noreferrer" className="feature-item feature-link">
                                <div className="feature-icon">📺</div>
                                <h4>유튜브 채널</h4>
                                <p>선생님들의 그림 꿀팁</p>
                            </a>
                            <a href="https://forms.gle/NtkDf33inMXLMqEb9" target="_blank" rel="noopener noreferrer" className="feature-item feature-link">
                                <div className="feature-icon">🖱️</div>
                                <h4>수강신청</h4>
                                <p>지금 바로 시작하세요!</p>
                            </a>
                        </div>
                    </div>
                </div>
            </Section>

            <Section id="classes" title="Classes Review">
                <div className="review-banners">
                    <a href="https://cafe.naver.com/f-e/cafes/29626144/menus/36?viewType=L" target="_blank" rel="noopener noreferrer" className="review-banner-item">
                        <div className="feature-icon">📑</div>
                        <h4>텍스트로 보는 찐 후기</h4>
                        <p>수강생들의 생생한 리얼 스토리</p>
                    </a>
                    <a href="https://www.youtube.com/playlist?list=PLhgWVVXOqH0JpvyXWHdPVf0ovDbWS6MPY" target="_blank" rel="noopener noreferrer" className="review-banner-item">
                        <div className="feature-icon">🎬</div>
                        <h4>영상으로 보는 수강 후기</h4>
                        <p>눈으로 확인하는 놀라운 변화</p>
                    </a>
                </div>
            </Section>


        </div>
    );
};

export default Home;
