import React, {Component} from 'react';
import { connect } from "react-redux";

import '../style/components/SongDetail.css';

class SongDetail extends Component {

    render() {
        if (this.props.song){
            return (
                <div>
                    <div className="ui large header">{`Song Details for ${this.props.song.title} :`}</div>
                    <div className="ui medium header">{`The Singer of this song is ${this.props.song.singer}.`}</div>
                    <div className="ui medium header">{`The Duration of Song is 
                    ${Math.floor(this.props.song.duration / 60)}:${this.props.song.duration % 60}.`}</div>
                </div>
            );
        }
        return (
            <div className="song-detail-no">
                <i className="close icon loading big blue"/>
                <br/>
                Select a Song to see details.
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {song: state.selectedSong};
};

export default connect(mapStateToProps)(SongDetail);