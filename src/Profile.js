import React from 'react';

function Profile( props ){
    console.log( props );
    const currentProfileName = props.match.params.name;
    const currentProfileInfo = props.profiles.find( (profile) => {
        if( profile.firstName === currentProfileName ){
            return profile;
        }
    });


    return(
        <div>
            <h1> This is the profile of {currentProfileName} </h1>
            <h2> The role is: {currentProfileInfo.role} </h2>
            <p> The id is: {currentProfileInfo.id}</p>
        </div>
    )
}

export default Profile;