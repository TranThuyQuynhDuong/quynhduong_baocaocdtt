import { Link } from "react-router-dom";
function Contact() {
    return (


        <section class="myfooter bg-dark text-white py-3">

            <div class="container">
                <h3 className="text-center mb-4 text-info   ">*** CONTACT ***</h3>
                <div class="row">
                    <div class="col-md-3 text-warning bg-dark">
                        <h5 >TÀI KHOẢN</h5>
                        <ul class="menu_ft">

                            <li><Link href="/">Trang chủ</Link></li>

                            <li><Link href="/gioi-thieu">Giới thiệu</Link></li>

                            <li><Link href="/collections/all">Sản phẩm</Link></li>

                            <li><Link href="/tin-tuc">Tin tức</Link></li>

                            <li><Link href="/lien-he">Liên hệ</Link></li>

                        </ul>
                    </div>
                    <div class="col-md-3 text-warning bg-dark">
                        <h5>CHÍNH SÁCH</h5>
                        <ul class="menu_ft">

                            <li><Link href="/">Trang chủ</Link></li>

                            <li><Link href="/gioi-thieu">Giới thiệu</Link></li>

                            <li><Link href="/collections/all">Sản phẩm</Link></li>

                            <li><Link href="/tin-tuc">Tin tức</Link></li>

                            <li><Link href="/lien-he">Liên hệ</Link></li>

                        </ul>
                    </div>
                    <div class="col-md-3 text-warning bg-dark">
                        <h5>ĐIỀU KHOẢN</h5>
                        <ul class="menu_ft">

                            <li><Link href="/">Trang chủ</Link></li>

                            <li><Link href="/gioi-thieu">Giới thiệu</Link></li>

                            <li><Link href="/collections/all">Sản phẩm</Link></li>

                            <li><Link href="/tin-tuc">Tin tức</Link></li>

                            <li><Link href="/lien-he">Liên hệ</Link></li>

                        </ul>
                    </div>
                    <div class="col-md-3 text-warning bg-dark">
                        <h5>LIÊN HỆ</h5>
                        <ul class="menu_ft">

                            <li><Link href="/">Trang chủ</Link></li>

                            <li><Link href="/gioi-thieu">Giới thiệu</Link></li>

                            <li><Link href="/collections/all">Sản phẩm</Link></li>

                            <li><Link href="/tin-tuc">Tin tức</Link></li>

                            <li><Link href="/lien-he">Liên hệ</Link></li>

                        </ul>
                    </div>

                </div>
                <hr />
                <div class="row">
                    <div class="col">
                        <Link>
                            <img id="myImage" src="https://www.canva.com/design/DAFvPu5ky0A/GTwAMUvpHMy4PgVqaAOq_A/edit" alt="" />
                        </Link>
                        <div class="address py-2"><b>Địa chỉ:</b>
                            2582, tổ 4, phường Phước Long B, Thủ Đức, TpHCM.
                        </div>
                        <div class="phone py-1"><b>Hotline:</b>

                            <Link href="tel:19006750" title="Phone">0582827247</Link>
                        </div>
                        <div class="email py-1"><b>Email:</b>

                            <Link href="mailto:support@sapo.vn">duongtran3858@gmail.com</Link>
                        </div>
                        <div class="clock">Open: 10:00 AM Close 6:00 PM

                        </div>



                    </div>


                    <div class="col-md-6 text-warning bg-dark">
                        <h5>NHẬN TIN KHUYẾN MÃI</h5>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Email của bạn" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span class="input-group-text text-white bg-danger" id="basic-addon2">Đăng kí</span>
                        </div>
                        <div class="col-mb-3 text-warning bg-dark border border-warning border border-2  ">
                            <div className="contact-form">
                                <form>
                                    {/* Contact Detail */}
                                    <div className="form-detail">
                                        {/* Input Name */}
                                        <div className="row">
                                            <div className="col my-3">
                                                <input type="text" className="form-control" placeholder="Fisrt Name" />
                                            </div>
                                            <div className="col my-3">
                                                <input type="text" className="form-control" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        {/* Email Address */}
                                        <div className="form-input">
                                            <input type="text" className="form-control" placeholder="Email Address" />
                                        </div>
                                        {/* Message */}
                                        <div className="form-input my-3">
                                            <textarea className="form-control" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    {/* Contact Button */}
                                    <div className="form-button my-3">
                                        <button type="button" class="btn btn-outline-warning  ">Send</button>

                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="py-3">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1544.0033599506303!2d106.68743110277556!3d10.823734102324432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528faed5a816f%3A0xd2ab8e2a4c5dab77!2zUE5KIE5leHQgR8OyIFbhuqVw!5e0!3m2!1svi!2s!4v1687947586328!5m2!1svi!2s"
                            width="1300" height="300" style={{ marginRight: 'em' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>



                </div>
            </div>


        </section>
    );
}

export default Contact;