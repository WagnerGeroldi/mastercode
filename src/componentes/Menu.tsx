import '../styles/menu.scss'
export function Menu() {
    return(

        <nav className="menu">
        <ul>
            <li> <a href="/"> Primeiros Passos </a></li>
            <li><a href="/html">Conhecendo HTML</a></li>
            <li><a href="/css">A cascata do CSS</a></li>
            <li><a href="/javascript">JavaScript</a></li>
            <li><a href="/frameworks">FrameWorks</a></li>
          </ul>
        </nav>
    )
}