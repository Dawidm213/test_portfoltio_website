import styled from "styled-components";

export const Container = styled.div`
    height: 100px;
    width: 100%;
    background-color: transparent;
    font-family: Arial;
    color: white;
    font-weight: bold;
    font-size: 15px;
    display: flex;
    justify-content: space-around;

    a {
        color: white;
        text-decoration: none; /* no underline */
    }

    li a:hover{
        color: black;
    }
    h1{
        margin: 2rem 1rem;
    }
    ul{
        list-style: none;
        display: flex;
    }
    li{
        margin: 1.5rem 1rem;
        cursor: pointer;
    }
`