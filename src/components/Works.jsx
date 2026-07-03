/* eslint-disable react-refresh/only-export-components */
import { useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { www } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const PROJECTS_PER_PAGE = 6;

const ProjectCard = ({ index, name, description, tags, image, source_code_link, website_link }) => {
  return (
    <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    >
      <Tilt
      options={{
        max:45,
        scale: 1,
        speed: 450
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
          src={image}
          alt={name}
          className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
              src={github}
              alt='github'
              className='w-8 h-8 object-contain'
              />

            </div>
            <div
            onClick={() => window.open(website_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
              src={www}
              alt='Visit Website'
              className='w-8 h-8 object-contain'
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const start = page * PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(start, start + PROJECTS_PER_PAGE);

  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Check out my</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live url's.
          It refelcts my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      {/* keying by page forces a remount so the fadeIn cascade replays on every page change */}
      <motion.div
        key={page}
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className='mt-20 flex flex-wrap gap-7'
      >
        {currentProjects.map((project, index) => (
          <ProjectCard key={`project-${page}-${index}`}
          index={index}
          {...project}
          />
        ))}
      </motion.div>

      {totalPages > 1 && (
        <div className='mt-12 flex justify-center items-center gap-2 sm:gap-3 flex-wrap'>
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className='px-4 py-2 rounded-lg bg-tertiary text-secondary text-[14px] transition-colors hover:text-white disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:text-secondary'
          >
            Prev
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={`page-${i}`}
              onClick={() => setPage(i)}
              className={`w-10 h-10 rounded-full text-[14px] font-medium transition-colors ${
                i === page
                  ? 'bg-[#915eff] text-white'
                  : 'bg-tertiary text-secondary hover:text-white'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className='px-4 py-2 rounded-lg bg-tertiary text-secondary text-[14px] transition-colors hover:text-white disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:text-secondary'
          >
            Next
          </button>
        </div>
      )}

    </>
  )
}

export default SectionWrapper(Works, "");
