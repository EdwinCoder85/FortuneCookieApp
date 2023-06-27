
const FamousPhrases = ({ data }) => {

    return (
        <div className='container__phrases'>
        <p className="container__phrases--paragraph">{data.phrase}<br/><i className='bx-pull-right bx bxs-quote-alt-right bx-md'></i></p>
    </div>
    );
}

export default FamousPhrases;