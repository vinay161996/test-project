
import "./Genres.scss"

const Genres = ({ data }) => {

    return (
        <div className="genres" >
            {data.map((g) => {
                return (
                    <div className="genre">
                        {g}
                    </div>
                )
            })}
        </div>
    )
}

export default Genres
