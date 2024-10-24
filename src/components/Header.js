
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css'; // Import the CSS file for styles

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [hoverPos, setHoverPos] = useState({ x: 0, y: 0 });
  const [binaryStream, setBinaryStream] = useState('');

  const links = ['Profile', 'Skills', 'Projects','Certifications', 'Contact'];

  useEffect(() => {
    const interval = setInterval(() => {
      const binary = Array(8).fill()
        .map(() => (Math.random() > 0.5 ? '1' : '0'))
        .join('');
      setBinaryStream(binary);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleHover = (index, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setActiveLink(index);
  };

  return (
    <header className="cyber-nav-header">
      {/* Circuit board background */}
      <div className="circuit-board">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="circuit-line"
            style={{
              height: '1px',
              width: `${20 + Math.random() * 30}%`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      <nav className="cyber-nav">
        <ul className="cyber-nav-links">
          {links.map((link, index) => (
            <motion.li
              key={index}
              className="cyber-nav-item"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href="#"
                className="cyber-link"
                onMouseEnter={(e) => handleHover(index, e)}
                onMouseLeave={() => setActiveLink(null)}
              >
                {/* Binary data stream */}
                <div className="binary-stream">
                  {activeLink === index && binaryStream}
                </div>

                {/* Main text with glitch effect */}
                <span className="cyber-link-text">
                  <AnimatePresence>
                    {activeLink === index && (
                      <motion.span
                        className="glitch-text"
                        initial={{ x: 0 }}
                        animate={{ x: [-1, 1, 0] }}
                        transition={{ duration: 0.2, repeat: 2 }}
                      >
                        {link}
                      </motion.span>
                    )}
                  </AnimatePresence>
                  {link}
                </span>

                {/* Circuit connection lines */}
                <AnimatePresence>
                  {activeLink === index && (
                    <motion.div
                      className="circuit-connection"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="connection-line" />

                      {/* Connection nodes */}
                      {[0, 0.5, 1].map((pos, i) => (
                        <motion.div
                          key={i}
                          className="connection-node"
                          style={{ left: `${pos * 100}%`, translateX: '-50%' }}
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1, 0.8] }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Energy field */}
                <div className="energy-field">
                  {activeLink === index &&
                    [...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="energy-wave"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1.2, opacity: [0, 0.2, 0] }}
                        transition={{
                          duration: 1,
                          delay: i * 0.2,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                </div>

                {/* Data transfer effect */}
                <AnimatePresence>
                  {activeLink === index && (
                    <motion.div
                      className="data-transfer"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="data-dot"
                          initial={{
                            x: hoverPos.x,
                            y: hoverPos.y,
                            scale: 0,
                            opacity: 1,
                          }}
                          animate={{
                            x: [
                              hoverPos.x,
                              hoverPos.x + (Math.random() - 0.5) * 50,
                            ],
                            y: [
                              hoverPos.y,
                              hoverPos.y + (Math.random() - 0.5) * 50,
                            ],
                            scale: [0, 1, 0],
                            opacity: [1, 0],
                          }}
                          transition={{
                            duration: 0.5,
                            delay: i * 0.05,
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Digital interference lines */}
                <AnimatePresence>
                  {activeLink === index && (
                    <motion.div
                      className="digital-interference"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="interference-line"
                          style={{
                            top: `${33 * (i + 1)}%`,
                          }}
                          animate={{
                            translateX: ['100%', '-100%'],
                          }}
                          transition={{
                            duration: 0.5,
                            delay: i * 0.1,
                            repeat: Infinity,
                            repeatType: 'loop',
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
