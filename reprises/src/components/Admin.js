import React from 'react';
import PrimaryButton from './shared/PrimaryButton';
import Spacer from './shared/Spacer';
import SongList from './SongList';

function Admin() {
  return (
    <div className="Admin">
        <Spacer/>

        <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
                <div className="md:col-span-1 ml-5">
                    <SongList />
                </div>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <div className="shadow overflow-hidden sm:rounded-md">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Test</label>
                                    <input type="text" name="first_name" id="first_name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full  rounded-md"/>
                                </div>
                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <PrimaryButton text="Save"></PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Admin;
