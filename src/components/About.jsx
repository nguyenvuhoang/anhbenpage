import React, { useState } from "react";
import Modal from "react-modal";
import Brand from "./Brand";

Modal.setAppElement("#root");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="tokyo_tm_about">
        <div className="about_image">
          <img src="assets/img/slider/1.png" alt="about" />
        </div>
        {/* END ABOUT IMAGE */}
        <div className="description">
          <h3 className="name">Anh Ben &amp; Senior Developer</h3>
          <div className="description_inner">
            <div className="left">
              <p>
                Hello, I am a Senior Developer at JUST-IN-TIME SOLUTIONS in VietNam.
                I am currently in charge of Core Banking in Cambodia market.
              </p>
              <div className="tokyo_tm_button">
                <button onClick={toggleModal} className="ib-button">
                  Read More
                </button>
              </div>
              {/* END TOKYO BUTTON */}
            </div>
            {/* END LEFT */}
            <div className="right">
              <ul>
                <li>
                  <p>
                    <span>Birthday:</span>03.Aug.1994
                  </p>
                </li>
                <li>
                  <p>
                    <span>Age:</span>27
                  </p>
                </li>
                <li>
                  <p>
                    <span>Address:</span>Thu Duc City, HCM City, VN
                  </p>
                </li>
                <li>
                  <p>
                    <span>Email:</span>
                    <a href="mailto:nguyenvuhoangz@gmail.com">nguyenvuhoangz@gmail.com</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Phone:</span>
                    <a href="tel:+84833361300">+84 833 361 300</a>
                  </p>
                </li>
                <li>
                  <p>
                    <span>Study:</span>Agriculture and Forestry
                  </p>
                </li>
                <li>
                  <p>
                    <span>Freelance:</span>Available
                  </p>
                </li>
              </ul>
              {/* END UL */}
            </div>
            {/* END RIGHT */}
          </div>
          {/* END DESCRIPTION INNER */}
        </div>
      </div>

      {/* START ABOUT POPUP BOX */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_about">
          <button className="close-modal" onClick={toggleModal}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END POPUP CLOSE BUTTON */}
          <div className="box-inner">
            <div className="description_wrap scrollable">
              <div className="my_box">
                <div className="left">
                  <div className="about_title">
                    <h3>Technical Skills</h3>
                  </div>
                  {/* END ABOUT TITLE */}

                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">Java</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                          <div className="bar_in" style={{width: 95 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">C#</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 80 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="90">
                      <span>
                        <span className="label">JavaScript</span>
                        <span className="number">90%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 90 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="80">
                      <span>
                        <span className="label">Oracle SQL / MSQL Server/ MySQL</span>
                        <span className="number">80%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 80 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                  </div>
                  {/* END PROGRESS */}
                </div>
                {/* END LEFT */}

                <div className="right">
                  <div className="about_title">
                    <h3>Graphics skills</h3>
                  </div>
                  {/* END TITLE */}
                  <div className="tokyo_progress">
                    <div className="progress_inner" data-value="95">
                      <span>
                        <span className="label">Adobe Photoshop</span>
                        <span className="number">95%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 95 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="75">
                      <span>
                        <span className="label">Adobe Illustrator</span>
                        <span className="number">75%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 75 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="60">
                      <span>
                        <span className="label">Adobe After Effects vs Adobe Premiere</span>
                        <span className="number">60%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 60 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    <div className="progress_inner" data-value="40">
                      <span>
                        <span className="label">Adobe InDesign</span>
                        <span className="number">40%</span>
                      </span>
                      <div className="background">
                        <div className="bar">
                        <div className="bar_in" style={{width: 40 + '%'}}></div>
                        </div>
                      </div>
                    </div>

                    

                  </div>
                  {/* EDN TOKYO PROGRESS */}
                </div>
                {/* END RIGHT */}
              </div>
              {/* END MYBOX */}

              <div className="counter">
                <div className="about_title">
                  <h3>Fun Facts</h3>
                </div>
                <ul>
                  <li>
                    <div className="list_inner">
                      <h3>252+</h3>
                      <span>Projects Completed</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>82</h3>
                      <span>Happy Clients</span>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <h3>11M+</h3>
                      <span>Lines of Code</span>
                    </div>
                  </li>
                </ul>
                {/* END COUNTER CONTENT */}
              </div>
              {/* END COUNTER */}

              <div className="partners">
                <div className="about_title">
                  <h3>My Customer</h3>
                </div>
                <Brand />
              </div>
              {/* END PARTNER SLIDER */}
            </div>
          </div>
        </div>
      </Modal>
      {/* END ABOUT POPUP BOX */}
    </>
  );
};

export default About;
