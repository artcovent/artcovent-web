import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-subtitle">온라인 캐릭터 일러스트 학원</span>
                    <h1 className="hero-title">
                        당신의 상상을 <br />
                        <span className="text-gradient">현실로 만드세요</span>
                    </h1>
                    <p className="hero-description">
                        집에서 코칭받는 캐릭터 일러스트 클래스 <br />
                        학생마다 맞춤 진도, 개별 피드백 및 과제로 진행되어 <br />
                        기초부터 고급과정까지 한번에!
                    </p>
                    <div className="hero-buttons">
                        <a href="https://cafe.naver.com/f-e/cafes/29626144/menus/55?viewType=I" target="_blank" rel="noopener noreferrer" className="btn btn-outline">강좌 보기</a>
                        <a href="http://pf.kakao.com/_VvfzG/chat" target="_blank" rel="noopener noreferrer" className="btn btn-outline">상담 신청</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
