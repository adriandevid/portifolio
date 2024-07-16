import PortifolioPage from "@portifolio/components/_ui/portfolioPage";

export default function Portfolio() {
    return (
        <section className="pt-page" data-id="portfolio">
            <div className="section-inner custom-page-content">
                <div className="page-header color-1">
                    <h2>Portfolio</h2>
                </div>
                <div className="page-content">
                    {/* <!-- Portfolio Content --> */}
                    <div className="portfolio-content">

                        {/* <!-- Portfolio filter --> */}
                        <ul id="portfolio_filters" className="portfolio-filters">
                            <li className="active">
                                <a className="filter btn btn-sm btn-link active" data-group="all">All</a>
                            </li>
                            <li>
                                <a className="filter btn btn-sm btn-link" data-group="media">Media</a>
                            </li>
                            <li>
                                <a className="filter btn btn-sm btn-link" data-group="illustration">Illustration</a>
                            </li>
                            <li>
                                <a className="filter btn btn-sm btn-link" data-group="video">Video</a>
                            </li>
                        </ul>
                        {/* <!-- End of Portfolio filter --> */}

                        {/* <!-- Portfolio Grid --> */}
                        <div id="portfolio_grid" className="portfolio-grid portfolio-masonry masonry-grid-3">

                            {/* <!-- Portfolio Item 1 --> */}
                            <figure className="item" data-groups='["all", "media"]'>
                                <a className="ajax-page-load" data-page-id="1">
                                    <img src="images/portfolio/1.jpg" alt="" />
                                    <div>
                                        <h5 className="name">Siae.sab</h5>
                                        <small>projected in my worker</small>
                                        <i className="fa fa-file-text-o"></i>
                                    </div>
                                </a>
                            </figure>

                            <figure className="item" data-groups='["all", "media"]'>
                                <a className="ajax-page-load" data-page-id="portfolio-2">
                                    <img src="images/portfolio/1.jpg" alt="" />
                                    <div>
                                        <h5 className="name">Siae.roe</h5>
                                        <small>projected in my worker</small>
                                        <i className="fa fa-file-text-o"></i>
                                    </div>
                                </a>
                            </figure>

                            <figure className="item" data-groups='["all", "media"]'>
                                <a className="ajax-page-load" data-page-id="portfolio-1">
                                    <img src="images/portfolio/1.jpg" alt="" />
                                    <div>
                                        <h5 className="name">EventSourcing.Service</h5>
                                        <small>personal project</small>
                                        <i className="fa fa-file-text-o"></i>
                                    </div>
                                </a>
                            </figure>

                            <figure className="item" data-groups='["all", "media"]'>
                                <a className="ajax-page-load" data-page-id="portfolio-1">
                                    <img src="images/portfolio/1.jpg" alt="" />
                                    <div>
                                        <h5 className="name">ISC.Api</h5>
                                        <small>personal project</small>
                                        <i className="fa fa-file-text-o"></i>
                                    </div>
                                </a>
                            </figure>

                            <figure className="item" data-groups='["all", "media"]'>
                                <a className="ajax-page-load" data-page-id="portfolio-1">
                                    <img src="images/portfolio/1.jpg" alt="" />
                                    <div>
                                        <h5 className="name">DomainEvents.Service</h5>
                                        <small>personal project</small>
                                        <i className="fa fa-file-text-o"></i>
                                    </div>
                                </a>
                            </figure>

                            <figure className="item" data-groups='["all", "media"]'>
                                <a className="ajax-page-load" data-page-id="portfolio-1">
                                    <img src="images/portfolio/1.jpg" alt="" />
                                    <div>
                                        <h5 className="name">ExecuteQuery - package</h5>
                                        <small>personal project</small>
                                        <i className="fa fa-file-text-o"></i>
                                    </div>
                                </a>
                            </figure>
                            {/* <!-- /Portfolio Item 1 --> */}

                            {/* <!-- Portfolio Item 2 -->
                      <!-- <figure className="item" data-groups='["all", "video"]'>
                        <a href="https://player.vimeo.com/video/97102654?autoplay=1" title="Praesent Dolor Ex" className="lightbox mfp-iframe">
                          <img src="images/portfolio/2.jpg" alt="" />
                          <div>
                            <h5 className="name">Project Name</h5>
                            <small>Video</small>
                            <i className="fa fa-video-camera"></i>
                          </div>
                        </a>
                      </figure> -->
                      <!-- /Portfolio Item 2 -->

                      <!-- Portfolio Item 3 -->
                      <!-- <figure className="item" data-groups='["all","illustration"]'>
                        <a href="images/portfolio/full/3.jpg" className="lightbox" title="Duis Eu Eros Viverra">
                          <img src="images/portfolio/3.jpg" alt="" />
                          <div>
                            <h5 className="name">Project Name</h5>
                            <small>Illustration</small>
                            <i className="fa fa-image"></i>
                          </div>
                        </a>
                      </figure> -->
                      <!-- /Portfolio Item 3 -->

                      <!-- Portfolio Item 4 -->
                      <!-- <figure className="item" data-groups='["all", "media"]'>
                        <a className="ajax-page-load" href="portfolio-2.html">
                          <img src="images/portfolio/4.jpg" alt="" />
                          <div>
                            <h5 className="name">Project Name</h5>
                            <small>Media</small>
                            <i className="fa fa-file-text-o"></i>
                          </div>
                        </a>
                      </figure> -->
                      <!-- /Portfolio Item 4 -->

                      <!-- Portfolio Item 5 -->
                      <!-- <figure className="item" data-groups='["all", "illustration"]'>
                        <a href="images/portfolio/full/5.jpg" className="lightbox" title="Aliquam Condimentum Magna Rhoncus">
                          <img src="images/portfolio/5.jpg" alt="" />
                          <div>
                            <h5 className="name">Project Name</h5>
                            <small>Illustration</small>
                            <i className="fa fa-image"></i>
                          </div>
                        </a>
                      </figure> -->
                      <!-- /Portfolio Item 5 -->

                      <!-- Portfolio Item 6 -->
                      <!-- <figure className="item" data-groups='["all", "media"]'>
                        <a className="ajax-page-load" href="portfolio-3.html">
                          <img src="images/portfolio/6.jpg" alt="" />
                          <div>
                            <h5 className="name">Project Name</h5>
                            <small>Media</small>
                            <i className="fa fa-file-text-o"></i>
                          </div>
                        </a>
                      </figure> -->
                      <!-- /Portfolio Item 6 -->

                      <!-- Portfolio Item 7 -->
                      <!-- <figure className="item" data-groups='["all", "video"]'>
                        <a href="https://player.vimeo.com/video/97102654?autoplay=1" title="Nulla Facilisi" className="lightbox mfp-iframe">
                          <img src="images/portfolio/7.jpg" alt="" />
                          <div>
                            <h5 className="name">Project Name</h5>
                            <small>Video</small>
                            <i className="fa fa-video-camera"></i>
                          </div>
                        </a>
                      </figure> -->
                      <!-- /Portfolio Item 7 -->

                      <!-- Portfolio Item 8 -->
                      <!-- <figure className="item" data-groups='["all",  "media"]'>
                        <a className="ajax-page-load" href="portfolio-4.html">
                          <img src="images/portfolio/8.jpg" alt="" />
                          <div>
                            <h5 className="name">Project Name</h5>
                            <small>Media</small>
                            <i className="fa fa-file-text-o"></i>
                          </div>
                        </a>
                      </figure> -->
                      <!-- /Portfolio Item 8 -->

                      <!-- Portfolio Item 9 -->
                      <!-- <figure className="item" data-groups='["all","illustration"]'>
                        <a href="images/portfolio/full/9.jpg" className="lightbox" title="Mauris Neque Dolor">
                          <img src="images/portfolio/9.jpg" alt="" />
                          <div>
                            <h5 className="name">Project Name</h5>
                            <small>Illustration</small>
                            <i className="fa fa-image"></i>
                          </div>
                        </a>
                      </figure> -->
                      <!-- /Portfolio Item 9 -->

                      <!-- Portfolio Item 10 -->
                      <!-- <figure className="item" data-groups='["all", "video"]'>
                        <a href="https://player.vimeo.com/video/97102654?autoplay=1" title="Donec Lectus Arcu" className="lightbox mfp-iframe">
                          <img src="images/portfolio/10.jpg" alt="" />
                          <div>
                            <h5 className="name">Project Name</h5>
                            <small>Video</small>
                            <i className="fa fa-video-camera"></i>
                          </div>
                        </a>
                      </figure> -->
                      <!-- /Portfolio Item 10 -->

                      <!-- Portfolio Item 11 -->
                      <!-- <figure className="item" data-groups='["all","illustration"]'>
                        <a href="images/portfolio/full/11.jpg" className="lightbox" title="Duis Eu Eros Viverra">
                          <img src="images/portfolio/11.jpg" alt="" />
                          <div>
                            <h5 className="name">Project Name</h5>
                            <small>Illustration</small>
                            <i className="fa fa-image"></i>
                          </div>
                        </a>
                      </figure> -->
                      <!-- /Portfolio Item 11 -->

                      <!-- Portfolio Item 12 -->
                      <!-- <figure className="item" data-groups='["all","media"]'>
                        <a className="ajax-page-load" href="portfolio-5.html">
                          <img src="images/portfolio/12.jpg" alt="" />
                          <div>
                            <h5 className="name">Project Name</h5>
                            <small>Media</small>
                            <i className="fa fa-file-text-o"></i>
                          </div>
                        </a>
                      </figure> -->
                      <!-- /Portfolio Item 12 --> */}
                        </div>
                        {/* <!-- /Portfolio Grid --> */}

                    </div>
                    {/* <!-- /Portfolio Content --> */}
                </div>
            </div>
        </section>
    )
}