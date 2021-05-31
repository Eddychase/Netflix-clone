import React from 'react'
import './Banner.css';

function Banner() {

    function Truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }
    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: 'url("https://wholistickids.com/wp-content/uploads/2019/01/plain-black-background.jpg")',
                backgroundPosition: "center center",
            }}>
            <div className='banner_contents'>
                <h1 className='banner_title'> Movie Title </h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>
                        play
                    </button>
                    <button className='banner_button'>
                        My List
                    </button>
                </div>
                <h1 className='banner_description'>
                    {Truncate(
                        'This is a Description',
                        150)}

                </h1>
            </div>
            <div className="banner_fadeBottom" />


        </header>
    )
}

export default Banner
