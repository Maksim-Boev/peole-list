import styled, { css } from "styled-components";

type Props = { page: boolean };

export const NumberPages = styled.div<Props>`
  padding: 10px;
  ${({ page }) =>
    page
      ? css`
          border: 2px solid green;
        `
      : css`
          border: 1px solid gray;
        `}
`;

export const Wraper = styled.div`
  display: flex;
`;
