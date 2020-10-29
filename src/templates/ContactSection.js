import React from 'react'
import styled from 'styled-components'


const ContactSectionWrapper = styled.section`
  grid-column:2 /span 2;
  padding:3rem 0;

`;

const ContactSection = () => {


  return (
    <ContactSectionWrapper id="contact">
      <h2>Kontakt</h2>
    </ContactSectionWrapper>
  )
}

export default ContactSection;