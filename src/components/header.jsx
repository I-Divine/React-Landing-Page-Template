import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container" style={{ paddingLeft: "0px" }}>
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 className="">
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="http://74.50.93.182/ras_app/login.jsp"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Get started
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
