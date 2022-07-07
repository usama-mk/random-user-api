// import React, { Component } from 'react';
// import '../../app.css';
// import {range} from '../../helpers';
// import Card from '../../Card';
// import Pagination from '../../Pagination';
// import { Form } from 'react-bootstrap';
// import { useState } from 'react';
// import { useEffect } from 'react';


// export default function Users() {
//  const [data, setData]= useState({ 
//     items: [],
//     pages: [1,2,3,4,5],
//     currentPage: 1
//   })


//   const [displayItems, setDisplayItems]= useState([])
//   const [filterQuery, setFilterQuery] = useState()

//   const fetchData = (url, pages, currentPage, toPage) => {
//     fetch(url, pages, currentPage, toPage) 
//       .then(result => {
//         return result.json();
//       })
//       .then(d => {
//         (pages && currentPage) 
//           ? setData({
//               items: d.results,
//               pages,
//               currentPage: toPage
//           })       
//           : setData({
//             ...data,
//               items: d.results
//           })      
//       });

      
//   }

//  const updatePage = (e) => {
//     e.preventDefault();

//     let {pages, currentPage} = data;
//     const toPage = Number(e.target.getAttribute('data-value'));
//     const url = `https://randomuser.me/api/?page=${toPage}&seed=qwer&results=100`;

//     (currentPage !== toPage) && (toPage > 4 ) 
//       ? pages = range((toPage - 2), (toPage + 2)) 
//       : pages = [1,2,3,4,5];

//     (currentPage !== toPage) && fetchData(url, pages, currentPage, toPage); 
//   }

//  useEffect(()=>{
//     fetchData("https://randomuser.me/api/?page=1&seed=qwer&results=100");
//     // if (!filterQuery) {
//     //     setDisplayItems(data?.results?.slice(0, 10))
//     //   } else {
//     //     const queryString = filterQuery.toLowerCase()
//     //     const filteredData = data?.results?.filter(contact => {
//     //       const fullName = `${contact.name.first} ${contact.name.last}`
  
//     //       // if it's just one letter, return all names that start with it
//     //       if (queryString.length === 1) {
//     //         const firstLetter = fullName.charAt(0).toLowerCase()
//     //         return firstLetter === queryString
//     //       }
//     //       else {
//     //         return fullName.toLowerCase().includes(queryString)
//     //       }
//     //     })
//     //     setDisplayItems(filteredData)
//     //   }


//  })


//     const {currentPage, pages, items} = data;

//     const RenderCards=(item, index)=>{
//       console.log(item.item)
//       return(
       
//             <Card gender={item.item.gender} picture={item.item.picture} name={item.item.name} location={item.item.location} phone={item.item.phone} email={item.item.email}  user={item.item} index={index} />
         
//       )
//     }

//     const setProfileClicked = (user, index) => {
//       // let selectedUser = user;
//       // let selectedUserIndex = index;
//       // history.push({
//       //     pathname: '/profile',
//       //     state: {
//       //         userInfo: selectedUser,
//       //         userIndex: selectedUserIndex
//       //     }
//       // })
//   }

//     return (
//       <div className="app">        
//         <div className="container">
//           <h3>ReactJS, Fetch API, Random User Generator, Pagination</h3>

//           <Form className="d-flex">
//               <Form.Control
//                 type="text"
//                 name="search"
//                 onChange={(e) => {}}
//                 placeholder="Search Products..."
//                 className="mr-sm-1 ml-sm-5"
//               ></Form.Control>
//             </Form>

//           <Pagination
//             updatePage={updatePage}
//             currentPage={currentPage}
//             pages={pages}
//           />          

//           <div className="row">
//             {
//                displayItems.map((item, key) => {
//                 return (
//                   <RenderCards item={item} index={key}  />
//                 )
//               })
//             }
         
//           </div>
        
//         </div>
//       </div>
//     );
//   }





import React, { Component } from 'react';
import '../../app.css';
import {range} from '../../helpers';
import Card from '../../Card';
import Pagination from '../../Pagination';
import { Form } from 'react-bootstrap';


export default class Users extends Component {
  state = { 
    items: [],
    pages: [1,2,3,4,5],
    currentPage: 1,
    searchValue:''
  }

  changeSearch = (e) =>{
    this.setState({searchValue: e.target.value});
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
       
            <Card gender={item.item.gender} picture={item.item.picture} name={item.item.name} location={item.item.location} phone={item.item.phone} email={item.item.email}  user={item.item} index={index} />
         
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

          <Form className="d-flex">
              <Form.Control
                type="text"
                name="search"
                onChange={this.changeSearch}
                placeholder="Search Products..."
                className="mr-sm-1 ml-sm-5"
              ></Form.Control>
            </Form>

          <Pagination
            updatePage={this.updatePage}
            currentPage={currentPage}
            pages={pages}
          />          

          <div className="row">
            {
               items.filter((e) =>
               e.name.first.toLowerCase().includes(this.state.searchValue.toLowerCase()) || e.name.last.toLowerCase().includes(this.state.searchValue.toLowerCase())
             ).map((item, key) => {
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
