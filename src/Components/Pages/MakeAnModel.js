import React from 'react'
import car_01 from '../../Assets/images/car_01.jpg'
import car_02 from '../../Assets/images/car_02.jpg'
import car_03 from '../../Assets/images/car_03.jpg'
import car_04 from '../../Assets/images/car_04.jpg'

function MakeAnModel() {
  return (
    <>
        <section className="pt_80 pt_sm_50">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center pb_30">
                        <h2 className="title_combo title_Center">Makes and Models Directory</h2>
                    </div>
                    <div className="col-12">
                        <ul className="postTopOption">
                            <li className="post_search">
                                <input type="text" name="" placeholder="Search for a make or model"/>
                            </li>
                            <li className="">
                                <button type="button" className="gry_btn" data-toggle="modal" data-target="#FiltersModal"><i className="fa-solid fa-filter mr-2"></i> Filters</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="modal fade" id="FiltersModal">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">

                        
                        <div className="modal-header border-0">
                            <h4 className="modal-title">Filters</h4>
                            <button type="button" className="close" data-dismiss="modal"><i className="fa-solid fa-xmark"></i></button>
                        </div>

                       
                        <div className="modal-body">
                            
                            <form>
                                <div className="row row_gap_5">
                                    <div className="col-12 col-md-6">
                                        <label>Vehicle Year</label>
                                        <div className="form-group">
                                            <input type="text" name="" className="field" placeholder="1900"/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label>To</label>
                                        <div className="form-group">
                                            <input type="text" name="" className="field" placeholder="2023"/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label>List Date</label>
                                        <div className="form-group">
                                            <select className="field">
                                                <option>All Time</option>
                                                <option>7 Days</option>
                                                <option>Last Month</option>
                                                <option>Last Year</option>
                                                <option>Last 2 Year</option>
                                                <option>Last 5 Year</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label>Result</label>
                                        <div className="form-group">
                                            <select className="field">
                                                <option>All</option>
                                                <option>Sold Only</option>
                                                <option>Reserve Not Met</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label>High Bid</label>
                                        <div className="form-group">
                                            <select className="field">
                                                <option>No Min</option>
                                                <option>$5k</option>
                                                <option>#10k</option>
                                                <option>#15k</option>
                                                <option>#20k</option>
                                                <option>#25k</option>
                                                <option>#30k</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label>To</label>
                                        <div className="form-group">
                                            <select className="field">
                                                <option>No Max</option>
                                                <option>$5k</option>
                                                <option>#10k</option>
                                                <option>#15k</option>
                                                <option>#20k</option>
                                                <option>#25k</option>
                                                <option>#30k</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-12">
                                        <label>Exclude Words / Models / Tags</label>
                                        <div className="form-group">
                                            <input type="text" name="" className="field" placeholder="Enter"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn">Filters</button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="pt_40">
            <div className="container">
                <div className="row">
                    <div className="col-12 pb-3">
                        <h3 className="title_combo">Acura</h3>
                    </div>

                    <div className="col-12">
                        <div className="makes_Slide arrowTop_Slide">
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_01} alt="car_01"/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">Acura Integra</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_02}/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">Acura Integra Type R</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_01} alt="car_03"/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">Acura Legend</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_04} alt="car_04"/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">Acura Legend</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_01} alt="car_01"/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">Acura NSX NA1/NA2</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_02} alt="car_02"/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">Acura NSX NC1</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_03} alt="car_03"/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">Acura RSX</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="pt_40">
            <div className="container">
                <div className="row">
                    <div className="col-12 pb-3">
                        <h3 className="title_combo">Alfa Romeo</h3>
                    </div>

                    <div className="col-12">
                        <div className="makes_Slide arrowTop_Slide">
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_01} alt="car_01"/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">Alfa Romeo 105 Series Sedan</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_02} alt="car_02"/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">Alfa Romeo 105/115 Series Coupe</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_03} alt="car_03"/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">Alfa Romeo 105/115 Series Spider</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_04} alt="car_04"/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">Alfa Romeo 164</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_01} alt="car_01"/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">Alfa Romeo 4C</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_02} alt="car_02"/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">Alfa Romeo 75/Milano</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_03} alt="car_03"/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">Alfa Romeo 8C</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="pt_40">
            <div className="container">
                <div className="row">
                    <div className="col-12 pb-3">
                        <h3 className="title_combo">AMC</h3>
                    </div>

                    <div className="col-12">
                        <div className="makes_Slide arrowTop_Slide">
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_01} alt="car_01"/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">AMC AMX</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_02} alt="car_02"/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">AMC Gremlin</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_03} alt="car_03"/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">AMC Javelin</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_04} alt="car_04"/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">AMC Pacer</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="pt_40">
            <div className="container">
                <div className="row">
                    <div className="col-12 pb-3">
                        <h3 className="title_combo">Bentley</h3>
                    </div>
                    
                    <div className="col-12">
                        <div className="makes_Slide arrowTop_Slide">
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_01} alt="car_01"/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">Bentley 3.5 Litre & 4 1/4 Litre</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_02} alt="car_02"/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">Bentley Arnage</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_03} alt="car_03"/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">Bentley Azure</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_04} alt="car_04"/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">Bentley Continental Flying Spur</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_01} alt="car_01"/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">Bentley Continental GT</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_04} alt="car_04"/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">Bentley Mark VI</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_03} alt="car_03"/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">Bentley S-Type</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_04} alt="car_04"/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">Bentley SZ Coupe</a></h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card_post">
                                    <div className="card_postImg">
                                        <button type="button" className="watchedIc" data-toggle="modal" data-target="#loginModal"><span data-toggle="tooltip" data-placement="bottom" title="Notify me when one is listed"><i className="fa-solid fa-bell"></i></span></button>
                                        <img src={car_03} alt="car_03"/>
                                    </div>
                                    <div className="card_postInfo">
                                        <h6><a href="#">Bentley SZ Saloon</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default MakeAnModel