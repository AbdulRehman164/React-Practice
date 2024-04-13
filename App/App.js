import React from 'react';
import ReactDom from 'react-dom/client';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo-container icon-container">
                    <img
                        className="icon logo-img"
                        src={new URL('logo.png', import.meta.url)}
                        width="50px"
                        height="50px"
                    ></img>
                    <h1>CoolWeb</h1>
                </div>
                <div className="search-bar-container">
                    <input
                        className="search-bar"
                        placeholder="Search Here..."
                    ></input>
                    <img
                        className="icon logo-img"
                        src={new URL('search-icon.png', import.meta.url)}
                        width="25px"
                        height="25px"
                    ></img>
                </div>
                <div className="profile-container icon-container">
                    <img
                        className="icon profile-img"
                        src={new URL('profile.png', import.meta.url)}
                        width="50px"
                        height="50px"
                    ></img>
                    <p>@cooluser</p>
                </div>
            </nav>
        </header>
    );
};

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<Header />);
