import React from 'react';
import PrimaryButton from './shared/PrimaryButton';

function AlbumButton({albumTitle, selectedAlbum, onClickHandler}) {
    return (
        <div className={albumTitle === selectedAlbum ? 'bg-gray-100 py-5' : 'py-5'} onClick={onClickHandler(albumTitle)}>
            <PrimaryButton text={albumTitle}/>
        </div>
    );
}

export default AlbumButton;