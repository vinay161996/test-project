import { Bars } from 'react-loader-spinner'
import './Loader.scss'

const Loader = () => {
    return (
        <div className='loader-bar'>
            <Bars
                height="80"
                width="80"
                color="#8e2de2"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Loader
