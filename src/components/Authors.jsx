
const Authors = ({ data }) => {

    return (
        <div className='container__authors'>
            <p className="container__authors--paragraph"><strong>Fuente: </strong>{data.author} </p>
        </div>
    )
}

export default Authors;