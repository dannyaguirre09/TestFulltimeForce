import Item from '../Components/Item'

export default function ListsCommits({results}) {

    return (
        <div className="container mt-5 mb-3">
            <h4 className='pb-3'>Commit's Lists</h4>
            <div className="row">
                {
                    results.map((item, index) => (
                        <Item key={index} information={item.commit} />
                    ))
                }
            </div>
        </div>
       
    )
}


