import styled from "styled-components";

export const Container =  styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  > button {
    color: ${ ({ theme }) => theme.COLORS.WHITE_900};
    background: none;
    font-size: 1.6rem;

    display: flex;
    align-items: center;
    gap: .2rem;
    padding: 1.2rem;

    border: 1px solid ${ ({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 4px;

    cursor: pointer;
  }

  @media(max-width: 360px) {
    > button {
      display: none;
    }
  }

`;