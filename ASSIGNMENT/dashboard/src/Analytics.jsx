import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
    from 'react-icons/bs'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
    from 'recharts';
import { PiInstagramLogoFill } from "react-icons/pi"
import { FaFacebookSquare } from "react-icons/fa"
import { FaSquareTwitter } from "react-icons/fa6"

function Analytics() {

    const data = [
        {
            name: '@priya',
            likes: 4000,
            comments: 2400,
            shares: 2400,
        },
        {
            name: '@prajak',
            likes: 3000,
            comments: 1398,
            shares: 2210,
        },
        {
            name: '@piyuu',
            likes: 2000,
            comments: 9800,
            shares: 2290,
        },

    ];


    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>ANALYTICS</h3>
            </div>

            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>INSTAGRAM</h3>
                        <PiInstagramLogoFill className='card_icon' />
                    </div>
                    <h1>300k followers</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>FACEBOOK</h3>
                        <FaFacebookSquare className='card_icon' />
                    </div>
                    <h1>12k followers</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>TWITTER</h3>
                        <FaSquareTwitter className='card_icon' />
                    </div>
                    <h1>33k followers</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>REQUESTS</h3>
                        <BsFillBellFill className='card_icon' />
                    </div>
                    <h1>42 pending</h1>
                </div>
            </div>

            <div className='charts'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="comments" fill="#2de80c" />
                        <Bar dataKey="likes" fill="#fc0303" />
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="comments" stroke="#2de80c" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="likes" stroke="#fc0303" />
                    </LineChart>
                </ResponsiveContainer>

            </div>
        </main>
    )
}

export default Analytics
