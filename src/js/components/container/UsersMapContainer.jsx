import React, { Component } from "react";
import { connect } from "react-redux";
import "ol/ol.css";
import { Map, View } from "ol";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer.js";
import OSM from "ol/source/OSM";
import GeoJSON from "ol/format/GeoJSON.js";
import { Vector as VectorSource } from "ol/source.js";

export class UsersMapContainer extends Component {
  constructor() {
    super();
    this.handleRefresh = this.handleRefresh.bind(this);
  }
  componentDidUpdate() {
      this.handleRefresh();
  }
  componentDidMount() {
    this.map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: [0, 0],
        zoom: 0
      })
    });
    this.vectorSource = new VectorSource({
      features: new GeoJSON().readFeatures(this.props.features)
    });
    this.vectorLayer = new VectorLayer({ source: this.vectorSource });
    this.map.addLayer(this.vectorLayer);
  }
  handleRefresh() {
    console.log("refresh");
    this.vectorSource = new VectorSource({
      features: new GeoJSON().readFeatures(this.props.features)
    });
    this.vectorLayer.setSource(this.vectorSource);
  }
  render() {
    return (
      <div>
        <div id="map" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    features: {
      type: "FeatureCollection",
      features: state.users.slice(0, 10)
    }
  };
}
export default connect(
  mapStateToProps,
  null
)(UsersMapContainer);
