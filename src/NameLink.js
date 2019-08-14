import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Link = styled.a`
  display: inline-block;
  font-family: ${props => props.theme.fontFamily.helvetica};
  font-weight: ${props => props.theme.fontWeight.bold};
  font-size: ${props => props.theme.fontSize.xsmall};
  color: ${props => props.theme.color.default};
  margin-top: 24px;
  margin-bottom: 24px;
`;

export default function NameLink({ lastName }) {
  if (!lastName) return null;

  // TODO: Populate the link once the professor page exists
  return <Link href="/#">I&apos;m Professor {lastName}</Link>;
}

NameLink.propTypes = {
  lastName: PropTypes.string
};
