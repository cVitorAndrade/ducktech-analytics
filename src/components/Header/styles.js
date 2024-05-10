import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${ ({ theme }) => theme.COLORS.DARK_SECUNDARIA};
`;

export const Content = styled.div`
  width: min(90%, 144rem);

  display: flex;
  align-items: center;
  justify-content: space-between;

  > svg {
    display: none;
    color: ${ ({ theme }) => theme.COLORS.PRINCIPAL};
  }
  @media(max-width: 1100px) {
    > svg {
      display: block;
    }
  }
`;

export const Navigation = styled.nav`
  @media(max-width: 1100px) {
    display: none;
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 3.2rem;

`;

export const MenuItem = styled.li`
  font-size: 1.6rem;
  font-weight: 500;

  color: ${ ({ theme }) => theme.COLORS.WHITE_500};

  position: relative;
  padding-bottom: .4rem;

  cursor: pointer;

  > div {
    transition: all ease-in-out;
  }


  &.selected {
    color: ${ ({ theme }) => theme.COLORS.PRINCIPAL};

    > div {
      position: absolute;
      top: 100%;
      width: 3.8rem;
      height: 3px;
      background-color: ${ ({ theme }) => theme.COLORS.PRINCIPAL};
      border-radius:.4rem;
    }
  }
  
  &:hover {
    color: ${ ({ theme }) => theme.COLORS.PRINCIPAL};

    > div {
      animation: showBar .3s;
      position: absolute;
      top: 100%;
      width: 3.8rem;
      height: 3px;
      background-color: ${ ({ theme }) => theme.COLORS.PRINCIPAL};
      border-radius:.4rem;
    }
  }


  @keyframes showBar {
    from {
      width: 0;
    }
    to {
      width: 3.8rem;
    }
  }

`;

export const TryNow = styled.div`
  display: flex;
  gap: 1.2rem;

  button {
    cursor: pointer;
  }

  > button.try {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 1.2rem;
    background-color: ${ ({ theme }) => theme.COLORS.PRINCIPAL};
    color: ${ ({ theme }) => theme.COLORS.DARK_PRINCIPAL};
    border-radius: .4rem;

    border: none;

    font-size: 1.6rem;
    font-weight: 700; 

    transition: filter .3s ease-in-out;

    &:hover {
      filter: brightness(.9);
    }
  }

  > button.mail {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 50%;
    padding: 1.2rem;
    background-color: ${ ({ theme }) => theme.COLORS.DARK_400};
    color: ${ ({ theme }) => theme.COLORS.DARK_400};
    border: 1px solid ${ ({ theme }) => theme.COLORS.DARK_500};
  }

  > button.user {
    border-radius: 50%;
    border: none;
    width: 4.4rem;
    height: 4.4rem;
  }

  @media(max-width: 1100px) {
    display: none;
  }
`;