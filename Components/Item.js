import moment from 'moment'

export default function Item({information}) {
    return (
    <div className="col-md-12">
            <div className="card p-3 mb-3">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div className="icon">
                            <img src='https://miro.medium.com/max/325/1*zzvdRmHGGXONZpuQ2FeqsQ.png' width='30px' height='30px' />
                        </div>
                        <div className="ms-2 c-details">
                            <h6 className="mb-0">{information.committer.name}</h6> <span>{moment(information.committer.date).format('LLL')}</span>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="heading 1">{information.message}</h3>
                    <div className="mt-5">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width:"100%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>                           
                    </div>
                </div>
            </div>
        </div>
    )
}
