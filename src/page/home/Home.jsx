import ContentWrapper from '../../component/contentWrapper/ContentWrapper'
import './Home.scss'
import Card from '../../component/card/Card'
import { useEffect, useState } from 'react'
import { fetchDataFromApi } from '../../upi/api'
import Loader from '../../component/loader/Loader'
import noPoster from '../../asset/no-poster.png'


const Home = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetchDataFromApi('/search/shows?q=all').then(res => setData(res))
    }, [])

    return (
        <div className='home-page' >
            {data !== null ? (
                <ContentWrapper>
                    <div className="cardItems">
                        {data?.map(item => {
                            let showData = item.show;
                            return (
                                <Card
                                    key={showData.id}
                                    id={showData.id}
                                    title={showData.name}
                                    lang={showData.language}
                                    genres={showData.genres}
                                    rating={showData.rating.average}
                                    imgUrl={showData.image === null ? noPoster : showData.image.medium}
                                />
                            )
                        })}
                    </div>
                </ContentWrapper>
            ) : (
                <div className="loader">
                    <Loader />
                </div>
            )}
        </div>
    )
}

export default Home
