import React from 'react';

const Sidebar = ({children}) => (
    <div className="Sidebar">
        <div className="Side-container">
            {children}
        </div>
    </div>
);

export default Sidebar;