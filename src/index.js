import React from "react";
import { render } from "react-dom";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./style.css";

const position = [-12.0711245, -77.0868577];

const map = (
  <Map center={position} zoom={13}>
    <TileLayer
      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </Map>
);

render(map, document.getElementById("root"));
