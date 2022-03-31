import React, { useEffect } from 'react'
import axios from 'axios'

// import { useParams } from "react-router-dom";

import { CgProfile } from "react-icons/cg"
import { AiFillPlusCircle } from "react-icons/ai"
import { RiAlarmWarningFill } from "react-icons/ri"
import { FaGreaterThan } from "react-icons/fa"

import {
  PatientListContainer, PatientProfileContainer,
  ProfileContainer, GridContainer, Divider, Section,
  Circle,
} from "./PatientStyle"

const PatientList = () => {
  // let params = useParams();
  const [GetResult, SetGetResult] = React.useState({})


  useEffect(() => {

    axios.get('https://619f39821ac52a0017ba467e.mockapi.io/patientDetails').then(response => {

      const result = response.data[0]

      SetGetResult(result)
    })

  }, [])

  console.log(GetResult)

  return (
    <>
      <PatientListContainer>
        <PatientProfileContainer>
          <div className="profile">
            <CgProfile style={{ fontSize: "2em" , color: "blue" }} />
            <h2>{GetResult.name}</h2>
          </div>

          <div className="amenities">
            <input type="text" placeholder="Search for a Patient" />
            <AiFillPlusCircle style={{ fontSize: "2em", color: "blue" }} />
            <RiAlarmWarningFill style={{ fontSize: "2em" }} />
          </div>
        </PatientProfileContainer>

        <hr style={{ border: ".5px solid #ebebeb" }} />
        <div className="patientTag">
          <h4>Patient List   {" "}  <span><FaGreaterThan /> {" "}{GetResult.name} </span>  </h4>
        </div>
        <hr style={{ border: ".5px solid #ebebeb" }} />

        <ProfileContainer>
          <GridContainer>
            <Section>
              <Divider>

                <Section>
                  <Divider style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Circle />
                    <h4>{GetResult.name}</h4>
                    <div className="data-set">
                      <div className="past">
                        <h1>{GetResult.Past}</h1>
                        <h4>Past</h4>
                      </div>

                      {"|"}

                      <div className="Upcoming">
                        <h1>{GetResult.Upcoming}</h1>
                        <h4>Upcoming</h4>
                      </div>
                    </div>

                    <button>Send Message</button>
                  </Divider>
                  <Divider>
                    <div className="alldata">
                      <div className="firstdata datas">
                        <h3>Gender</h3>
                        <h5>{GetResult.Gender}</h5>
                      </div>
                      <div className="seconddata datas">
                        <h3>Birthday</h3>
                        <h5>{GetResult.Birthday}</h5>
                      </div>
                      <div className="thirddata datas">
                        <h3>Phone Number</h3>
                        <h5>{GetResult?.["Phone Number"]}</h5>
                      </div>
                    </div>

                    <hr style={{ border: ".5px solid #ebebeb" }} />

                    <div className="alldata">
                      <div className="firstdata datas">
                        <h3>Street Address</h3>
                        <h5>{GetResult?.["Street Address"]}</h5>
                      </div>
                      <div className="seconddata datas">
                        <h3>City</h3>
                        <h5>{GetResult.City === "" ? GetResult.City : "Null"}</h5>
                      </div>
                      <div className="thirddata datas">
                        <h3>Zip Code</h3>
                        <h5>{GetResult?.["ZIP Code"]}</h5>
                      </div>
                    </div>

                    <hr style={{ border: ".5px solid #ebebeb" }} />

                    <div className="alldata">
                      <div className="firstdata datas">
                        <h3>Member Status</h3>
                        <h5>{GetResult?.["Member Status"]}</h5>
                      </div>
                      <div className="seconddata datas">
                        <h3>Registered Date</h3>
                        <h5>{GetResult?.["Register Date"]}</h5>
                      </div>
                      <div className="thirddata datas">
                        <h3>Email Address</h3>
                        <h5>{GetResult?.["e-email"]}</h5>
                      </div>
                    </div>
                  </Divider>
                </Section>
              </Divider>

              <Divider>
                <Section>
                  <Divider>
                    <h3>Notes</h3>
                  </Divider>
                </Section>
              </Divider>
            </Section>
            <br />
            <Section>
              <Divider>
                <h3>Root Canal Treatment</h3>
              </Divider>
              <Divider>
                <h3>Files and Documents</h3>
              </Divider>
            </Section>

          </GridContainer>
        </ProfileContainer>

      </PatientListContainer>

    </>
  )
}

export default PatientList