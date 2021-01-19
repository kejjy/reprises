import React from 'react';

function Spacer() {
    return (
        <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5">
                <div className="border-t border-gray-200"></div>
            </div>
        </div>
    );
}

export default Spacer;