import React from "react";
import "./Card.css";

import ReserveModal from "./ReserveModal";
import ScheduleModal from "./ScheduleModal";

export default function Card(props) {

  
  return (
    <>
      <div className="CardContainer">
        <img
          src="https://ichef.bbci.co.uk/news/999/cpsprodpb/15951/production/_117310488_16.jpg"
          alt=""
          className="CardImg"
        />

        <div className="CardDis">
          <div className="title">
            <h1 className="mb-0">title</h1>
            <span>location</span>
          </div>
          <div className="details">
            <span>details</span>
          </div>
          <div className="amenities">
            <span className="">amenities </span>
            <span className="">amenities </span>
            <span className="">amenities </span>
            <span className="">amenities </span>
          </div>
          <div>
            <a href="/s">view directions</a>
          </div>
        </div>

        <div className="CardPrice">
          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <div>
              <span style={{ color: "lightgray", fontSize: "15px" }}>
                starts from
              </span>
              <br></br>
              <span
                style={{
                  fontFamily: "Arial",
                  fontWeight: "bolder",
                  fontSize: "30px",
                }}
              >
                $1300
              </span>
            </div>
            <div><i class="fa-regular fa-bookmark"></i></div>
          </div>
          <div>
            <ScheduleModal/>
            <ReserveModal/>
          </div>
        </div>
      </div>
      <div className="container">
  </div>
    </>
  );
}
