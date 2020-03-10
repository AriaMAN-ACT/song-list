import React, {Component} from 'react';

import SongList from './SongList';
import SongDetail from './SongDetail';

import '../style/components/App.css';

class App extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="ui container grid">
                <div className="ui row">
                    <div className="ui card column eight wide" id="song-list">
                        <SongList/>
                    </div>
                    <div className="ui card column eight wide" id="song-detail">
                        <SongDetail/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
