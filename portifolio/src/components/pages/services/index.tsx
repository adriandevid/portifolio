export default function Services() {
    return (
        <section className="pt-page" data-id="services">
              <div className="section-inner custom-page-content">
                <div className="page-header color-1">
                  <h2>Services</h2>
                </div>
                <div className="page-content">
                  {/* <!-- My Services --> */}
                  <div className="row">
                    <div className="col-sm-12 col-md-12">
                      <div className="block-title">
                        <h3>My <span>Services</span></h3>
                      </div>
                    </div>

                    <div className="col-sm-6 col-md-3">
                      <div className="service-block"> 
                        <div className="service-info">
                          {/* <!--<i className="service-icon fa fa-shopping-cart"></i>--> */}
                          <div className="service-image">
                            <img src="images/service/web_design_icon.png" alt="Responsive Design" className="mCS_img_loaded"/>
                          </div>
                          <h4>Backend Development</h4>
                          <p>Building robust backend systems using C#, .NET Core, and SQL databases (e.g., SQL Server) to handle data processing, business logic, and API integrations.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <div className="service-block"> 
                        <div className="service-info">
                          <div className="service-image">
                            <img src="images/service/creativity_icon.png" alt="Photography" className="mCS_img_loaded"/>
                          </div>
                          <h4>Frontend Development</h4>
                          <p>Creating responsive and interactive user interfaces using HTML, CSS, JavaScript (e.g., Angular, React, or Vue.js), and integrating them seamlessly with backend services.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <div className="service-block"> 
                        <div className="service-info">
                          <div className="service-image">
                            <img src="images/service/api.png" alt="Creativity" className="mCS_img_loaded"/>
                          </div>
                          <h4>API Development and Integration</h4>
                          <p>Designing and implementing RESTful APIs using ASP.NET Core for communication between different layers of applications or external services.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                      <div className="service-block"> 
                        <div className="service-info">
                          <div className="service-image">
                            <img src="images/service/advetising_icon.png" alt="Advetising" className="mCS_img_loaded"/>
                          </div>
                          <h4>Consulting and Architecture Design</h4>
                          <p>Offering expert advice on software architecture, technology stack selection, scalability planning, and best practices for .NET development projects.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of My Services --> */}

                  {/* <!-- Clients --> */}
                  {/* <!-- <div className="row">
                    <div className="col-sm-12 col-md-12">
                      <div className="block-title">
                        <h3>Clients</h3>
                      </div>

                      <div className="col-sm-4 col-md-2 subpage-block">
                        <div className="client-block">
                          <a href="#" target="_blank"><img src="images/clients/client_1.png" alt="image" className="mCS_img_loaded"></a/>
                        </div>
                      </div>

                      <div className="col-sm-4 col-md-2 subpage-block">
                        <div className="client-block">
                          <a href="#" target="_blank"><img src="images/clients/client_2.png" alt="image" className="mCS_img_loaded"></a/>
                        </div>
                      </div>

                      <div className="col-sm-4 col-md-2 subpage-block">
                        <div className="client-block">
                          <a href="#" target="_blank"><img src="images/clients/client_3.png" alt="image" className="mCS_img_loaded"></a/>
                        </div>
                      </div>

                      <div className="col-sm-4 col-md-2 subpage-block">
                        <div className="client-block">
                          <a href="#" target="_blank"><img src="images/clients/client_4.png" alt="image" className="mCS_img_loaded"></a/>
                        </div>
                      </div>

                      <div className="col-sm-4 col-md-2 subpage-block">
                        <div className="client-block">
                          <a href="#" target="_blank"><img src="images/clients/client_5.png" alt="image" className="mCS_img_loaded"></a/>
                        </div>
                      </div>

                      <div className="col-sm-4 col-md-2 subpage-block">
                        <div className="client-block">
                          <a href="#" target="_blank"><img src="images/clients/client_6.png" alt="image" className="mCS_img_loaded"></a/>
                        </div>
                      </div>

                    </div>
                  </div> --> */}
                  {/* <!-- End of Clients --> */}

                  {/* <!-- Testimonials --> */}
                  <div className="row">
                    <div className="col-sm-12 col-md-12">
                      <div className="block-title">
                        <h3>Testimonials</h3>
                      </div>


                      <div className="testimonials owl-carousel block">
                        {/* <!-- Testimonial 1 --> */}
                        <div className="testimonial-item">
                          {/* <!-- Testimonial Author --> */}
                          <div className="testimonial-credits">
                            {/* <!-- Picture --> */}
                            <div className="testimonial-picture">
                              <img src="images/testimonials/testimonial_photo_1.jpg" alt=""/>
                            </div>              
                            {/* <!-- /Picture --> */}
                            {/* <!-- Testimonial author information --> */}
                            <div className="testimonial-author-info">
                              <p className="testimonial-author">Maria Richardson</p>
                              <p className="testimonial-firm">Lindsley's Lumber</p>
                            </div>
                          </div>
                          {/* <!-- /Testimonial author information --> */}
                          {/* <!-- Testimonial Content --> */}
                          <div className="testimonial-content">
                            <div className="testimonial-text">
                              <p>"Phasellus eu nunc tincidunt, ultricies elit vitae, pretium eros. Sed sed ipsum sed massa."</p>
                            </div>
                          </div>            
                          {/* <!-- /Testimonial Content -->                 */}
                        </div>
                        {/* <!-- End of Testimonial 1 --> */}

                        {/* <!-- Testimonial 2 --> */}
                        <div className="testimonial-item">
                          {/* <!-- Testimonial Author --> */}
                          <div className="testimonial-credits">
                            {/* <!-- Picture --> */}
                            <div className="testimonial-picture">
                              <img src="images/testimonials/testimonial_photo_2.jpg" alt=""/>
                            </div>              
                            {/* <!-- /Picture --> */}
                            {/* <!-- Testimonial author information --> */}
                            <div className="testimonial-author-info">
                              <p className="testimonial-author">John Doe</p>
                              <p className="testimonial-firm">Apple Inc.</p>
                            </div>
                          </div>
                          {/* <!-- /Testimonial author information --> */}
                          {/* <!-- Testimonial Content --> */}
                          <div className="testimonial-content">
                            <div className="testimonial-text">
                              <p>"Vivamus porta dapibus tristique. Suspendisse et arcu eget nisi convallis eleifend nec ac lorem.</p>
                            </div>
                          </div>            
                          {/* <!-- /Testimonial Content -->                 */}
                        </div>
                        {/* <!-- End of Testimonial 2 --> */}

                        {/* <!-- Testimonial 3 --> */}
                        <div className="testimonial-item">
                          {/* <!-- Testimonial Author --> */}
                          <div className="testimonial-credits">
                            {/* <!-- Picture --> */}
                            <div className="testimonial-picture">
                              <img src="images/testimonials/testimonial_photo_3.jpg" alt=""/>
                            </div>              
                            {/* <!-- /Picture --> */}
                            {/* <!-- Testimonial author information --> */}
                            <div className="testimonial-author-info">
                              <p className="testimonial-author">George McQueen</p>
                              <p className="testimonial-firm">Harmony House</p>
                            </div>
                          </div>
                          {/* <!-- /Testimonial author information --> */}
                          {/* <!-- Testimonial Content --> */}
                          <div className="testimonial-content">
                            <div className="testimonial-text">
                              <p>"Aliquam congue auctor lectus sed fermentum. Nulla ultricies tellus quis sapien lacinia egestas."</p>
                            </div>
                          </div>            
                          {/* <!-- /Testimonial Content -->                 */}
                        </div>
                        {/* <!-- End of Testimonial 3 --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of Tesimonials --> */}

                  {/* <!-- Pricing --> */}
                  <div className="row">
                    <div className="col-sm-12 col-md-12">
                      <div className="block-title">
                        <h3>Pricing</h3>
                      </div>

                      <div className="lm-pricing row clearfix">
                        <div className="lm-package-wrap col-md-4 default-col">
                          <div className="lm-package">
                            <div className="lm-heading-row">
                              <span>Frontend</span>
                            </div>
                            <div className="lm-pricing-row">
                              <span>$30</span>
                              <small>per hour</small>
                            </div>

                            <div className="lm-button-row">
                              <a href="#" target="_self" className="btn btn-primary">send proposal</a>
                            </div>
                            <div className="lm-default-row">
                              Landing Pages
                            </div>
                            <div className="lm-default-row">
                              High Level Interfaces using Nextjs
                            </div>
                            <div className="lm-default-row">
                              Maintenance
                            </div>
                            <div className="lm-default-row">
                            </div>
                          </div>
                        </div>

                        <div className="lm-package-wrap col-md-4 highlight-col ">
                          <div className="lm-package">
                            <div className="lm-heading-row">
                              <span>Backend</span>
                            </div>
                            <div className="lm-pricing-row">
                              <span>$50</span>
                              <small>per hour</small>
                            </div>
                            
                            <div className="lm-button-row">
                              <a href="#" target="_self" className="btn btn-primary">send proposal</a>
                            </div>
                            <div className="lm-default-row">
                              API development
                            </div>
                            <div className="lm-default-row">
                              Microservices Structure and development
                            </div>
                            <div className="lm-default-row">
                              Automations with python
                            </div>
                            <div className="lm-default-row">
                              Maintenance MVC legacy using .net
                            </div>
                            <div className="lm-default-row">
                            </div>
                          </div>
                        </div>

                        <div className="lm-package-wrap col-md-4 default-col ">
                          <div className="lm-package">
                            <div className="lm-heading-row">
                              <span>Consulting and Architecture Design</span>
                            </div>
                            
                            <div className="lm-pricing-row">
                              <span>$0</span>
                              <small>to match - per hour</small>
                            </div>

                            <div className="lm-button-row">
                              <a href="#" target="_self" className="btn btn-primary">send proposal</a>
                            </div>

                            <div className="lm-default-row">
                              Microservices Structure
                            </div>
                            <div className="lm-default-row">
                              Software design and Architecture
                            </div>
                            <div className="lm-default-row">
                              Maintenance of software architecture legacy
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End of Pricing --> */}
                </div>
              </div>
            </section>
    )
}