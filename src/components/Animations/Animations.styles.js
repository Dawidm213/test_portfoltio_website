import styled from 'styled-components';
import { motion } from "framer-motion";

export const Container = styled.div`
    width: 60%;
    background-color: white;
    z-index: 1000;
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0px 10px 25px -7px rgba(66, 68, 90, 1);
    @media only screen and (max-width: 1300px) {
        flex-direction: column;
    }
    @media only screen and (max-height: 825px) {
        flex-direction: column;
    }
`
export const Wrapper = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8rem;
`