import './Card.scss'
import Img from '../lazyLoadImg/Img';
import CircleRating from '../circleRating/CircleRating'
import Genres from '../genres/Genres'
import { useNavigate } from 'react-router-dom';

const Card = ({ title, lang, genres, rating, imgUrl, id }) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => { navigate(`/shows/${id}`) }}
            className='cardItem' >
            <div className="posterBlock">
                <Img src={imgUrl} />
                {rating === null ? '' : <CircleRating rating={rating} />}
                <Genres data={genres} />
            </div>
            <div className="textBlock">
                <span className="title">
                    {title}
                </span>
                <span className='lang' >
                    Language: <span className='lang' >{lang}</span>
                </span>
            </div>
        </div>
    )
}

export default Card
