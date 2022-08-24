import styled from 'styled-components';


export const Wrapper = styled.footer`
    width: 100%;
    position: fixed;
    bottom: 0;
    right: 0;
    @media only screen and (max-height: 825px) {
        width: 0;
    }
    @media only screen and (max-width: 1300px) {
        width: 0;
    }
`


export const Container = styled.div`
    height: 25vh;
    background-color: white;
    box-shadow: -1px -2px 25px -5px rgba(66, 68, 90, 1);
`