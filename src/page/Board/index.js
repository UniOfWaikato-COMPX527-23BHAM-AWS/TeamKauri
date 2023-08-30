// /* global google */

import "./index.css";

// import React, { useLayoutEffect, useRef } from "react";

const Board = () => {
  //   const mapRef = useRef(null);

  //   useLayoutEffect(() => {
  //     if (mapRef.current) {
  //       const map = new google.maps.Map(mapRef.current, {
  //         center: { lat: -37.78686109999998, lng: 175.24842005820312 },
  //         zoom: 14,
  //       });

  //       google.maps.event.addListener(map, "click", function (event) {
  //         const lat = event.latLng.lat();
  //         const lng = event.latLng.lng();

  //         const geocoder = new google.maps.Geocoder();

  //         geocoder.geocode(
  //           { location: { lat, lng } },
  //           function (results, status) {
  //             if (status === "OK") {
  //               if (results[0]) {
  //                 alert("Clicked Location: " + results[0].formatted_address); // Or update to your desired output.
  //               } else {
  //                 alert("No results found");
  //               }
  //             } else {
  //               alert("Geocoder failed due to: " + status);
  //             }
  //           }
  //         );
  //       });
  //     }
  //   }, []); // 这是 useLayoutEffect 的依赖数组闭合
  return (
    <div className="homepage">
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50450.170088683895!2d175.24842005820312!3d-37.78686109999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d192650fef661%3A0x3d7f4d33e4d197ad!2z5oCA5Y2h5omY5aSn5a2m!5e0!3m2!1szh-CN!2snz!4v1692920372450!5m2!1szh-CN!2snz"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="data-section">
        <div className="data-search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="data-item">
          Liveability Score: <span id="liveability-score"></span>
          <span className="liveability-result"></span>
        </div>
        <div className="data-item">
          Nearest Public Transport: <span id="nearest-public-transport"></span>
          <span className="transport-result"></span>
        </div>
        <div className="data-item">
          Nearest Waterfront: <span id="nearest-waterfront"></span>
          <span className="waterfront-result"></span>
        </div>
        <div className="data-item">
          Nearest Public Park: <span id="nearest-public-park"></span>
          <span className="Park-result"></span>
        </div>
        <div className="data-item">
          Nearest Cafe: <span id="nearest-cafe"></span>
          <span className="cafe-result"></span>
        </div>
        <div className="data-item">
          Nearest Healthcare: <span id="nearest-healthcare"></span>
          <span className="healthcare-result"></span>
        </div>
        <div className="data-item">
          Nearest Education: <span id="nearest-education"></span>
          <span className="education-result"></span>
        </div>
        <div className="data-item">
          Nearest Grocer: <span id="nearest-grocer"></span>
          <span className="grocer-result"></span>
        </div>
      </div>
    </div>
  );
};

export default Board;
