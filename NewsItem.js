import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl ,newsUrl,author,date,source} = this.props;
        return (
            <div>
                <div className="my-3">
                    <div className="card">
                        <div>
                          <span className=" badge rounded-pill bg-danger" style={{display: 'flex', justifyContent:'flex-end',position:'absolute',right:0}}>{source}</span>
                        </div>
                        <img src={imageUrl ? imageUrl :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2l8gy1TnEs_lxrd16fhZfnOPgtW5tLGr_sQ&usqp=CAU"} className="card-img-top" alt="..." />
                            <h5 className="card-title">{title}...</h5>
                        <div className="card-body" id='cardText'>
                            <p className="card-text">{description}...</p>
                            <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} className="btn btn-sm " target='blank'>Read More</a>
                           
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
