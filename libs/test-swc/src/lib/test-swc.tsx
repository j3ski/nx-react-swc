import styled from 'styled-components';

/* eslint-disable-next-line */
export interface TestSwcProps {}

const StyledTestSwc = styled.div`
  color: pink;
`;

export function TestSwc(props: TestSwcProps) {
  return (
    <StyledTestSwc>
      <h1>Welcome to TestSwc!</h1>
    </StyledTestSwc>
  );
}

export default TestSwc;
