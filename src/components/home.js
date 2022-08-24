import React from 'react';

//Components
import Footer from './Footer';
import Main from './Main';

//Images
import Person from '../Images/random_person.jpg';
import Callender from '../Icons/Callender.png';
import House from '../Icons/House.png';
import Mail from '../Icons/Mail.png';
import Phone from '../Icons/Phone.png';
import Facebook from '../Icons/Facebook.png';
import Twitter from '../Icons/Twitter.png';
import In from '../Icons/In.png';

import { motion } from "framer-motion"

const Home = () => {
    
    return (
        <>
        <motion.div 
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        transition={{ delay: .1 }}
        exit={{ opacity: 0 }}
        >
            
            <Main 
            image={Person}
            icon1={Callender}
            icon2={House}
            icon3={Mail}
            icon4={Phone}
            fc={Facebook}
            tw={Twitter}
            ins={In}
            />
            
        </motion.div>
        
        </>
    )
};

export default Home;