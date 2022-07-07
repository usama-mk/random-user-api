import React, { Component } from 'react';
import '../../app.css';
import {range} from '../../helpers';
import Card from '../../Card';
import Pagination from '../../Pagination';


export default class Users extends Component {
  state = { 
    items: [],
    pages: [1,2,3,4,5],
    currentPage: 1
  }

  fetchData = (url, pages, currentPage, toPage) => {
    fetch(url, pages, currentPage, toPage) 
      .then(result => {
        return result.json();
      })
      .then(d => {
        (pages && currentPage) 
          ? this.setState({
              items: d.results,
              pages,
              currentPage: toPage
          })       
          : this.setState({
              items: d.results
          });
      });
  }

  updatePage = (e) => {
    e.preventDefault();

    let {pages, currentPage} = this.state;
    const toPage = Number(e.target.getAttribute('data-value'));
    const url = `https://randomuser.me/api/?page=${toPage}&seed=qwer&results=6`;

    (currentPage !== toPage) && (toPage > 4 ) 
      ? pages = range((toPage - 2), (toPage + 2)) 
      : pages = [1,2,3,4,5];

    (currentPage !== toPage) && this.fetchData(url, pages, currentPage, toPage); 
  }

  componentDidMount() {
    this.fetchData("https://randomuser.me/api/?page=1&seed=qwer&results=6");
  }

  render() {
    const {currentPage, pages, items} = this.state;

    const RenderCards=(item, index)=>{
      console.log(item.item)
      return(
       
            <Card gender={item.item.gender} picture={item.item.picture} name={item.item.name} location={item.item.location} phone={item.item.phone} email={item.item.email} setProfileClicked={setProfileClicked} user={item.item} index={index} />
         
      )
    }

    const setProfileClicked = (user, index) => {
      // let selectedUser = user;
      // let selectedUserIndex = index;
      // history.push({
      //     pathname: '/profile',
      //     state: {
      //         userInfo: selectedUser,
      //         userIndex: selectedUserIndex
      //     }
      // })
  }

    return (
      <div className="app">        
        <div className="container">
          <h3>ReactJS, Fetch API, Random User Generator, Pagination</h3>

          <Pagination
            updatePage={this.updatePage}
            currentPage={currentPage}
            pages={pages}
          />          

          <div className="row">
            {
               items.map((item, key) => {
                return (
                  <RenderCards item={item} index={key}  />
                )
              })
            }
         
          </div>
        
        </div>
      </div>
    );
  }
}
