import { render } from '@testing-library/react';

import TestSwc from './test-swc';

describe('TestSwc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestSwc />);
    expect(baseElement).toBeTruthy();
  });
});
