import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext, LayoutContext, units, styles } from "../../context";

export const Header2 = (props) => {
  const { theme } = useContext(ThemeContext);
  const { layout } = useContext(LayoutContext);
  return (
    <Header2Div
      style={{
        fontSize: layout.fontSize.h2,
        maxWidth: layout.width.header,
        color: theme.primary,
      }}
    >
      {props.text}
    </Header2Div>
  );
};

Header2.defaultProps = {
  text: "default text",
};

const Header2Div = styled.h2`
  // animation
  transition: ${styles.transition.bodyALL};

  // flexbox
  display: flex;
  align-items: center;
  justify-content: center;

  // box model
  margin: auto;
  border-radius: ${styles.borderRadius.header};
  width: 100%;
  padding-bottom: ${units.px0};

  // typography
  font-family: ${styles.fontFamily.sansSerif};
  text-align: center;
`;
