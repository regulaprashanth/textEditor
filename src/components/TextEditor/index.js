import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  AppContainer,
  TextEditorContainer,
  TextEditorImage,
  ImageContainer,
  AppHeading,
  TextContainer,
  ButtonsContainer,
  ButtonListItem,
  Button,
} from './styledComponents'

import './index.css'

class TextEditor extends Component {
  state = {
    textInput: '',
    isBoldActive: false,
    isItalicActive: false,
    isUnderlineActive: false,
  }

  onChangeTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  onClickBoldButton = () => {
    this.setState(prevState => ({isBoldActive: !prevState.isBoldActive}))
  }

  onClickItalicButton = () => {
    this.setState(prevState => ({isItalicActive: !prevState.isItalicActive}))
  }

  onClickUnderlineButton = () => {
    this.setState(prevState => ({
      isUnderlineActive: !prevState.isUnderlineActive,
    }))
  }

  render() {
    const {
      isBoldActive,
      textInput,
      isItalicActive,
      isUnderlineActive,
    } = this.state

    const activeFontWeight = isBoldActive ? 'activeFontWeight' : ''
    const activeTextDecoration = isUnderlineActive ? 'activeTextDecoration' : ''
    const activeFontStyle = isItalicActive ? 'activeFontStyle' : ''

    return (
      <AppContainer>
        <TextEditorContainer>
          <ImageContainer>
            <AppHeading>Text Editor</AppHeading>
            <TextEditorImage
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImageContainer>
          <TextContainer>
            <ButtonsContainer>
              <ButtonListItem>
                <Button
                  data-testid="bold"
                  isButtonActive={isBoldActive}
                  type="button"
                  onClick={this.onClickBoldButton}
                >
                  <VscBold size={25} />
                </Button>
              </ButtonListItem>
              <ButtonListItem>
                <Button
                  data-testid="italic"
                  isButtonActive={isItalicActive}
                  type="button"
                  onClick={this.onClickItalicButton}
                >
                  <GoItalic size={25} />
                </Button>
              </ButtonListItem>
              <ButtonListItem>
                <Button
                  data-testid="underline"
                  isButtonActive={isUnderlineActive}
                  type="button"
                  onClick={this.onClickUnderlineButton}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </ButtonListItem>
            </ButtonsContainer>
            <textArea
              value={textInput}
              className={`textArea ${activeFontWeight} ${activeFontStyle} ${activeTextDecoration}`}
              rows={22}
              cols={58}
              onChange={this.onChangeTextInput}
            />
          </TextContainer>
        </TextEditorContainer>
      </AppContainer>
    )
  }
}
export default TextEditor
