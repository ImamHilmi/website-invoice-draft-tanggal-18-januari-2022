import React from 'react'
import "./FeaturedInfo.css"
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'

const FeaturedInfo = () => {
    return (
        <>
            <div className="featured">
                <div className="featuredItem">
                    <span className="featuredTitle">
                        Total Puchase Order
                    </span>
                    <div className="featuredNumberContainer">
                        <span className="featuredNumber">
                            1.234
                        </span>
                        <span className="featuredNumberRate">
                            +2.4% <ArrowUpward className="featuredIcon" /> 
                        </span>
                    </div>
                    <span className="featuredSub">
                        Compared to last month
                    </span>
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">
                        Total Unpaid
                    </span>
                    <div className="featuredNumberContainer">
                        <span className="featuredNumber">
                            15
                        </span>
                        <span className="featuredNumberRate">
                            -5.1% <ArrowDownward className="featuredIcon negative" /> 
                        </span>
                    </div>
                    <span className="featuredSub">
                        Compared to last month
                    </span>
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">
                        Ongoing Payment
                    </span>
                    <div className="featuredNumberContainer">
                        <span className="featuredNumber">
                            29
                        </span>
                        <span className="featuredNumberRate">
                            +4.6% <ArrowUpward className="featuredIcon" /> 
                        </span>
                    </div>
                    <span className="featuredSub">
                        Compared to last month
                    </span>
                </div>
            </div>
            <div className="featured">
                <div className="featuredItem">
                    <span className="featuredTitle">
                        Active Order
                    </span>
                    <div className="featuredNumberContainer">
                        <span className="featuredNumber">
                            105
                        </span>
                        <span className="featuredNumberRate">
                            +10.0% <ArrowUpward className="featuredIcon" /> 
                        </span>
                    </div>
                    <span className="featuredSub">
                        Compared to last month
                    </span>
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">
                        Late Payment
                    </span>
                    <div className="featuredNumberContainer">
                        <span className="featuredNumber">
                            3
                        </span>
                        <span className="featuredNumberRate">
                            -15.3% <ArrowDownward className="featuredIcon negative" /> 
                        </span>
                    </div>
                    <span className="featuredSub">
                        Compared to last month
                    </span>
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">
                        Approve
                    </span>
                    <div className="featuredNumberContainer">
                        <span className="featuredNumber">
                            25
                        </span>
                        <span className="featuredNumberRate">
                            -2.9% <ArrowDownward className="featuredIcon negative" /> 
                        </span>
                    </div>
                    <span className="featuredSub">
                        Compared to last month
                    </span>
                </div>
            </div>
        </>
    )
}

export default FeaturedInfo
