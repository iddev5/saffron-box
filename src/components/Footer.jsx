import {Link} from 'react-router-dom';

export default function Footer() {
    return <div class="container py-5">
    <div class="row">
      <div class="col-lg-3 mb-3">
        <a class="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/" aria-label="Bootstrap">
          <span class="fs-5 arth">SaffronBox</span>
        </a>
        <ul class="list-unstyled small text-muted">
          <li class="mb-2">©️Designed and built with all the love in the world by Team ARCS.</li>
          
        </ul>
      </div>
      <div class="col-6 col-lg-4 offset-lg-1 mb-3">
        <h5>Links</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><Link to={"/"}>Home</Link></li>
          <li class="mb-2"><Link to={"/about"}>About Us</Link></li>
          <li class="mb-2"><Link to={"/about#Testimonial"}>Testimonial</Link></li>
          <li class="mb-2"><Link to={"/sign-in"}>Sign In</Link></li>
        </ul>
      </div>
      
      <div class="col-6 col-lg-4 mb-3">
        <h5>Our Team</h5>
        <ul class="list-unstyled">
          <li class="mb-2"><a href="">Ayush Bardhan Tripathy</a></li>
          <li class="mb-2"><a href="">Chinmay Kumar Sethi</a></li>
          <li class="mb-2"><a href="">Sthyti Pragyan Sahu</a></li>
          <li class="mb-2"><a href="">Ritik Kumar Jena</a></li>
          <li class="mb-2"><a href="">Aayush Kumar Giri</a></li>
          <li class="mb-2"><a href="">Abhishek Sahoo</a></li>
          
        </ul>
      </div>
    </div>
  </div>

}