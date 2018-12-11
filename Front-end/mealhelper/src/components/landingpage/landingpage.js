import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../../store/actions/userActions";
import { withRouter, Link } from "react-router-dom";
import Jars from "./Jars.jpg";
import Computer from "./Computer.png";
import Plate from "./Plate.png";
import Navbar from "../Navbar/Navbar";
import Recipe from "./Recipes.jpg";
import Book from "./Book.png";
import DoctorPic from "./DoctorPic.png";
import Doctor from "./Doctor.png";
import "./landingpage.css";
import Jumbo from "./Jumbo.jpg";
import Picnic from "./PicnicBlue.jpg"

class Landingpage extends Component {
  componentDidMount = () => {
    if (localStorage.getItem("token")) {
      this.props.history.push("/homepage");
    }
  };

  goToSignup = () => {
    this.props.history.push("/signup");
  };
  goToLogin = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="main-container">
        <Navbar />
        <div className="landing-page-container">
          <div className="jumbotron-container">
            <img className="jumbotron-img" src={Jumbo} alt="No image" />
          </div>

          <div className="login-signup-container">
            <div className="cta-top-content">
              <div className="cta-container">
                <h2>
                  EAT. <br /> TRACK. <br /> ANALYZE.
                </h2>
              </div>

              <div className="signup-login-buttons-lp">
                <p>
                  Record what you eat and how it makes you feel, and let EatWell
                  help you take the guesswork out of eating well and feeling
                  better.
                </p>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <button className="buttons-lp">Log In</button>
                </Link>
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  <button className="buttons-lp">Sign Up</button>
                </Link>
              </div>
            </div>
            <div className="cta-bottom-content">
              <div className="real-housewives-quote">
                <p>
                  "Your diet is a bank account. Good food choices are good
                  investments."
                </p>
                <p>-Bethenny Frankel</p>
              </div>
            </div>
          </div>

          <div className="info-container-one">
            <img className="image-info" src={Computer} />
            <div className="card-body-text-container">
              <div className="header-card">
                <p>E A T</p>
              </div>
              <div className="card-body-text">
                <p>
                  EatWell is an advanced meal journal. Each meal can be recorded
                  along with your experience and any notes about positive or
                  negative health events after eating.
                </p>
                <div className="extra">
                  <p className="tip-header">TIP:</p>
                  <p className="tip">
                    Need a reminder? Set alarms for your mobile app at specific
                    times or at regular intervals each day.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="info-container-two">
            <div className="card-body-text-container">
              <div className="header-card">
                <p>T R A C K</p>
              </div>
              <div className="card-body-text">
                <p>
                  EatWell gives you access to a database of thousands of
                  ingredients and pre-packaged food items, so you can build
                  recipes and track nutrients alongside your health events.
                </p>
                <div className="extra">
                  <p className="tip-header">TIP:</p>
                  <p className="tip">
                    Weather got you gloomy? Add your zip code to get access to
                    local weather information during each meal.
                  </p>
                </div>
              </div>
            </div>
            <img className="image-info" src={Recipe} />
          </div>
          <div className="info-container-three">
            <img className="image-info" src={DoctorPic} />
            <div className="card-body-text-container">
              <div className="header-card">
                <p>A N A L Y Z E</p>
              </div>
              <div className="card-body-text">
                <p>
                  Export an overview of your meal journal to show to a health
                  professional, or view your history to pick up clues yourself!
                </p>
                <div className="extra">
                  <p className="tip-header">TIP:</p>
                  <p className="tip">Veggies es bonus vobis, proinde vos postulo essum magis
                  kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon
                  azuki bean garlic.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="info-container-four">
            <div className="card-body-text-container">
              <div className="header-card">
                <p>E A T  W E L L</p>
              </div>
              <div className="card-body-text">
                <p>
                  Repeat! Newly empowered with a better understanding of how what you eat correlates with how you feel, continue using EatWell as you make adjustments to your diet and fine tune a nutritional plan that works for YOU!
                </p>
                <div className="extra">
                  <p className="tip-header">TIP:</p>
                  <p className="tip">
                  Veggies es bonus vobis, proinde vos postulo essum magis
                  kohlrabi.
                  </p>
                </div>
              </div>
            </div>
            <img className="image-info" src={Picnic} />
          </div>
        </div>
        <a name="pricing" />
        <div className="pricing">
          <h1>Pricing</h1>
          <div className="charts" id="price">
            <div className="plan">
              <div className="plan-inner">
                <div className="entry-title">
                  <h3>Free</h3>
                  <div className="price">
                    $0<span>/PER USER</span>
                  </div>
                </div>
                <div className="entry-content">
                  <ul>
                    <li>
                      <strong>Free</strong> option 1
                    </li>
                    <li>
                      <strong>Free</strong> option 2
                    </li>
                    <li>
                      <strong>Free</strong> option 3
                    </li>
                    <li>
                      <strong>Free</strong> option 4
                    </li>
                    <li>
                      <strong>Free</strong> option 5
                    </li>
                  </ul>
                </div>
                <div className="free-btn">
                  <a href="#">Free</a>
                </div>
              </div>
            </div>
            <div className="plan basic">
              <div className="plan-inner">
                <div className="hot">hot!</div>
                <div className="entry-title">
                  <h3>Premium</h3>
                  <div className="price">
                    $4.99<span>/PER USER</span>
                  </div>
                </div>
                <div className="entry-content">
                  <ul>
                    <li>
                      <strong>1x</strong> option 1
                    </li>
                    <li>
                      <strong>2x</strong> option 2
                    </li>
                    <li>
                      <strong>3x</strong> option 3
                    </li>
                    <li>
                      <strong>Free</strong> option 4
                    </li>
                    <li>
                      <strong>Unlimited</strong> option 5
                    </li>
                  </ul>
                </div>
                <div className="btn">
                  <a href="#">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a name="team" />
        <div className="Team">
          <h1>Team</h1>
          <div className="team-cards">
            <div className="team-column">
              <div className="card">
                <img src="https://via.placeholder.com/100" alt="Team Member" className="team-member" style={{ width: 100 }} />
                <div className="team-container">
                  <h2>Team Member</h2>
                  <p className="title">Developer &amp; Founder</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>example@example.com</p>
                  <p>
                    <button className="contact-button">Contact</button>
                  </p>
                </div>
              </div>
            </div>
            <div className="team-column">
              <div className="card">
                <img src="https://via.placeholder.com/100" alt="Team Member" className="team-member" style={{ width: 100 }} />
                <div className="team-container">
                  <h2>Team Member</h2>
                  <p className="title">Developer</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>example@example.com</p>
                  <p>
                    <button className="contact-button">Contact</button>
                  </p>
                </div>
              </div>
            </div>
            <div className="team-column">
              <div className="card">
                <img src="https://via.placeholder.com/100" alt="Team Member" className="team-member" style={{ width: 100 }} />
                <div className="team-container">
                  <h2>Team Member</h2>
                  <p className="title">Developer</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>example@example.com</p>
                  <p>
                    <button className="contact-button">Contact</button>
                  </p>
                </div>
              </div>
            </div>
            <div className="team-column">
              <div className="card">
                <img src="https://via.placeholder.com/100" alt="Team Member" className="team-member" style={{ width: 100 }} />
                <div className="team-container">
                  <h2>Team Member</h2>
                  <p className="title">Developer &amp; Founder</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>example@example.com</p>
                  <p>
                    <button className="contact-button">Contact</button>
                  </p>
                </div>
              </div>
            </div>
            <div className="team-column">
              <div className="card">
                <img src="https://via.placeholder.com/100" alt="Team Member" className="team-member" style={{ width: 100 }} />
                <div className="team-container">
                  <h2>Team Member</h2>
                  <p className="title">Developer &amp; Founder</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>example@example.com</p>
                  <p>
                    <button className="contact-button">Contact</button>
                  </p>
                </div>
              </div>
            </div>
            <div className="team-column">
              <div className="card">
                <img src="https://via.placeholder.com/100" alt="Team Member" className="team-member" style={{ width: 100 }} />
                <div className="team-container">
                  <h2>Team Member</h2>
                  <p className="title">Developer &amp; Founder</p>
                  <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                  <p>example@example.com</p>
                  <p>
                    <button className="contact-button">Contact</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { addUser }
)(withRouter(Landingpage));
