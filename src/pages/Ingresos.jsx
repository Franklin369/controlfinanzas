import { Datosuser } from "../components/Datosuser";
import { NavBar } from "../components/NavBar";
import styled from "styled-components";
// import "./Home.css";
import { ButtonOperacion, Buttonfiltro } from "../components/ButtonOperacion";
import { Cardtotales } from "../components/Cardtotales";

import { TableBasic } from "../tables/TableBasic";
import { Registraringreso } from "../components/Registraringreso";
import { useState } from "react";

import { UserAuth } from '../context/AuthContext';


//

export function Ingresos() {
 
  const { logOut, user } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  const [openRegistro, SetopenRegistro] = useState(false);
 
  return (
    <Container className="container" >
      <Registraringreso open={openRegistro} onClose={()=>SetopenRegistro(false)}/>
      <nav>
        <Datosuser user={user}/>
      </nav>
      <main>
        <ContentFiltros>
          <ButtonOperacion
            inputColor="#4CAF50"
            text="Ingresos"
            textcolor="#fff" 
          />
          <div className="containerbtnfiltro">
           
            <ButtonOperacion
              inputColor="#fff"
              text="NUEVO INGRESOs"
              textcolor="#4CAF50"
              tipo="nuevo"
              funcion={()=>SetopenRegistro(true)}
            />
            <Buttonfiltro inputColor="#fff" textcolor="#696B6F" />
            <Buttonfiltro inputColor="#fff" textcolor="#696B6F" />
            <Buttonfiltro inputColor="#fff" textcolor="#696B6F" />
            
          </div>
        </ContentFiltros>
        <ContentTotales>
          <Cardtotales />
          <Cardtotales />
          <Cardtotales />
          
          <TableBasic />
        </ContentTotales>
      </main>
      <div id="sidebar"></div>
    </Container>
  );
}
//#region STYLED COMPONENTS
const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template:
    " nav nav nav" 0.2fr
    " main main main" 1.5fr
    " content1 content2 content3" 1.2fr
    " footer footer footer" 1fr /
     1fr 1fr 1fr;

  grid-gap: 0.2rem;
  font-weight: 800;

  font-size: 12px;
  color: #004d40;
  text-align: center;
  main {
    gap: -10px;
  }
  
body {
  font-family: "Inter", sans-serif;
}


nav {
  background: #a7ffeb;
  grid-area: nav;
  border-radius: var(--main-radius);
  padding: 24px 30px;
  display: flex;
  justify-content: flex-end;
}

main {
  background: #84ffff;
  grid-area: main;
  border-radius: var(--main-radius);
 
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 20px;
  position: relative;
}

#sidebar {
  background: #c5dd5b;
  grid-area: sidebar;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);

}

#content1 {
  background: #6fffd2;
  grid-area: content1;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}

#content2 {
  background: #64ffda;
  grid-area: content2;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}

#content3 {
  background: #73ffba;
  grid-area: content3;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}

footer {
  background: #1de9b6;
  grid-area: footer;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}

a {
  text-align: center;
  display: block;
  font-family: inherit;
  text-decoration: none;
  font-weight: bold;
  margin: 1rem;
}

  @media (max-width: 650px) {
    
  }

`;

const ContentFiltros = styled.div`
  min-height: 100px;
  width: 100vw;
  background-color: black;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .containerbtnfiltro {
    display: flex;
    flex-wrap: wrap;
  }
`;
const ContentTotales = styled.div`
  min-height: 100px;
  width: 100vw;
  background-color: black;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 5px;
`;
//#endregion
