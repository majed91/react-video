import React, {Component} from 'React';

class Pagination extends React.Component{
    render(){
      return(
        <div id="page">
          <div>
            <div class="input-group ml-5">
          <input class="p-2" placeholder="search..."/>
          <div class="input-group-append">
          <button class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button></div>
           </div>
        <ul class="pagination">
          <li class="page-item">prev</li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">4</a></li>
          <li class="page-item"><a class="page-link" href="#">5</a></li>
          <li class="page-item"><a class="page-link" href="#">6</a></li>
          <li class="page-item"><a class="page-link" href="#">7</a></li>
          <li class="page-item"><a class="page-link" href="#">8</a></li>
          <li class="page-item">next</li>
          </ul>
        </div>
        <div id="films">
        <div class="container">
             <div class="row">
                <div class="col-lg-4">
                  <iframe width="250" height="200" src="messy.mp4"></iframe>         
                  </div>
                  <div class="col-lg-4">
                    <iframe width="250" height="200" src="messy.mp4"></iframe>     
                  </div>
                  <div class="col-lg-4">
                    <iframe width="250" height="200" src="messy.mp4"></iframe>     
                  </div>
              </div>
              <div class="row">
                <div class="col-lg-4">
                  <iframe width="250" height="200" src="messy.mp4"></iframe>         
                  </div>
                  <div class="col-lg-4">
                    <iframe width="250" height="200" src="messy.mp4"></iframe>     
                  </div>
                  <div class="col-lg-4">
                    <iframe width="250" height="200" src="messy.mp4"></iframe>     
                  </div>
              </div>
              <div class="row">
                <div class="col-lg-4">
                  <iframe width="250" height="200" src="messy.mp4"></iframe>         
                  </div>
                  <div class="col-lg-4">
                    <iframe width="250" height="200" src="messy.mp4"></iframe>     
                  </div>
                  <div class="col-lg-4">
                    <iframe width="250" height="200" src="messy.mp4"></iframe>     
                  </div>
              </div>
          </div>
          </div>
          <div>
        <ul class="pagination">
          <li class="page-item">prev</li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">4</a></li>
          <li class="page-item"><a class="page-link" href="#">5</a></li>
          <li class="page-item"><a class="page-link" href="#">6</a></li>
          <li class="page-item"><a class="page-link" href="#">7</a></li>
          <li class="page-item"><a class="page-link" href="#">8</a></li>
          <li class="page-item">next</li>
          </ul>
        </div>
          </div>
      )
    }
  }
  export default Pagination;