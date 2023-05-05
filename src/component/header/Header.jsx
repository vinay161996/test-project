import './Header.scss'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header-page' >
            <ContentWrapper>
                <Link to='/' >
                    <h1>Tv-Shows</h1>
                </Link>
            </ContentWrapper>
        </header>
    )
}

export default Header
