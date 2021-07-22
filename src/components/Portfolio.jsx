import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";


const portfolio_image1  = <img src="assets/img/portfolio/1.png" alt="Portfolio"/>
const portfolio_image2  = <img src="assets/img/portfolio/2.png" alt="Portfolio"/>
const portfolio_image3  = <img src="assets/img/portfolio/3.png" alt="Portfolio"/>
const portfolio_image4  = <img src="assets/img/portfolio/4.png" alt="Portfolio"/>
const portfolio_image5  = <img src="assets/img/portfolio/5.png" alt="Portfolio"/>
const portfolio_image6  = <img src="assets/img/portfolio/6.png" alt="Portfolio"/>


const PortfolioList = [
  {
    image:  portfolio_image1,
  },
  {
    image:  portfolio_image2,
  },
  {
    image:  portfolio_image3,
  },
  {
    image:  portfolio_image4,
  },
  {
    image:  portfolio_image5,
  },
  {
    image:  portfolio_image6,
  }
]


const Portfolio = () => {
  return (
    <>
      <SimpleReactLightbox>
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Portfolio</span>
                <h3>Creative Portfolio</h3>
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}
          <div className="portfolio_filter">
            <Tabs>
              <TabList>
                <Tab>All</Tab>
                <Tab>Ui/Ux</Tab>
                <Tab>Website</Tab>
                <Tab>Graphic</Tab>
                <Tab>Creative</Tab>
                <Tab>CV</Tab>
              </TabList>
              {/* END TABLIST */}
              <div className="list_wrapper">
                <SRLWrapper>
                  <TabPanel>
                    <ul className="portfolio_list">

                      {PortfolioList.map((value,index) => (
                        <li key={index}>
                          <div className="inner">
                            <div className="entry tokyo_tm_portfolio_animation_wrap">
                              <a href="assets/img/portfolio/5.jpg">
                                {value.image}
                              </a>
                            </div>
                          </div>
                        </li>
                      ))}

                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END ALL PORTFOLIO GALLERY */}

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/1.png">
                              <img
                                src="assets/img/portfolio/1.png"
                                alt="Ui/Ux"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      {/* END VIMEO */}
                      
                      {/* END VIMEO */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END UI/UX GALLERY */}

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/2.png">
                              <img
                                src="assets/img/portfolio/2.png"
                                alt="Website"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      {/* END YOUTUBE */}
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/4.png ">
                              <img
                                src="assets/img/portfolio/4.png"
                                alt="Website"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      {/* END YOUTUBE */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END WEBSITE GALLERY */}

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/3.png">
                              <img
                                src="assets/img/portfolio/3.png"
                                alt="Graphic"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      {/* END SOUNDCLOUD */}
                      
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  {/* END GRAPHIC GALLERY */}

                  <TabPanel>
                    <ul className="portfolio_list">
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/2.png">
                              <img
                                src="assets/img/portfolio/2.png"
                                alt="Creative"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      {/* END IMAGE */}
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/3.png">
                              <img
                                src="assets/img/portfolio/3.png"
                                alt="Creative"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      {/* END IMAGE */}
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/6.png">
                              <img
                                src="assets/img/portfolio/6.png"
                                alt="Creative"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      {/* END IMAGE */}
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>
                  
                  <TabPanel>
                    <ul className="portfolio_list">
                      <li>
                        <div className="inner">
                          <div className="entry tokyo_tm_portfolio_animation_wrap">
                            <a href="assets/img/portfolio/5.png">
                              <img
                                src="assets/img/portfolio/5.png"
                                alt="CV"
                              />
                            </a>
                          </div>
                        </div>
                      </li>
                      {/* END IMAGE */}
                      
                    </ul>
                    {/* END PORTFOLIO LIST */}
                  </TabPanel>

                  {/* END CREATIVE PORTFOLIO GALLERY */}
                </SRLWrapper>
                {/* END TABPANEL */}
              </div>
              {/* END LIST WRAPPER */}
            </Tabs>
          </div>
        </div>
      </SimpleReactLightbox>
    </>
  );
};

export default Portfolio;
