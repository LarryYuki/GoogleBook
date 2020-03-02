import React, { Component } from "react";
import API from "../../pages/API";

import React, { Component } from 'react'

 class Gbook extends Component {
   state ={
     book: []
   };
   componentDidMount(){
     this.loadBooks()
   }

   loadBooks =()=>{
     API.getBooks()
        .then(res => this.setState({books:res.data.items}))
        .catch(err => console.log(err));
   } 

   handleInputChange = event => {
     const { name, value } = event.target;
     this.setState({
       [name]: value
     });
   };

   handleFormSubmit = event => {
     event.preventDefault();
     if(this.state.title && this.state.author) {
       API.saveBook({
         title:this.state.title,
         authors: this.state.authors,
         image:this.state.image,
         description:this.state.description
       })
       .then(res => this.loadBooks())
       .catch(ERR => console.log(err));
       
     }
   }; 

    

  render() {
    return (
      <Container fluid>
        <row> 
          <col>
          <form>
            <FormBtn>
              Search Book
            </FormBtn>
          </form>
          </col>
        </row>

      </Container>
     
    )
  }
}

export default Gbook

 