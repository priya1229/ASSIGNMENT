import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
    from 'react-icons/bs'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
    from 'recharts';
import { PiInstagramLogoFill } from "react-icons/pi"
import { FaFacebookSquare } from "react-icons/fa"
import { FaSquareTwitter } from "react-icons/fa6"

function settings() {

    const data = [

    ];


    return (
        <main className='container'>
            <div className='main-title'>
                <h3>SETTINGS</h3>
            </div>

            <div className='cards'>
                <div className='car'>
                    <div className='card-inne'>
                        <h3>Change Password</h3>

                    </div>

                </div>
                <div className='car'>
                    <div className='card-inne'>
                        <h3>Theme</h3>

                    </div>

                </div>
                <div className='car'>
                    <div className='card-inne'>
                        <h3>Management</h3>

                    </div>

                </div>
                <div className='car'>
                    <div className='card-inne'>
                        <h3>Logout</h3>

                    </div>

                </div>
            </div>


        </main>
    )
}

export default settings
