import React from 'react'
import img_01 from '../../Assets/images/img_01.jpg'
import img_02 from '../../Assets/images/img_02.jpg'
import img_03 from '../../Assets/images/img_03.jpg'
import img_04 from '../../Assets/images/img_04.jpg'
import img_05 from '../../Assets/images/img_05.jpg'
import img_06 from '../../Assets/images/img_06.jpg'
function AuctionPremium() {
  return (
    <div>
        <section className="ptb_80 pt_sm_50">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center pb_30">
                        <h2 className="title_combo title_Center">Premium Listings <span>20 AUCTIONS NOW LIVE</span></h2>
                    </div>
                </div>

                <div className="row pt-4 row_gridList premiumListings">
                    <div className="col-12 col-md-6 pb-3">
                        <div className="card_post">
                            <div className="card_postImg">
                                <button type="button" className="watchedIc"><i className="fa-solid fa-star"></i></button>
                                <img src={img_01}/>
                            </div>
                            <div className="card_postInfo">
                                <h4><a href="detail.html">1968 Ferrari 330 GTC</a></h4>
                                <ul className="labelList">
                                    <li><label>Current Bid:</label> <span>$126,888</span></li>
                                    <li><label>Time Remaining:</label> <span id="demo"></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pb-3">
                        <div className="card_post">
                            <div className="card_postImg">
                                <button type="button" className="watchedIc"><i className="fa-solid fa-star"></i></button>
                                <img src={img_02}/>
                            </div>
                            <div className="card_postInfo">
                                <h4><a href="detail.html">1969 Lola T70 Mk.3B Coupe</a></h4>
                                <ul className="labelList">
                                    <li><label>Current Bid:</label> <span>$126,888</span></li>
                                    <li><label>Time Remaining:</label> <span>1d 1h 4m 7s</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pb-3">
                        <div className="card_post">
                            <div className="card_postImg">
                                <button type="button" className="watchedIc"><i className="fa-solid fa-star"></i></button>
                                <img src={img_03}/>
                            </div>
                            <div className="card_postInfo">
                                <h4><a href="detail.html">12k-Mile 2009 Aston Martin DBS 6-Speed</a></h4>
                                <ul className="labelList">
                                    <li><label>Current Bid:</label> <span>$126,888</span></li>
                                    <li><label>Time Remaining:</label> <span>1d 1h 4m 7s</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pb-3">
                        <div className="card_post">
                            <div className="card_postImg">
                                <button type="button" className="watchedIc"><i className="fa-solid fa-star"></i></button>
                                <img src={img_04}/>
                            </div>
                            <div className="card_postInfo">
                                <h4><a href="detail.html">12k-Mile 2009 Aston Martin DBS 6-Speed</a></h4>
                                <ul className="labelList">
                                    <li><label>Current Bid:</label> <span>$126,888</span></li>
                                    <li><label>Time Remaining:</label> <span>1d 1h 4m 7s</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pb-3">
                        <div className="card_post">
                            <div className="card_postImg">
                                <button type="button" className="watchedIc"><i className="fa-solid fa-star"></i></button>
                                <img src={img_05}/>
                            </div>
                            <div className="card_postInfo">
                                <h4><a href="detail.html">12k-Mile 2009 Aston Martin DBS 6-Speed</a></h4>
                                <ul className="labelList">
                                    <li><label>Current Bid:</label> <span>$126,888</span></li>
                                    <li><label>Time Remaining:</label> <span>1d 1h 4m 7s</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pb-3">
                        <div className="card_post">
                            <div className="card_postImg">
                                <button type="button" className="watchedIc"><i className="fa-solid fa-star"></i></button>
                                <img src={img_06}/>
                            </div>
                            <div className="card_postInfo">
                                <h4><a href="detail.html">12k-Mile 2009 Aston Martin DBS 6-Speed</a></h4>
                                <ul className="labelList">
                                    <li><label>Current Bid:</label> <span>$126,888</span></li>
                                    <li><label>Time Remaining:</label> <span>1d 1h 4m 7s</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AuctionPremium