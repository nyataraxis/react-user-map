import React, { Component } from "react";
import { connect } from "react-redux";
import "ol/ol.css";
import { Map, View } from "ol";
import { Style, Stroke, Fill, Circle } from "ol/style.js";
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
  styleFeatures(feature) {
    console.log(feature);
    //now you can use any property of your feature to identify the different colors
    //I am using the ID property of your data just to demonstrate
    let color = feature.values_.color;
    var fill = new Fill({
      color
    });
    var stroke = new Stroke({
      color,
      width: 1.25
    });
    var styles = [
      new Style({
        image: new Circle({
          fill: fill,
          stroke: stroke,
          radius: 5
        }),
        fill: fill,
        stroke: stroke
      })
    ];
    var retStyle = styles;
    return retStyle;
  }
  handleRefresh() {
    console.log("refresh");
    this.vectorSource = new VectorSource({
      features: new GeoJSON().readFeatures(this.props.features)
    });
    this.vectorLayer.setSource(this.vectorSource);
    this.vectorLayer.setStyle(this.styleFeatures);
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
      features: state.users.slice(0, 300)
    }
  };
}
export default connect(
  mapStateToProps,
  null
)(UsersMapContainer);
