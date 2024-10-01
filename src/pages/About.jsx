import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function About() {
    const navigate = useNavigate();
    return <>
        <Navbar />
        <section id="Title">
            <div class="container col-xxl-8 px-4 py-5">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src={logo} class="d-block mx-lg-auto img-fluid logo" alt="Saffron Box" width="650" height="500" loading="lazy" />
                    </div>
                    <div class="col-lg-6">
                        <h1 class="display-5 fw-bold lh-1 mb-3">Connecting Hearts Across Borders: India Post's Diaspora Bridge</h1>
                        <p class="lead">India Post offers a comprehensive range of export services tailored for businesses of all sizes. From small-scale artisans to large enterprises, we provide seamless, reliable, and affordable shipping solutions across continents.</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" onClick={() => navigate('/')} class="btn btn-dark btn-lg px-4 me-md-2">Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="AboutUs">
            <div class="px-4 py-5 text-center bg-light">
                <h1 class="display-5 fw-bold mt-5 mb-3">Why Export with India Post?</h1>
                <div class="col-lg-6 mx-auto mb-5">
                    <p class="lead mb-4">Cost-Effective Shipping - Exporting with India Post drastically reduces your logistics expenses. Enjoy competitive international rates that help you maintain profit margins while reaching customers globally. With us, shipping costs no longer limit your growth potential.</p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" class="btn btn-outline-dark btn-light px-5 mt-3" onClick={() => navigate('/sign-in')} >Sign In</button>
                    </div>
                </div>
            </div>
        </section>

        {/*<section id="Testimonial">
            <div id="carouselExampleDark" class="carousel carousel-dark slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active p-5 text-center bg-body-white" data-bs-interval="10000">
                        <div class="container py-5">
                            <img src="Image3.jpg" alt="Image of a dog" class="rounded-circle mt-5 mb-5" height="200rem" width="190rem" />
                            <h3 class="text-body-emphasis">"My sad days even got happy after I found her on Arth. We are just the two sides of a coin i.e., incomplete without eachother."</h3>

                            <p class="col-lg-8 mx-auto lead mt-2">
                                Mira and Vivan, India
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item p-5 text-center bg-body-white" data-bs-interval="2000">
                        <div class="container py-5">
                            <img src="Image1.jpg" alt="Image of a dog" class="rounded-circle mt-5 mb-5" height="200rem" width="190rem" />
                            <h3 class="text-body-emphasis">"Finally the wait is over. Having found such a friend in my life, I feel overwhelmed."</h3>
                            <p class="col-lg-8 mx-auto lead mt-2">
                                Sid and Maria, New York
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item p-5 text-center bg-body-white">
                        <div class="container py-5">
                            <img src="Image2.jpg" alt="Image of a dog" class="rounded-circle mt-5 mb-5" height="200rem" width="190rem" />
                            <h3 class="text-body-emphasis">"I cannot be more happy to find such an lovely friend within a short period of time."</h3>
                            <p class="col-lg-8 mx-auto lead mt-2">
                                Anurag and Prerna, Kolkata
                            </p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
</section>*/}
        <Footer />
    </>
}