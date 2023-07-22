import { useState, useContext } from "react";
import useMedia from "use-media";
import { userData } from "@/utils/userData";
import {BsSun} from "react-icons/bs"

import {
  Navbar as NavbarWrapper,
  LogoTipo,
  LogoTipoText,
  NavbarLinks,
  NavbarMobileArea,
} from "./style";

import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Button } from "@/styles/Buttons";
import { Container, Flex } from "@/styles/Global";
import { ThemeContext } from "../../provider/ThemeProvider";

export interface MenuButtonOpen {
  open: Boolean;
  setOpen: (value: Boolean) => void;
}

export const NavBar = (): JSX.Element => {

  const isWide = useMedia({ maxWidth: "991px" });

  document.title = userData.nameUser;

  const [open, setOpen] = useState(false);

  const OpenMenu = () => {
    setOpen(!open);
  };

  return (
    <NavbarWrapper>
      <Container>
        <NavbarMobileArea>
          <LogoTipo>
            <LogoTipoText>{userData.nameUser}</LogoTipoText>
          </LogoTipo>
          {isWide && (
            <Button
              type="icon"
              onClick={OpenMenu}
              aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
            >
              {!open ? <FaBars /> : <IoClose />}
            </Button>
          )}
        </NavbarMobileArea>
        <Flex>
          {isWide ? open && <NavLinks /> : <NavLinks />}
        </Flex>
      </Container>
    </NavbarWrapper>
  );
};

export const NavLinks = (): JSX.Element => {

  const { setNewTheme, mode, theme } = useContext(ThemeContext)

  return (
    <NavbarLinks>
      <Button type="btLink" as="a" color="grey4" href={`#home`}>
        Home
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#quem-sou`}>
        Quem sou
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#projects`}>
        Projetos
      </Button>
      <Button type="btLink" as="a" color="grey4" href={`#contact`}>
        Contato
      </Button>   
      <Button type="btLink" as="a" color="grey4" href={`#social-media`}>
        Social Media
      </Button>    
     { mode.name.light.value === "dark" ? <BsSun style={{color: "#fff", cursor: "pointer"}} onClick={setNewTheme}/> : <BsSun style={{cursor: "pointer"}} onClick={setNewTheme}/>}
    </NavbarLinks>
  );
};
