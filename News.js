import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
        loading:false
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            page: 1,
            totalResults: 0,
            
        }
        document.title = `${this.capitalize(this.props.category)} - अखBAR`;
    }

    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    async updateNews() {
      
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.setState({loading:true})
        let parseData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parseData.articles),
            totalResults: parseData.totalResults,  
            loading:false
        })
        
    }

    async componentDidMount() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=939dc5aa7d6e40188dabd5bbb1d6951b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.props.setProgress(30);
        this.setState({loading:true})
        let parseData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults,  
            loading : false
        })
        this.props.setProgress(100);
    }  
    
    fetchMoreData = async() =>{
        this.setState({
            page : this.state.page+1
        })
        this.updateNews();
    }
   
    render() {
        return (
           <>  
                <h1 className='text-center' style={{marginTop:'90px',color:'red'}}>NEWS EXPRESS</h1>
                <h4 className='text-center'style={{color:'blue',marginTop:'0px'}}>Top {this.capitalize(this.props.category)} Headlines</h4>
                {this.state.loading && <Spinner/>}
               <InfiniteScroll 
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    
               >

                <div className="container">
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : " "} description={element.description ? element.description : " "} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div>         
                </InfiniteScroll>              
            </>  
      )
    }
}

export default News
