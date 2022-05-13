import React , {Component} from 'React';
import './Nav.css';

class Nav extends React.Component{
  render(){
    return(
      <div>
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark ">
<div class="container-fluid">
  <a class="a1 navbar-logo" href="#"><img src="sports.jpg" class="img1 rounded-circle"/> sport video</a>
    <ul class="navbar-nav">
      <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">time</a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">- 0 - 10</a>
          <a class="dropdown-item" href="#">- 10 - 20</a>
          <a class="dropdown-item" href="#">- 20 - 30</a>
          <a class="dropdown-item" href="#">- 30 - 40</a>
        </div>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown">
          type
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">- foot</a>
          <a class="dropdown-item" href="#">- basket</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">- valley</a>
          <a class="dropdown-item" href="#">- soccer</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown">
          sort
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="#">- adults</a>
          <a class="dropdown-item" href="#">- tinageer</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">- for men</a>
          <a class="dropdown-item" href="#">- for women</a>
        </div>
      </li>
      <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
    </ul>
</div>
</nav>
      </div>
    )
  }
}
  export default Nav;