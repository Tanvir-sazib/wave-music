import React from 'react'

const LibrarySongs = ({ setSongs, isPlaying, audioRef, song, songs, setCurrentSong, id }) => {
    const setSongHandler = async () => {
        const selectedSong = songs.filter((state) => state.id === id);

        await setCurrentSong(selectedSong[0]);

        const newSong = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true
                }
            } else {
                return {
                    ...song,
                    active: false
                }
            }
        })
        setSongs(newSong)

        if (isPlaying) audioRef.current.play();
    }
    return (
        <div onClick={setSongHandler} className={`library-song ${song.active ? 'selected' : ""}`}>
            <img src={song.cover}></img>
            <div className='song-description'>
                <h4>{song.name}</h4>
                <h5>{song.artist}</h5>
            </div>

        </div>
    )
}

export default LibrarySongs;
