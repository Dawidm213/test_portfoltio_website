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
    margin-top: 4rem;
`
export const Image = styled.img`
    height: 700px;
    border-radius: 20px;
    margin: 2rem 0;
    @media only screen and (max-width: 1300px) {
        height: 400px;
    }
    @media only screen and (max-height: 825px) {
        height: 400px;
    }
`
export const Textboxes = styled.div`
    display: flex;
    max-width: 30%;
    flex-direction: column;
    @media only screen and (max-width: 1300px) {
        max-width: 50%;
    }
    @media only screen and (max-height: 825px) {
        max-width: 50%;
    }
`
export const Introduscion = styled.div`
    font-family: Arial;
    p{
        font-weight: bold;
    }
    h1{
        font-size: 50px;
        margin: 0;
    }
    m{
        font-weight: 600;
        color: 	#585858;
    }
`
export const Description = styled.div`
    color: grey;
    line-height: 1.6;
    p{
        margin-top: 0;
    }
`
export const Icons = styled.div`
    display: flex;
    flex-direction: column;
    color: grey;
    p{
        display: flex;
        align-items: flex-start;
    }

    img{
        height: 32px;
        width: 32px;
        margin-right: 1rem;
    }
`
export const SocialButtons = styled.div`
    img{
        width: 48px;
        height: 48px;
        margin: 1rem .5rem;
    }
`