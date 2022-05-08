import React from 'react';
import styled from 'styled-components';

const Label = ({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
};

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;

  font-size: 12px;
  line-height: 14px;
  color: #525252;

  .name-length {
    float: right;
  }
`;

export default Label;
