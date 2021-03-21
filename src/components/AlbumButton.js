import React from 'react';
import PrimaryButton from './shared/PrimaryButton';
import classNames from 'classnames';

function AlbumButton({albumTitle, selectedAlbum, onClickHandler}) {
    const classes = classNames('py-5', {'bg-gray-100': albumTitle === selectedAlbum});
    return (
        <div className={classes} onClick={onClickHandler(albumTitle)}>
            <PrimaryButton text={albumTitle}/>
        </div>
    );
}

export default AlbumButton;