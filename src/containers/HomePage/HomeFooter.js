import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomeFooter extends Component {
    render() {
        

        return (
            <div className='home-footer'>
                <p>&copy; 2021 Nguyen Van Phu. More information 
                    <a target='_blank' href='https://www.facebook.com/profile.php?id=100007953603252'> Click here &#8594;</a>
                </p>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
