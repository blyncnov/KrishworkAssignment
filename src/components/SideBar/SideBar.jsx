import React from 'react'

import { GrOverview } from "react-icons/gr"
import {
  AiOutlineCalendar, AiOutlineMessage,
  AiTwotoneSetting, AiOutlineBars,
  AiOutlineDown
} from "react-icons/ai"
import { GiHumanTarget } from "react-icons/gi"
import { MdPayment } from "react-icons/md"
import { FaTooth } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"

import {
  SideBarContainer,
  FooterProfileDetails,
  SideBarListings
} from "./SidebarStyle"

const SideBar = () => {
  return (
    <>
      <SideBarContainer>
        <div className="big">
          <div>

            <div className="LogoSideSplit">
              <FaTooth style={{ fontSize: "3em", color: "blue" }} />
              <div className="descriptionLogo">
                <h1>Zendeta</h1>
                <h6>Cabut gigi tanpa sakit</h6>
              </div>
              <AiOutlineBars style={{ fontSize: "1.5em", color: "grey", fontWeight: "900" }} />
            </div>

            <br />

            <SideBarListings>
              <ul>

                <div className="side">
                  <GrOverview />
                  <li>Overview</li>
                </div>

                <div className="side">
                  <AiOutlineCalendar />
                  <li>Calender</li>
                </div>

                <div className="side">
                  <GiHumanTarget />
                  <li><a href="/patient/Cooper" style={{ color: "inherit", textDecoration: "none" }}>Patient List</a></li>
                </div>

                <div className="side">
                  <AiOutlineMessage />
                  <li>Messages</li>
                </div>

                <div className="side">
                  <MdPayment />
                  <li>Payment Information</li>
                </div>

                <div className="side">
                  <AiTwotoneSetting />
                  <li>Settings</li>
                </div>

              </ul>
            </SideBarListings>

          </div>

          <FooterProfileDetails >
            <div className="help">
              <GrOverview />
              <h4>Help ?</h4>
            </div>
            <br />
            <hr style={{ width: "200px", border: ".5px solid #ebebeb" }} />
            <br />

            <div className="FooterLogo">

              <CgProfile style={{ fontSize: "2em" }} />

              <div className="doctorprofile">
                <h3>Drg. Adam H</h3>
                <h6>Dentist</h6>
              </div>
              <AiOutlineDown style={{ fontSize: "1.5em", fontWeight: "bold" }} />

            </div>
          </FooterProfileDetails>
        </div>
      </SideBarContainer>

    </>
  )
}

export default SideBar