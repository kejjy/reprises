import React, { useState } from 'react';
import { songs } from '../data/songs';
import AlbumButton from './AlbumButton';
import classNames from 'classnames';

function SongList({selectedSongs, setSelectedSongs}) {
    const [songList, setSongList] = useState({ 
        list: []  
    });
    const [albumTitle, setAlbumTitle] = useState('');

    const handleAlbumClick = (albumName) => () => {
        setSongList({ 
            ...songList,
            list: songs.filter(song => song.album === albumName) 
        });
        setAlbumTitle(albumName);
    }

    const handleSongClick = (alreadySelected) => (event) => {
        if (alreadySelected) {
            const selected = selectedSongs.filter(song => song.id !== parseInt(event.target.id));
            setSelectedSongs(selected)
        } else {
            const newSong = songs.find(song => song.id === parseInt(event.target.id));
            const selected = [...selectedSongs, newSong];
            setSelectedSongs(selected)
        }
    }

    return (
        <div>
            <div className="grid grid-cols-5">
                <AlbumButton albumTitle="Act I" selectedAlbum={albumTitle} onClickHandler={handleAlbumClick} />
                <AlbumButton albumTitle="Act II" selectedAlbum={albumTitle} onClickHandler={handleAlbumClick} />
                <AlbumButton albumTitle="Act III" selectedAlbum={albumTitle} onClickHandler={handleAlbumClick} />
                <AlbumButton albumTitle="Act IV" selectedAlbum={albumTitle} onClickHandler={handleAlbumClick} />
                <AlbumButton albumTitle="Act V" selectedAlbum={albumTitle} onClickHandler={handleAlbumClick} />
            </div>
            <div className="bg-gray-100 p-5">
                <div className="pb-5">
                    <h4>{albumTitle}</h4>
                </div>
                <div className="grid gap-x-4 gap-y-1 text-xs">
                    { songList.list.map(song => {
                        const isSelected = !!selectedSongs.find(x => x.id === song.id);
                        const styles = classNames('bg-white border rounded py-3 hover:bg-indigo-200 cursor-pointer', {'bg-indigo-400': isSelected})
                        return (
                            <div key={song.id} id={song.id} onClick={handleSongClick(isSelected)}
                                className={styles}>
                                {song.title}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SongList;
