
import './App.css'
import styled from "styled-components";
import React from "react";
import {Contact} from "./Contact.tsx";

const data = [1,2,3]

function App() {

  return (
    <>
      <MainView>
          <Inbox>Inbox</Inbox>
          <Content>
              {data.map(d => {
                  return <Contact key={d}></Contact>
              })}
          </Content>
      </MainView>
    </>
  )
}



const MainView = styled.main`
    display: flex;
    padding: 0;
    width: 100vw;
`

const Inbox = styled.section`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
  height: 100vh;
  flex-grow: 1

`;

const Content = styled.section`
    background: #ded1d5;
    height: 100vh;
    flex-grow: 2.2
`;



export default App
