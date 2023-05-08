import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='redesSociais'>
                <div className='redes'>
                    <a href='facebook.com' target='blank'>
                        <img src='/imagens/fb.png' alt='Facebook' />
                    </a>
                </div>
                <div className='redes'>
                    <a href='instagram.com' target='blank'>
                        <img src='/imagens/ig.png' alt='Instagram' />
                    </a>
                </div>
                <div className='redes'>
                    <a href='Twitter.com' target='blank'>
                        <img src='/imagens/tw.png' alt='Twitter' />
                    </a>
                </div>
            </div>
            <div className='logo'>
                <img src='/imagens/logo.png' alt='Logo Organo'/>
            </div>
            <div className='creditos'>
                <span>Desenvolvido por Helder</span>
            </div>
        </footer>
    )
}

export default Footer