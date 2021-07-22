export default function Pagination({ postsPerPage, totalPost, paginate }) {
    const pageNumbers = [];

    for(let  i = 1; i<=Math.ceil(totalPost / postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div className='container'>
            <nav>
                <ul className='pagination'>
                    {
                        pageNumbers.map(number => (
                            <li className='page-item' key={number}>
                                <a onClick={() => paginate(number)} href='#' className='page-link'>
                                    {number}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
       
    )
}
