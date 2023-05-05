import './Form.scss'
import ContentWrapper from '../../component/contentWrapper/ContentWrapper'

const Form = () => {

    const movie = window.localStorage.getItem('movie')
    const lang = window.localStorage.getItem('lang')

    console.log(movie, lang)
    return (
        <div className='formPage' >
            <ContentWrapper>
                <div className="formData">
                    <h1>{movie}</h1>
                    <h6>Language: {lang}</h6>
                    <form action="">
                        <div className="form-name">
                            <input type="text" name="first-name" placeholder="First Name" required />
                            <input type="text" name="last-name" placeholder="Last Name" required />
                        </div>
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="number" id="number" name="number" placeholder="Your number" />
                        <button type="submit" className="btn btn-primary">Book Your Ticket</button>
                    </form>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default Form
