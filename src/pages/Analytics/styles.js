import styled from "styled-components";
import background from "./assets/background.png"

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-rows: 8rem auto; 
  grid-template-areas: "header" "content";

  background-color: ${ ({ theme }) => theme.COLORS.DARK_SECUNDARIA};  
`;

export const Content = styled.div`
  grid-area: content;
  background-size: cover;
  background-image: url(${ background });

  
`;

export const ContentHeader = styled.div`
  width: min(90%, 144rem);
  margin: 5rem auto 2.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > button {
    padding: 1.2rem 2.3rem 1.2rem 1.6rem;
    color: ${ ({ theme }) => theme.COLORS.WHITE_900};
    border: 1px solid ${ ({ theme }) => theme.COLORS.WHITE_700};
    border-radius: .4rem;
    background: none;
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 1.6rem;
    cursor: pointer;
  }

`;

export const Title = styled.div`
  > button {
    cursor: pointer;
  }

  > button:first-child {
    background: none;

    font-size: 2.4rem;
    font-weight: 700;

    color: ${ ({ theme }) => theme.COLORS.PRINCIPAL};
    line-height: 120%;
    border: none;
    padding-right: 3.2rem;
  }

  > button:last-child {
    background: none;

    font-size: 2.4rem;
    font-weight: 700;

    color: ${ ({ theme }) => theme.COLORS.WHITE_500};
    line-height: 120%;
    border: none;
    border-left: 1px solid ${ ({ theme }) => theme.COLORS.WHITE_700};
    padding-left: 3.2rem;
  }

  @media(max-width: 450px) {
    font-size: 1.8rem;

  > button:first-child {
    padding-right: 1.6rem;
  }

  > button:last-child {
    padding-left: 1.6rem;
  }
    
  }
`;

export const Card = styled.div`
  width: min(90%, 144rem);
  margin: auto;

  display: grid;
  grid-template-rows: 14.4rem 38rem;
  grid-template-areas: "first-section" "second-section";
  row-gap: 2.8rem;

  @media(max-width: 1100px) {
    grid-template-rows: 30.4rem 38rem;
  }

  @media(max-width: 740px) {
    grid-template-rows: 30.4rem 77.6rem;
  }

  @media(max-width: 550px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FirstSection = styled.div`
  grid-area: first-section;

  display: grid;
  grid-template-columns: 1.82fr 1fr;
  grid-template-areas: "values-wrapper devices";
  column-gap: 1.6rem;

  border-radius: .8rem;

  @media(max-width: 1100px) {
    grid-template-columns: auto;
    grid-template-areas: "values-wrapper" "devices";
    grid-template-rows: auto auto;
    column-gap: 0;
    row-gap: 1.6rem;
  }

  @media(max-width: 550px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ValuesWrapper = styled.ul`
  grid-area: values-wrapper;
  border-radius: inherit;

  display: flex;
  gap: 1.6rem;

  @media(max-width: 550px) {
    flex-direction: column;
  }
`;

export const Value = styled.div`
  padding: 1.6rem 1.2rem;

  background-color: ${ ({ theme }) =>  theme.COLORS.DARK_300};

  border: 1px solid ${ ({ theme }) =>  theme.COLORS.DARK_500};
  border-radius: inherit;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex: 1;
`;

export const ValueDetails = styled.div`
  display: flex;
  gap: 1rem;

  > div.bar {
    width: 4px;
    border-radius: .4rem;
    background-color: ${ ({ theme }) =>  theme.COLORS.ACENTO_SECUNDARIA};
  }

  > div.content {
    width: 100%;
    padding: .8rem 0;
    display: flex;
    justify-content: space-between;
    
    .text {
      display: flex;
      gap: 2rem;
      flex-direction: column;

      line-height: 120%;

      font-family: "Montserrat", sans-serif;

      h2 {
        font-size: 1.6rem;
        font-weight: 600;
        color: ${ ({ theme }) =>  theme.COLORS.WHITE_300};
      }

      p {
        font-size: 2.8rem;
        font-weight: 600;
        color: ${ ({ theme }) =>  theme.COLORS.WHITE};        
      }

      span {
        font-weight: 600;
        font-size: 1.6rem;
        color: ${ ({ theme }) =>  theme.COLORS.WHITE_500};
      }
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 2.8rem;
      height: 2.8rem;

      
      border-radius: 50%;
      background-color: ${ ({ theme }) =>  theme.COLORS.SECUNDARIA_TERCIARIA};
      border: 1px solid ${ ({ theme }) =>  theme.COLORS.ACENTO_SECUNDARIA};
      border-bottom: 0;
    }

  }
`;


export const AdditionalInformation = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;
  > div {
    display: flex;
    gap: .4rem;

    h3 {
      font-size: 1.6rem;
      font-weight: 700;

      color: ${ ({ theme }) =>  theme.COLORS.PRINCIPAL};
      
      &.loss {
        color: ${ ({ theme }) =>  theme.COLORS.RED_SECONDARY};
      }
    }
  }

  > p {
    color: ${ ({ theme }) =>  theme.COLORS.WHITE_500};
    font-size: 1.4rem;
  }
`;

export const Devices = styled.div`
  grid-area: devices;
  background-color: ${ ({ theme }) =>  theme.COLORS.DARK_300};
  border-radius: inherit;

  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: space-between;

  padding: 2rem 1.2rem 1.2rem 1.6rem;

  > div.bar {
    height: .4rem;
    width: 7rem;

    border-radius: .4rem;
    background-color: ${ ({ theme }) =>  theme.COLORS.ACENTO_SECUNDARIA}
  }
`;

export const DevicesTop = styled.div`
  display: flex;
  justify-content: space-between;

  > h3 {
    color: ${ ({ theme }) =>  theme.COLORS.WHITE_200};
    font-size: 500;
    font-size: 1.8rem;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 2.8rem;
    height: 2.8rem;

    border-radius: 50%;
    background-color: ${ ({ theme }) =>  theme.COLORS.SECUNDARIA_TERCIARIA};
    border: 1px solid ${ ({ theme }) =>  theme.COLORS.ACENTO_SECUNDARIA};
    border-bottom: 0;
  }
`;

export const DeviceList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 2rem;
  justify-content: space-between;

`;

export const DeviceItem = styled.li`
  display: flex;
  justify-content: space-between;
  max-width: 50%;
  min-width: 50%;
  flex: 1;

  > div {
    display: flex;
    gap: .4rem;
    
    p {
      color: ${ ({ theme }) =>  theme.COLORS.WHITE};
      font-weight: 500;
    }
  }

  > p {
    font-size: 1.6rem;
    color: ${ ({ theme }) =>  theme.COLORS.WHITE};
  }

  &:nth-child(odd) {
    padding-right: 1.2rem;
  }

  &:nth-child(even) {
    padding-left: 1.2rem;
    border-left: 1px solid ${ ({ theme }) =>  theme.COLORS.DARK_1000};
  }
`;

export const SecondSection = styled.div`
  grid-area: second-section;

  display: grid;
  grid-template-columns: 1.82fr 1fr;
  grid-template-areas: "sales-details references";
  column-gap: 1.6rem;

  border-radius: .8rem;

  @media(max-width: 740px) {
    grid-template-columns: auto;
    grid-template-areas: "sales-details" "references";
    grid-template-rows: auto auto;
    column-gap: 0;
    row-gap: 1.6rem;
  }
`;

export const SalesDetails = styled.div`
  grid-area: sales-details;
  background-color: ${ ({ theme }) =>  theme.COLORS.DARK_300};

  border-radius: inherit;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1.6rem 1.2rem;
`;

export const SalesDetailsTop = styled.h2`
  color: ${ ({ theme }) =>  theme.COLORS.WHITE_300};
  font-family: "Montserrat", sans-serif;
`;

export const References = styled.div`
  background-color: ${ ({ theme }) =>  theme.COLORS.DARK_300};
  border: 1px solid ${ ({ theme }) =>  theme.COLORS.DARK_500};

  grid-area: references;

  display: flex;
  flex-direction: column;
  gap: 2.8rem;

  border-radius: inherit;
`;

export const ReferencesTop = styled.h2`
  color: ${ ({ theme }) =>  theme.COLORS.WHITE_300};
  padding: 1.6rem 1.2rem 0;
  font-family: "Montserrat", sans-serif;
`;

export const SocialNetworkTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const TableHeader = styled.thead`

`;

export const TableRow = styled.tr`
`;

export const TableHeaderItem = styled.th`
  color: ${ ({ theme }) =>  theme.COLORS.WHITE_300};

  line-height: 110%;
  font-weight: 500;
  font-size: 1.6rem;

  &:first-child {
    text-align: left;
    padding-left: 1.2rem;
  }

  &:last-child {
    width: 8rem;
    padding-right: 1.2rem;
  }
`;

export const TableBody = styled.tbody`
`;

export const TableBodyItem = styled.td`
  color: ${ ({ theme }) =>  theme.COLORS.WHITE};
  font-size: 1.6rem;
  font-weight: 500;

  border-bottom: 1px solid ${ ({ theme }) =>  theme.COLORS.DARK_500};
  padding: 1.2rem 0;

  &:first-child {
    display: flex;
    align-items: center;
    gap: .4rem;
    padding-left: 1.2rem;

  }

  &:last-child {
    text-align: center;
    padding-right: 1.2rem;
  }
`;


export const DetailedStatement = styled.div`
  width: min(90%, 144rem);
  padding: 1.6rem;
  margin: 2.8rem auto 0;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  background-color: ${ ({ theme }) =>  theme.COLORS.DARK_300};
  border: 1px solid ${ ({ theme }) =>  theme.COLORS.DARK_500};
  border-radius: .8rem;
`;

export const DetailedStatementTop = styled.h2`
  color: ${ ({ theme }) =>  theme.COLORS.WHITE_300};
  font-family: "Montserrat", sans-serif;
`;

export const ShortCuts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 740px) {
    align-items: start;
    flex-direction: column;
    gap: 1.6rem;
  }
`;

export const FilterEntries = styled.div`
  display: flex;
  align-items: center;
  gap: .8rem;

  > input {
    text-align: center;
    width: 6.6rem;
    padding: .8rem 0;

    color: ${ ({ theme }) =>  theme.COLORS.WHITE};

    background: none;
    outline: none;
    border: 1px solid ${ ({ theme }) =>  theme.COLORS.WHITE_900};
    border-radius: .8rem;
  }

  > span {
    font-size: 1.6rem;
    color: ${ ({ theme }) =>  theme.COLORS.WHITE_500};
  }
`;

export const SearchByName = styled.div`
  border: 1px solid ${ ({ theme }) =>  theme.COLORS.WHITE_900};
  border-radius: .4em;
  display: flex;
  align-items: center;
  gap: .8rem;
  padding: .8rem 1.2rem;


  > input {
    background: none;
    outline: none;
    border: none;
    width: 34rem;

    &, &::placeholder {
      font-size: 1.6rem;
      color: ${ ({ theme }) =>  theme.COLORS.WHITE_500};

    }
  }

  @media(max-width: 740px) {
    width: 100%;
    > input {
      width: 100%;
    }
  }
`;

export const DetailedStatementTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const DetailedStatementTableHeaderItem = styled.th`
  color: ${ ({ theme }) =>  theme.COLORS.WHITE_300};
  border-top: 1px solid ${ ({ theme }) =>  theme.COLORS.DARK_500};
  border-bottom: 1px solid ${ ({ theme }) =>  theme.COLORS.DARK_500};

  line-height: 110%;
  font-weight: 400;
  font-size: 1.6rem;

  padding: 1.2rem 0;

  &:first-child {
    text-align: left;
  }

  @media(max-width: 1000px) {
    font-size: 1.4rem;

    &.first-to-disappear {
      display: none;
    }
  }

  @media(max-width: 800px) {
    &.second-to-disappear {
      display: none;
    }
  }

  @media(max-width: 550px) {
    font-size: 1.2rem;
    
    &.third-to-disappear {
      display: none;
    }
  }
`;

export const DetailedStatementTableBodyItem = styled.td`
  padding: 2.2rem 0;
  text-align: center;

  word-break: break-all;
  word-wrap: break-word;
  white-space: break-spaces;
  
  position: relative;

  line-height: 110%;

  color: ${ ({ theme }) =>  theme.COLORS.WHITE};
  font-weight: 500;

  &.entry {
    color: ${ ({ theme }) =>  theme.COLORS.GREEN_PRINCIPAL};
  }
  
  &.output {
    color: ${ ({ theme }) =>  theme.COLORS.RED_SECONDARY};
  }
  
  &:first-child {
    text-align: left;
  }

  &:last-child {
    > div.action {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(-50%, -50%);

      cursor: pointer;
    }
  }
  
  > span {
    padding: .8rem;
    border-radius: 1.2rem;
    border: 1px solid transparent;
    
    &.approved {
      color: ${ ({ theme }) =>  theme.COLORS.GREEN_PRINCIPAL};
      border-color: ${ ({ theme }) =>  theme.COLORS.ACENTO};
      background-color: ${ ({ theme }) =>  theme.COLORS.DARK_PRINCIPAL};
    }

    &.rejected {
      color: ${ ({ theme }) =>  theme.COLORS.RED_SECONDARY};
      border-color: ${ ({ theme }) =>  theme.COLORS.RED_SECONDARY};
      background-color: ${ ({ theme }) =>  theme.COLORS.RED_DARK};
    }
    
    &.pending {
      color: ${ ({ theme }) =>  theme.COLORS.YELLOW};
      border-color: ${ ({ theme }) =>  theme.COLORS.YELLOW_SEMI_DARK};
      background-color: ${ ({ theme }) =>  theme.COLORS.YELLOW_DARK};
    }
  }

  @media(max-width: 1000px) {
    font-size: 1.4rem;
    font-weight: 400;

    &.first-to-disappear {
      display: none;
    }
  }

  @media(max-width: 800px) {
    &.second-to-disappear {
      display: none;
    }
  }
  
  @media(max-width: 550px) {
    font-size: 1.2rem;

    &.third-to-disappear {
      display: none;
    }
  }

`;