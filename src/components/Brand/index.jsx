import { Container } from "./styles";
import logo from "./assets/logo.png"

import { IoIosArrowForward } from "react-icons/io";

export function Brand () {
  return (
    <Container>
      <img src={logo} alt="" />

      <button>
        Taua Cordel

        <IoIosArrowForward 
          size={20}
        />
      </button>

    </Container>
  )
}