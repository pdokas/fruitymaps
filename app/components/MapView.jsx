import React from 'react';

export default class MapView extends React.Component {
    componentDidMount() {
        this.map = new mapkit.Map(this.refs.map);
        this.map.showsUserLocation = false;
        this.map.showsUserLocationControl = true;

        this.setLocation(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.setLocation(nextProps);
    }

    setLocation(props) {
        if (props.coordinate) {

            this.map.setRegionAnimated(
                new mapkit.CoordinateRegion(
                    props.coordinate,
                    new mapkit.CoordinateSpan(0.016, 0.016)
                ));
        }

    }

    render() {
        return (
            <div className="mapView">
                <div ref="map" className="mapViewInner">

                </div>
            </div>
        );

    }

}