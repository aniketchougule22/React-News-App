import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {

    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;

    return (
      <div className='my-2'>
        <div className="card">
          <span className='position-absolute top-0 translate-middle badge rounded-pill bg-danger' style={{left: '85%', zIndex: '1'}}>{source}</span>
          <img src={!imageUrl ? "https://stimg2.cardekho.com/images/carNewsimages/userimages/650X420/30565/1679295548921/ElectricCar.jpg" : imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted"><strong>By {author ? author : 'Unknown'} on {new Date(date).toGMTString().slice(0, 25)}</strong></small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
