import React from 'react';

const Section = ({ id, className = '', children, title, subtitle }) => {
    return (
        <section id={id} className={`section ${className}`}>
            <div className="container">
                {(title || subtitle) && (
                    <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }}>
                        {subtitle && (
                            <span style={{
                                color: 'var(--color-primary)',
                                fontWeight: '600',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                fontSize: '0.9rem',
                                display: 'block',
                                marginBottom: '0.5rem'
                            }}>
                                {subtitle}
                            </span>
                        )}
                        {title && (
                            <h2 style={{
                                fontSize: '2.5rem',
                                fontWeight: '700',
                                marginBottom: '1rem'
                            }}>
                                {title}
                            </h2>
                        )}
                        <div style={{
                            width: '60px',
                            height: '4px',
                            background: 'var(--color-primary)',
                            margin: '0 auto',
                            borderRadius: '2px'
                        }}></div>
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
