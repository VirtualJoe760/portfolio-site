/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className=" xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>

      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Who is?</p>
        <h2 className={styles.sectionHeadText}>Joseph Sardella.</h2>
      </motion.div>
      <motion.p 
      variants={fadeIn("","", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a full-stack developer and AI engineer. I started out crafting
        front-end interfaces with JavaScript & TypeScript, grew into building
        complete full-stack applications with React, Node.js, Next.js and
        Three.js, and today I engineer AI-powered products that put large
        language models to work for real businesses. I pride myself on being a
        quick learner and partnering closely with clients to ship efficient,
        scalable, and intelligent software that grows your business to the next
        level. Let's build something and Dream Big!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")