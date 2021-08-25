import React from 'react';
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Widgets() {

    const user = useSelector(selectUser);

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">

            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
    )

    return(
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>LinkedIn News</h2>
                <InfoIcon />

            </div>

            {newsArticle("Current CEO", "Ryan Roslansky")}
            {newsArticle("Current Users","740 million")}
            {newsArticle("Registered Companies", "55 million")}
            {newsArticle("LinkedIn premium","39% of total users")}
            {newsArticle("Country Manager for India", "Ashutosh Gupta")}
            {newsArticle("LinkedIn is awesome", "Today's trending")}
        </div>
    )
}

export default Widgets