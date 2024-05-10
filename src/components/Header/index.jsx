import { Brand } from "../Brand";
import { Container, Content, Menu, MenuItem, Navigation, TryNow } from "./styles";

import sendFastIcon from "./assets/send-fast.png"
import gmailIcon from "./assets/gmail.png"
import avatar from "./assets/avatar.png"

import { RiMenu3Fill } from "react-icons/ri";

export function Header () {
  return (
    <Container>
      <Content>
        <Brand />

        <Navigation>
          <Menu>
            <MenuItem>
              Home
              <div></div>
            </MenuItem>
            <MenuItem
              className="selected"
            >
              Painéis

              <div></div>
            </MenuItem>
            <MenuItem>
              Marketplace
              <div></div>
            </MenuItem>
            <MenuItem>
              Dados
              <div></div>
            </MenuItem>
          </Menu>

        </Navigation>

        <TryNow>
          <button
            className="try"
          >
            <img src={sendFastIcon} alt="" />
            Experimente o plano Pro
          </button>

          <button
            className="mail"
          >
            <img src={gmailIcon} alt="" />
          </button>

          <button
            className="user"
          >
            <img src={avatar} alt="" />
          </button>


        </TryNow>

        <RiMenu3Fill
          size={30}
        />
      </Content>
    </Container>
  )
}