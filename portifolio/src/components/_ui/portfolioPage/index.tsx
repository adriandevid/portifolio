export default function PortifolioPage() {
    return (
        <div id="ajax-page" className="ajax-page-content">
            <div className="ajax-page-wrapper">
                <div className="ajax-page-nav">
                    <div className="nav-item ajax-page-prev-next">
                        <a className="ajax-page-load" href="portfolio-5.html"><i className="zmdi zmdi-chevron-left"></i></a>
                        <a className="ajax-page-load" href="portfolio-2.html"><i className="zmdi zmdi-chevron-right"></i></a>
                    </div>
                    <div className="nav-item ajax-page-close-button">
                        <a id="ajax-page-close-button" href="#"><i className="zmdi zmdi-close"></i></a>
                    </div>
                </div>

                <div className="ajax-page-title">
                    <h1>Siae.sab - adrian devid</h1>
                </div>

                <div className="row">
                    <div className="col-sm-7 col-md-7 portfolio-block">
                        {/* <div className="owl-carousel portfolio-page-carousel">
                            <div className="item">
                               
                            </div>
                        </div> */}
                         <img src="images/portfolio/sab.png" alt="" />

                        {/* <Script type="text/javascript" src="/js/ui/portfoliopage.js" /> */}
                    </div>

                    <div className="col-sm-5 col-md-5 portfolio-block">
                        {/* <!-- Project Description --> */}
                        <div className="block-title">
                            <h3>Description</h3>
                        </div>
                        <ul className="project-general-info">
                            <li><p><i className="fa fa-user"></i> Adrian Devid</p></li>
                            <li><p><i className="fa fa-globe"></i> <a href="https://seduc.se.gov.br/" target="_blank">https://seduc.se.gov.br/</a></p></li>
                            <li><p><i className="fa fa-calendar"></i> 08 March, 2024</p></li>
                        </ul>

                        <p className="text-justify">Sistema de avaliação diagnóstica server para registro e atendimento de alunos para um processo de analise psicologico e social.</p>
                        {/* <!-- /Project Description --> */}

                        {/* <!-- Technology --> */}
                        <div className="tags-block">
                            <div className="block-title">
                                <h3>Technology</h3>
                            </div>
                            <ul className="tags">
                                <li><a>HTML5</a></li>
                                <li><a>CSS3</a></li>
                                <li><a>Ajax</a></li>
                                <li><a>Next Js</a></li>
                                <li><a>API - .net core</a></li>
                            </ul>
                        </div>
                        {/* <!-- /Technology --> */}

                        {/* <!-- Share Buttons --> */}
                        <div className="btn-group share-buttons">
                            <div className="block-title">
                                <h3>Share</h3>
                            </div>
                            <a href="#" target="_blank" className="btn"><i className="fa fa-facebook"></i> </a>
                            <a href="#" target="_blank" className="btn"><i className="fa fa-twitter"></i> </a>
                            <a href="#" target="_blank" className="btn"><i className="fa fa-dribbble"></i> </a>
                        </div>
                        {/* <!-- /Share Buttons --> */}
                    </div>
                </div>
            </div>
        </div>
    )
}