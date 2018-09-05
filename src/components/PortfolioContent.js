import React, { Component } from 'react';
import Header from './content/Header';
import Sumary from './content/Sumary';
import ContactInfo from './content/ContactInfo'

class PortfolioContent extends Component {
    render() {
        return (
            <div className="portfolio-content">
                <Header/>
                <Sumary/>
                <ContactInfo/>
            </div>
        )
    }
}

export default PortfolioContent;