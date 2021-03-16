import React, { useState } from 'react';

function AdminPanel({songList, removeSong}) {

    const getColor = (albumName) => {
        switch (albumName) {
            case 'Act I':
                return 'bg-yellow-200 border-yellow-300 hover:bg-yellow-300';
            case 'Act II':
                return 'bg-red-400 border-red-500 hover:bg-red-500';
            case 'Act III':
                return 'bg-red-200 border-red-300 hover:bg-red-300';
            case 'Act IV':
                return 'bg-yellow-400 border-yellow-500 hover:bg-yellow-500';
            case 'Act V':
                return 'bg-blue-300 border-blue-400 hover:bg-blue-400';
            default:
                return 'bg-white';
        }
    }

    return (
        <div className="text-left">
            <div className="mb-5">
                <div className="pb-2">Reprise Name</div>
                <input type="text" className="border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"/>
            </div>
            <div className="mb-5">
                <div className="pb-2">
                    Selected Songs ({songList?.length}) 
                    { songList?.length > 15 ? <span className="text-xs pl-2 text-gray-400 italic">Seriously?!</span> : ''}
                </div>
                <div className="overflow-y-auto h-24 p-2 border border-gray-300 leading-loose rounded-md whitespace-pre-line">
                    {songList.map(song => {
                        return (
                            <span key={song.id} id={song.id} onClick={removeSong} 
                                className={`${getColor(song.album)} text-xs pl-3 pr-1 py-1 mr-1 inline-block rounded-md border cursor-pointer `}>
                                {song.title} <span onClick={removeSong} className="font-bold px-2">x</span>
                            </span>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;