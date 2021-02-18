import React from 'react'
import LibrarySongs from './LibrarySongs'

const Library = ({ libraryStatus, setSongs, songs, isPlaying, audioRef, setCurrentSong }) => {
    return (
        <div className={`library ${libraryStatus ? "active-library" : ""}`}>
            <h2>Library</h2>
            <div className='library-songs'>
                {songs.map((song) =>
                    <LibrarySongs setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} id={song.id} key={song.id} song={song} />
                )}
            </div>

        </div>
    )
}

export default Library;
