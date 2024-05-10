import { Header } from "../../components/Header";
import { AdditionalInformation, Card, Container, Content, ContentHeader, DetailedStatement, DetailedStatementTable, DetailedStatementTableBodyItem, DetailedStatementTableHeaderItem, DetailedStatementTop, DeviceItem, DeviceList, Devices, DevicesTop, FilterEntries, FirstSection, References, ReferencesTop, SalesDetails, SalesDetailsTop, SearchByName, SecondSection, ShortCuts, SocialNetworkTable, TableBody, TableBodyItem, TableHeader, TableHeaderItem, TableRow, Title, Value, ValueDetails, ValuesWrapper } from "./styles";

import arrowIcon from "./assets/arrow.png"
import mouseIcon from "./assets/mouse.png"
import trendUpIcon from "./assets/trend-up-01.png"
import trendDownIcon from "./assets/trend-down-01.png"
import userAddIcon from "./assets/user-add.png"

import devicesIcon from "./assets/devices.png"
import mobileIcon from "./assets/mobile.png"
import computerIcon from "./assets/computer.png"
import laptopIcon from "./assets/laptop.png"

import instagramIcon from "./assets/instagram.png"
import xIcon from "./assets/X.png"
import facebookIcon from "./assets/facebook.png"
import youtubeIcon from "./assets/youtube.png"
import siteIcon from "./assets/site.png"

import searchIcon from "./assets/search.png"

import actionIcon from "./assets/menu-circle-vertical 01.png"

import Chart from "react-apexcharts"
import theme from "../../styles/theme";

export function Analytics () {
  const options = {
    chart: {
      height: 280,
      width: "100%",
      type: "line"
    },
    stroke: {
      curve: 'straight'
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 1,
        gradientToColors: ['#1D2024'],
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.15,
        stops: [0, 100],
      }
    },
    colors: [theme.COLORS.PRINCIPAL],
    xaxis: {
      categories: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez",
      ]
    },
    yaxis: {
      min: 2000,
      max: 20000,
    }    
  }
  
  const series = [
    {
      name: "Series 1",
      data: [2000, 3000, 7000, 7500, 3300, 7700, 16000, 7700, 13900, 9000, 10000]
    }
  ]


  return (
    <Container>
      <Header>
        
      </Header>

      <Content>
        <ContentHeader>
          <Title>
            <button>
              Analytics
            </button>
            <button>
              Leads
            </button>
          </Title>

          <button>
            1 mês

            <img src={arrowIcon} alt="" />
          </button>

        </ContentHeader>

        <Card>
          <FirstSection>
            <ValuesWrapper>
              <Value>
                <ValueDetails>
                  <div className="bar"></div>
                  <div className="content">
                    <div className="text">
                      <h2>Total de acesso</h2>
                      <p><span>R$</span>1.234</p>
                    </div>

                    <div className="icon">
                      <img src={mouseIcon} alt="" />

                    </div>

                  </div>
                </ValueDetails>

                <AdditionalInformation>
                  <div>
                    <img src={trendUpIcon} alt="" />
                    <h3>+6,3%</h3>
                  </div>
                  <p>Última semana</p>
                </AdditionalInformation>

              </Value>
              <Value>
                <ValueDetails>
                  <div className="bar"></div>
                  <div className="content">
                    <div className="text">
                      <h2>Cliques no total</h2>
                      <p>3.182</p>
                    </div>

                    <div className="icon">
                      <img src={mouseIcon} alt="" />

                    </div>

                  </div>
                </ValueDetails>

                <AdditionalInformation>
                  <div>
                    <img src={trendDownIcon} alt="" />
                    <h3 className="loss">+6,3%</h3>
                  </div>
                  <p>Última semana</p>
                </AdditionalInformation>

              </Value>

              <Value>
                <ValueDetails>
                  <div className="bar"></div>
                  <div className="content">
                    <div className="text">
                      <h2>Cadastros</h2>
                      <p>2.520</p>
                    </div>

                    <div className="icon">
                      <img src={userAddIcon} alt="" />
                    </div>

                  </div>
                </ValueDetails>

                <AdditionalInformation>
                  <div>
                    <img src={trendUpIcon} alt="" />
                    <h3>+6,3%</h3>
                  </div>
                  <p>Última semana</p>
                </AdditionalInformation>

              </Value>

            </ValuesWrapper>

            <Devices>
              <DevicesTop>
                <h3>Dispositivos</h3>
                <div>
                  <img src={devicesIcon} alt="" />
                </div>
              </DevicesTop>

              <DeviceList>
                <DeviceItem>
                  <div>
                    <img src={computerIcon} alt="" />
                    <p>Desktop</p>
                  </div>
                  <p>230</p>
                </DeviceItem>
                <DeviceItem>
                  <div>
                    <img src={mobileIcon} alt="" />
                    <p>Desktop</p>
                  </div>
                  <p>320</p>
                </DeviceItem>
                <DeviceItem>
                  <div>
                    <img src={mobileIcon} alt="" />
                    <p>Desktop</p>
                  </div>
                  <p>27</p>
                </DeviceItem>
                <DeviceItem>
                  <div>
                    <img src={laptopIcon} alt="" />
                    <p>Desktop</p>
                  </div>
                  <p>218</p>
                </DeviceItem>
              </DeviceList>

              <div className="bar"></div>

            </Devices>
          </FirstSection>

          <SecondSection>
            <SalesDetails>
              <SalesDetailsTop>
                Vendas detalhadas
              </SalesDetailsTop>

              <Chart
                options={options}
                series={series}
                type="area" 
                height={250}
              />
            </SalesDetails>

            <References>
              <ReferencesTop>
                Referencias
              </ReferencesTop>

              <SocialNetworkTable>
                <TableHeader>
                  <TableRow>
                    <TableHeaderItem>
                      Links
                    </TableHeaderItem>
                    <TableHeaderItem>
                      Acessos
                    </TableHeaderItem>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  <TableRow>
                    <TableBodyItem>
                      <img src={instagramIcon} alt="" />
                      <p>Instagram</p>
                      
                    </TableBodyItem>

                    <TableBodyItem>
                      100
                    </TableBodyItem>
                  </TableRow>

                  <TableRow>
                    <TableBodyItem>
                      <img src={xIcon} alt="" />
                      <p>Twitter</p>
                      
                    </TableBodyItem>

                    <TableBodyItem>
                      12
                    </TableBodyItem>
                  </TableRow>
                  <TableRow>
                    <TableBodyItem>
                      <img src={facebookIcon} alt="" />
                      <p>Facebook</p>
                      
                    </TableBodyItem>

                    <TableBodyItem>
                      42
                    </TableBodyItem>
                  </TableRow>
                  <TableRow>
                    <TableBodyItem>
                      <img src={siteIcon} alt="" />
                      <p>Site</p>
                      
                    </TableBodyItem>

                    <TableBodyItem>
                      645
                    </TableBodyItem>
                  </TableRow>
                  <TableRow>
                    <TableBodyItem>
                      <img src={youtubeIcon} alt="" />
                      <p>Youtube</p>
                      
                    </TableBodyItem>

                    <TableBodyItem>
                      120
                    </TableBodyItem>
                  </TableRow>
                </TableBody>



              </SocialNetworkTable>

            </References>
          </SecondSection>
        </Card>

        <DetailedStatement>
          <DetailedStatementTop>
            Extrato detalhado
          </DetailedStatementTop>

          <ShortCuts>
            <FilterEntries>
              <span>Mostrar</span>
              <input type="text" value={50}/>
              <span>Entradas</span>

            </FilterEntries>

            <SearchByName>
              <img src={searchIcon} alt="" />
              <input type="text" placeholder="Pesquise aqui"/>

            </SearchByName>
          </ShortCuts>

          <DetailedStatementTable>
            <TableHeader>
              <TableRow
                className="detailed-statement"
              >
                <DetailedStatementTableHeaderItem>
                  ID
                </DetailedStatementTableHeaderItem>
                <DetailedStatementTableHeaderItem
                  className="second-to-disappear"
                >
                  Data criação
                </DetailedStatementTableHeaderItem>
                <DetailedStatementTableHeaderItem
                  className="second-to-disappear"
                >
                  Data aprovação
                </DetailedStatementTableHeaderItem>
                <DetailedStatementTableHeaderItem>
                  Tipo
                </DetailedStatementTableHeaderItem>
                <DetailedStatementTableHeaderItem
                  className="first-to-disappear"
                >
                  Descrição
                </DetailedStatementTableHeaderItem>
                <DetailedStatementTableHeaderItem
                  className="third-to-disappear"
                >
                  Produto
                </DetailedStatementTableHeaderItem>
                <DetailedStatementTableHeaderItem>
                  Valor
                </DetailedStatementTableHeaderItem>
                <DetailedStatementTableHeaderItem
                  className="third-to-disappear"
                >
                  Status
                </DetailedStatementTableHeaderItem>
                <DetailedStatementTableHeaderItem>
                  Forma de pagamento
                </DetailedStatementTableHeaderItem>
              </TableRow>

            </TableHeader>

            <TableBody>
              <TableRow
                className="detailed-statement"
              >
                <DetailedStatementTableBodyItem>
                  #481
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="second-to-disappear"
                >
                  02/06/2024
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="second-to-disappear"
                >
                  02/06/2024
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="entry"
                >
                  Entrada
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="first-to-disappear"
                >
                  Roupa 336
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="third-to-disappear"                  
                >
                  Roupa 336
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem>
                  R$ 182,90
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="third-to-disappear"                  
                >
                  <span
                    className="approved"
                  >
                    Aprovado
                  </span>
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem>
                  PIX
                  <div className="action">
                    <img src={actionIcon} alt="" />
                  </div>
                </DetailedStatementTableBodyItem>

              </TableRow>
              <TableRow
                className="detailed-statement"
              >
                <DetailedStatementTableBodyItem>
                  #481
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="second-to-disappear"
                >
                  02/06/2024
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="second-to-disappear"
                >
                  02/06/2024
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="output"
                >
                  Saída
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="first-to-disappear"
                >
                  Roupa 336
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="third-to-disappear"
                >
                  Roupa 336
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem>
                  R$ 182,90
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="third-to-disappear"
                >
                  <span
                    className="rejected"
                  >
                    Rejeitado
                  </span>
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem>
                  PIX
                  <div className="action">
                    <img src={actionIcon} alt="" />
                  </div>
                </DetailedStatementTableBodyItem>

              </TableRow>
              <TableRow
                className="detailed-statement"
              >
                <DetailedStatementTableBodyItem>
                  #481
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="second-to-disappear"
                >
                  02/06/2024
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="second-to-disappear"
                >
                  02/06/2024
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="output"
                >
                  Saída
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="first-to-disappear"
                >
                  Roupa 336
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="third-to-disappear"
                >
                  Roupa 336
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem>
                  R$ 182,90
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="third-to-disappear"
                >
                  <span
                    className="rejected"
                  >
                    Rejeitado
                  </span>
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem>
                  PIX
                  <div className="action">
                    <img src={actionIcon} alt="" />
                  </div>
                </DetailedStatementTableBodyItem>

              </TableRow>
              <TableRow
                className="detailed-statement"
              >
                <DetailedStatementTableBodyItem>
                  #481
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="second-to-disappear"
                >
                  02/06/2024
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="second-to-disappear"
                >
                  02/06/2024
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="output"
                >
                  Saída
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="first-to-disappear"
                >
                  Roupa 336
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="third-to-disappear"
                >
                  Roupa 336
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem>
                  R$ 182,90
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="third-to-disappear"
                >
                  <span
                    className="pending"
                  >
                    Pendente
                  </span>
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem>
                  PIX
                  <div className="action">
                    <img src={actionIcon} alt="" />
                  </div>
                </DetailedStatementTableBodyItem>
                

              </TableRow>
              <TableRow
                className="detailed-statement"
              >
                <DetailedStatementTableBodyItem>
                  #481
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="second-to-disappear"
                >
                  02/06/2024
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="second-to-disappear"
                >
                  02/06/2024
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="entry"
                >
                  Entrada
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="first-to-disappear"
                >
                  Roupa 336
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="third-to-disappear"
                >
                  Roupa 336
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem>
                  R$ 182,90
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="third-to-disappear"
                >
                  <span
                    className="pending"
                  >
                    Pendente
                  </span>
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem>
                  PIX
                  <div className="action">
                    <img src={actionIcon} alt="" />
                  </div>
                </DetailedStatementTableBodyItem>

              </TableRow>
              <TableRow>
                <DetailedStatementTableBodyItem>
                  #481
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="second-to-disappear"
                >
                  02/06/2024
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="second-to-disappear"
                >
                  02/06/2024
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="entry"
                >
                  Entrada
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="first-to-disappear"
                >
                  Roupa 336
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="third-to-disappear"
                >
                  Roupa 336
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem>
                  R$ 182,90
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem
                  className="third-to-disappear"
                >
                  <span
                    className="pending"
                  >
                    Pendente
                  </span>
                </DetailedStatementTableBodyItem>
                <DetailedStatementTableBodyItem>
                  PIX
                  <div className="action">
                    <img src={actionIcon} alt="" />
                  </div>
                </DetailedStatementTableBodyItem>

              </TableRow>

            </TableBody>
          </DetailedStatementTable>

        </DetailedStatement>

      </Content>

    </Container>
  )
}