import {combineReducers} from "redux";

import {selectSongActionType} from "../actions";

const songsReducers = () => {
    return [
        {title: 'understanding', singer: 'Evanescence', duration: 323},
        {title: 'whisper', singer: 'Evanescence', duration: 430},
        {title: 'misery business', singer: 'Paramore', duration: 273},
        {title: 'someone you loved', singer: 'Lewis Capaldi', duration: 225}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === selectSongActionType) {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducers,
    selectedSong: selectedSongReducer
});