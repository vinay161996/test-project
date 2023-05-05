import { useState } from 'react'
import './Detail.scss'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchDataFromApi } from '../../upi/api'
import ContentWrapper from '../../component/contentWrapper/ContentWrapper'
import Img from '../../component/lazyLoadImg/Img'
import noposter from '../../asset/no-poster.png'
import Genres from '../../component/genres/Genres'
import CircleRating from '../../component/circleRating/CircleRating'
import Loader from '../../component/loader/Loader'



const Detail = () => {
    const [data, setData] = useState(null)
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0)
        fetchDataFromApi(`/shows/${id}`).then(res => setData(res))
    }, [])

    const removeText = (text) => {
        if (text === null || text === "") return;
        else {
            text = text.toString();
        }
        return text.replace(/(<([^>]+)>)/gi, "");
    }

    const openForm = () => {
        window.localStorage.setItem("movie", data.name)
        window.localStorage.setItem("lang", data.language)
        navigate(`/form/${data?.id}`)
    }

    return (
        <div className='detailPage' >
            {data !== null ? (
                <ContentWrapper>
                    <div className='content' >
                        <div className="left">
                            <Img className="posterImg" src={data.image === null ? noposter : data.image.original} />
                        </div>
                        <div className="right">
                            <span className="title">
                                {data.name}
                            </span>
                            <Genres data={data.genres} />
                            <span className='lang' >
                                Language: <span className='lang' >{data.language}</span>
                            </span>
                            <div className="row">
                                {data.rating.average === null ? ""
                                    : <CircleRating rating={data.rating.average} />}
                                <button
                                    onClick={() => { openForm() }}
                                    className='btn'>Book Ticket</button>
                            </div>
                            <div className="overview">
                                <div className="heading">
                                    Summary
                                </div>
                                <div className="description">
                                    {removeText(data.summary)}
                                </div>
                            </div>
                            {data.status === null ? "" : <div className="info">
                                <div className="infoItem">
                                    <span className="text bold">
                                        Status:{' '}
                                    </span>
                                    <span className="text">
                                        {data.status}
                                    </span>
                                </div>
                            </div>}
                            {data.premiered === null ? ""
                                : (<div className="info">
                                    <div className="infoItem">
                                        <span className="text bold">
                                            Premiered:{' '}
                                        </span>
                                        <span className="text">
                                            {data.premiered}
                                        </span>
                                    </div>
                                </div>)}
                            {data.runtime === null ? ""
                                : (<div className="info">
                                    <div className="infoItem">
                                        <span className="text bold">
                                            Runtime:{' '}
                                        </span>
                                        <span className="text">
                                            {data.runtime}min
                                        </span>
                                    </div>
                                </div>)}
                        </div>
                    </div>
                </ContentWrapper>
            ) : (
                <Loader />
            )}

        </div>
    )
}

export default Detail
