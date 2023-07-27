import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #25262c;
  font-family: 'Roboto';
`
export const TextEditorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  height: 80%;
  background-color: #1b1c22;
`
export const AppHeading = styled.h1`
  color: #ffffff;
  font-size: 25px;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 40vw;
  background-color: transparent;
`
export const TextEditorImage = styled.img`
  height: 60vh;
  width: 30vw;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items: flex-start;
  padding-left: 40px
  background-color:#25262c;
  width:40vw;
  border-radius:10px;
`

export const ButtonsContainer = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 35vw;
  height: 8vh;
  background-color: #25262c;
  border: 1px solid #cbd5e1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-bottom: 0px;
`
export const ButtonListItem = styled.li`
  background-color: transparent;
`

export const Button = styled.button`
  padding: 5px;
  width: 60px;
  height: 30px;
  background-color: transparent;
  border: none;
  color: ${props => (props.isButtonActive ? '#faff00' : '#f1f5f9')};
`
