import "./index.css";

import React, { useEffect, useState } from "react";
//import * as maptilersdk from "@maptiler/sdk";

const Board = () => {
  const [cityData, setCityData] = useState(null);
  const [selectedCity, setSelectedCity] = useState("hamilton");
  const cityMapUrls = {
    hamilton:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50450.170088683895!2d175.24842005820312!3d-37.78686109999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d192650fef661%3A0x3d7f4d33e4d197ad!2z5oCA5Y2h5omY5aSn5a2m!5e0!3m2!1szh-CN!2snz!4v1692920372450!5m2!1szh-CN!2snz",
    auckland:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204306.70676900868!2d174.54096922304123!3d-36.85942189338268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47fb5a9ce6fb%3A0x500ef6143a29917!2z5aWl5YWL5YWw!5e0!3m2!1szh-CN!2snz!4v1693730524601!5m2!1szh-CN!2snz",
  };

  // useEffect(() => {
  //   maptilersdk.config.apiKey = "cYMJYk8wKCLFaEl7nRtm";
  //   const map = new maptilersdk.Map({
  //     container: "map", // container id
  //     style: maptilersdk.MapStyle.STREETS,
  //     center: [175.3153, -37.7871], // starting position [lng, lat]
  //     zoom: 10, // starting zoom
  //   });

  //   map.on("load", () => {
  //     // 在地图加载完毕后添加数据源

  //     // 添加第一个数据源
  //     map.addSource("my-data", {
  //       type: "vector",
  //       url: "https://api.maptiler.com/tiles/v3/tiles.json?key=cYMJYk8wKCLFaEl7nRtm",
  //     });

  //     // 添加第二个数据源
  //     map.addSource("my-data-geojson", {
  //       type: "geojson",
  //       data: {
  //         type: "Feature",
  //         geometry: {
  //           type: "Point",
  //           coordinates: [175.30838, -37.78865],
  //         },
  //         properties: {
  //           title: "warehouse",
  //           "marker-symbol": "monument",
  //         },
  //       },
  //     });

  //     // 继续在你原先的代码后面添加以下代码：

  //     // 添加标记图层
  //     map.addLayer({
  //       id: "my-marker",
  //       type: "symbol", // 使用符号类型，这样可以添加图标或文字作为标记
  //       source: "my-data-geojson", // 指定数据源
  //       layout: {
  //         "icon-image": "marker-15", // 这是一个内置的图标名称，你可以更改为其他图标或使用自己的图标URL
  //         "icon-size": 1.5, // 设置图标大小
  //         "text-field": "{title}", // 将从数据源的properties中读取'title'属性并显示在图标旁边
  //         "text-offset": [0, 1.5], // 调整文字与图标之间的距离
  //       },
  //     });
  //   });

  //   // Optional: Return a cleanup function if necessary to remove map resources when component unmounts
  //   return () => {
  //     map.remove();
  //   };
  // }, []);

  useEffect(() => {
    fetch(
      `http://13.239.114.7:5000/Nearest/getNearest?cityName=${selectedCity}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCityData(data[0]); // 假设返回的是一个数组并取第一个元素
      })
      .catch((error) => console.error("Failed to fetch city data:", error));
  }, [selectedCity]);
  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className="homepage">
      <div className="map-section">
        <iframe
          src={cityMapUrls[selectedCity.toLowerCase()]}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="data-section">
        <div className="data-search">
          <p>Choose your prefered location</p>
          <select onChange={handleCityChange} value={selectedCity}>
            <option value="hamilton">Hamilton</option>
            <option value="Auckland">Auckland</option>
          </select>
        </div>

        {cityData && (
          <>
            {" "}
            <div className="data-item">
              Liveability Score:{" "}
              <span id="liveability-score">{cityData.liveabilityscore}</span>
            </div>
            <div className="data-item">
              Transportation Score:{" "}
              <span id="publictransport-score">{cityData.publictransport}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Board;
