      import React, {Component} from 'React';

      import Nav from './Nav';
      import Sidebar from './Sidebar';
      import Divo1 from './Divo1';
      import Pagination from './Pagination';
      import Footer from './Footer';
      class App extends React.Component{
        render(){
          return(
            <div>
             <Nav />
             <Sidebar />
             <Divo1 />
             <Pagination />
             <Footer />
            </div>
          )
        }
      }
    export default App