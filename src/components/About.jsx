import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-center" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a passionate individual with a deep fascination for the
        intersection of artificial intelligence, machine learning, and web
        development. As a dedicated enthusiast in these dynamic fields, I find
        joy in exploring innovative solutions that bridge the gap between
        cutting-edge technology and user-friendly applications.
      </motion.p>
      <br />
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        My journey into the world of technology began with web development.
        Armed with a solid grasp of HTML and CSS, I ventured further into the
        exciting world of JavaScript frameworks. My toolkit now includes
        proficiency in React.js and Next.js. In this website, I've even
        leveraged advanced features such as the "tree" package to incorporate
        captivating 3D motions, showcasing not only my technical aptitude but
        also a penchant for pushing the boundaries of what web development can
        achieve. And have done 2 internships in the web development Field. The
        recent surge in Artificial Intelligence, exemplified by groundbreaking
        technologies like ChatGPT, DALL·E, and more, has significantly
        heightened my curiosity within this dynamic field. Armed with
        proficiency in Python and TensorFlow, I've delved into the realm of AI
        through various projects. Notable among them are my endeavors such as
        predicting NBA MVP winners, developing an autoencoder to enhance blurred
        images, and creating a robust model for number plate tracking.
      </motion.p>
      <br />
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        My journey into the world of technology began with web development.
        Armed with a solid grasp of HTML and CSS, I ventured further into the
        exciting world of JavaScript frameworks. My toolkit now includes
        proficiency in React.js and Next.js. In this website, I've even
        leveraged advanced features such as the "tree" package to incorporate
        captivating 3D motions, showcasing not only my technical aptitude but
        also a penchant for pushing the boundaries of what web development can
        achieve. And have done 2 internships in the web development field.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
