import React from 'react';
import {FormContainer, FormHeading, FormBlock, Input, FormSub, SubmitButton} from './StyledComponents'


const Form = () => {
  return (
    <div style={{display: "flex", justifyContent: "center", marginTop: "3em"}}>
    <FormContainer>
    <FormSub>STAY UPDATED</FormSub>
    <FormHeading>Newsletter</FormHeading>
      <FormBlock>
          <Input placeholder="Full Name"></Input>
      </FormBlock>
      <FormBlock>
          <Input placeholder="Company Name"></Input>
      </FormBlock>
      <FormBlock>
          <Input placeholder="Email Address"></Input>
      </FormBlock>
      <FormBlock>
          <SubmitButton>Submit</SubmitButton>
      </FormBlock>
    </FormContainer>
    </div>
  )
}

export default Form