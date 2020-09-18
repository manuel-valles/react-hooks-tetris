import styled from 'styled-components';

import background from '../../img/background.jpg';

const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${background}) #000;
  background-size: cover;
  overflow: hidden;
`;

const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 30px;
  margin: 0 auto;
  max-width: 700px;

  aside {
    width: 100%;
    max-width: 100px;
    display: block;
    padding: 0 10px;
  }
`;

export { StyledTetrisWrapper, StyledTetris };
