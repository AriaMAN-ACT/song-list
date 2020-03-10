export const selectSongActionType = 'SONG_SELECTED';

export const selectSong = song => {
    return {
        type:selectSongActionType ,
        payload: song
    };
};