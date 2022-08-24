import React from 'react';

import { Container, Wrapper, Image, Textboxes, Introduscion, Description, Icons, SocialButtons } from './Main.styles';

import { motion } from "framer-motion";

const Main = ({ image, icon1, icon2, icon3, icon4, fc, tw, ins }) => (
    <Wrapper
    >
        <Container>
            <Image src={image} />
            <Textboxes>
                <Introduscion>
                    <m>HELLO EVERYBODY, I AM</m>
                    <h1>Simeon Gilbert</h1>
                    <p>JUNIOR UI/UX DEVELOPER</p>
                </Introduscion>
                <Description>
                    <p>You will begin to realise why this exerciese is called the Dickens Pattern 
                    (with the referances to the ghost showing Scooge some different futures)</p>
                </Description>
                <Icons>
                    <p><img src={icon1} alt='No'/>31st December, 1992</p>
                    <p><img src={icon2} alt='No' />44 (012) 6954 783</p>
                    <p><img src={icon3} alt='No' />businessplan@donald</p>
                    <p><img src={icon4} alt='No' />Santa monica bullevard</p>
                </Icons>
                <SocialButtons>
                    <a href="https://pl-pl.facebook.com/"><img src={fc} alt='Fc'/></a>
                    <a href="https://twitter.com/?lang=pl"><img src={tw} alt='Tw'/></a>
                    <a href="https://www.instagram.com/"><img src={ins} alt='In'/></a>
                </SocialButtons>
            </Textboxes>
        </Container>
    </Wrapper>
);

export default Main;