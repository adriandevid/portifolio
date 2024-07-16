export default function Home() {
    return (
        <section className="pt-page" data-id="home">
            <div className="section-inner start-page-content">
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-4 col-md-4 col-lg-4">
                    <div className="photo">
                      <img src="images/photo.png" alt="" />
                    </div>
                  </div>

                  <div className="col-sm-8 col-md-8 col-lg-8">
                    <div className="title-block">
                      <h1>Adrian Devid</h1>
                      <div className="owl-carousel text-rotation">
                        <div className="item">
                          <div className="sp-subtitle">Developer</div>
                        </div>
                        <div className="item">
                          <div className="sp-subtitle">Full-stack developer</div>
                        </div>
                      </div>
                    </div>

                    <div className="social-links">
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-instagram"></i></a>
                      <a href="#"><i className="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="page-content">
                <div className="row">

                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <div className="about-me">
                      <div className="block-title">
                        <h3>About <span>Me</span></h3>
                      </div>
                      <p>Meet Adrian Devid, a skilled full-stack developer specializing in .NET technologies. With a robust proficiency in .NET Core, C#, and .NET Framework, Adrian Devid brings a wealth of experience and innovation to software development projects. Adrian Devid excels in leveraging .NET Core to build scalable and high-performance applications, ensuring efficient backend operations and seamless integration with frontend frameworks. Their deep understanding of C# allows them to write clean, maintainable code that meets the highest standards of software engineering.</p>
                    </div>
                    <div className="download-resume">
                      <a href="" className="btn btn-secondary">Download Resume</a>
                    </div>
                  </div>

                  <div className="col-sm-6 col-md-6 col-lg-6">
                    <ul className="info-list">
                      <li><span className="title">Age</span><span className="value">23</span></li>
                      <li><span className="title">Residence</span><span className="value">BRA</span></li>
                      <li><span className="title">Address</span><span className="value">Aracaju, SE</span></li>
                      <li><span className="title">e-mail</span><span className="value"><a href="mailto:email@example.com">adriandevid36@gmail.com</a></span></li>
                      <li><span className="title">Phone</span><span className="value">+55 (79) 99815-2202</span></li>
                      <li><span className="title">Freelance</span><span className="value available">Available</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )
}