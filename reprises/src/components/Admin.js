import React, { useState } from 'react';
import PrimaryButton from './shared/PrimaryButton';
import Spacer from './shared/Spacer';
import SongList from './SongList';
import AdminPanel from './AdminPanel';

function Admin() {
    const [selectedSongs, setSelectedSongs] = useState([]);

    const removeSong = (event) => {
        const selected = selectedSongs.filter(song => song.id !== parseInt(event.target.id));
        setSelectedSongs(selected)
    }

    return (
    <div className="Admin">
        <Spacer/>

        <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1 ml-5">
                    <SongList selectedSongs={selectedSongs} setSelectedSongs={setSelectedSongs} />
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-1 gap-6">
                                <AdminPanel songList={selectedSongs} removeSong={removeSong} />
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <PrimaryButton text="Save"></PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Spacer/>
    </div>
    );
}

export default Admin;
