import { useThemeContext } from '../../context/ThemeContext'
import { darkIcon, lightIcon } from '../../styles/icons'
import FooterStyled from './Footer.style'

const Footer = () => {
  const { myTheme, setMyTheme } = useThemeContext()

const handleClick = () => {
  setMyTheme((pre)=> pre === "light" ? "dark" : "light" )
}

  return (
    <FooterStyled>
      <div onClick={handleClick}>
        {
          myTheme === "light" ? lightIcon : darkIcon
        }
      </div>
    </FooterStyled>
  )
}

export default Footer