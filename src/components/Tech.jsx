import { motion } from 'framer-motion';

import { BallCanvas } from './canvas';
import { styles } from '../style';
import { technologies, automationTesting, devTools } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const TechCard = ({ index, category, list }) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className='bg-black-200 p-10 rounded-3xl lg:w-[320px] w-full'
    >
      <p className='text-white font-bold text-[32px] text-center mb-4'>{category}</p>

      <div className='mt-1 flex lg:flex-col flex-wrap items-center gap-5'>
        {list.map((t, index) => (<>
          {/* <p className='text-white tracking-wider text-[18px]'>- {t.name}</p> */}
          <img src={t.icon} alt={t.name} className='h-20 w-20' title={t.name} />
        </>
        ))}
      </div>
    </motion.div>
  )
}

const Tech = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Technical Skills</h2>
        </motion.div>
      </div>
      <div className={`${styles.padding} -mt-24`}>
        <div className={`${styles.padding} -mt-24 pb-12 flex flex-col lg:flex-row gap-7`}>
          {technologies.map((category, index) => (
            <TechCard key={index} {...category} />
          ))}
        </div>

        <p className={`${styles.sectionSubText} my-8`}>Automation Testing</p>
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {automationTesting.map((tool, index) => (
            <div key={index} className='w-28 h-28'>
              <BallCanvas icon={tool.icon} />
            </div>
          ))}
        </div>

        <p className={`${styles.sectionSubText} my-8`}>Development Tools</p>
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {devTools.map((tool, index) => (
            <div key={index} className='w-28 h-28'>
              <BallCanvas icon={tool.icon} />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default SectionWrapper(Tech, "");