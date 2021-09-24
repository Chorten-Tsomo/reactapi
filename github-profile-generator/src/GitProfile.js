import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { UpperContent} from './content/UpperContent';
import { LowerContent } from './content/LowerContent';
import './gitprofile.css'



const GitProfile = () => {
    
    const history = useHistory();
    const userName = history.location.state;
    const [profile, setProfile] = useState({});
    

    

    useEffect(()=>{
        axios.get("https://api.github.com/users/"+userName)
        .then(response => {
            setProfile(response.data);
        })
        .catch(err =>{
            console.log(err);
        })
    },[])


    return (
        <div className="container">
            <header className="header">
                <div className="previous_btn">
                    <img 
                        src="./arrow.png" 
                        alt="arrow" 
                        className="icon"
                        onClick={()=>{history.push('/')}}/>
                </div>

                {   profile.hireable &&
                    <button className="hire">
                        Hire Me    
                    </button>
                }                         
            </header>

            <section className="wrapper">
                <div className="profile__wrapper">
                    <img 
                        src={profile.avatar_url} 
                        className="picture" alt="profile"/>

                    <h1 className="userName">
                        {profile.name}
                    </h1>

                    <p className="id">
                        {"@"+profile.login}
                    </p>
                </div>

                <section className="status__wrapper">
                    <UpperContent
                        labelName="Followers" 
                        upperCount={profile.followers} 
                    />
                    
                    <UpperContent
                        labelName="Following" 
                        upperCount={profile.following} 
                    />

                    <UpperContent
                        labelName="Repositories" 
                        upperCount={profile.public_repos} 
                    />
                </section>

                <section className="details__wrapper">
                    <div className="information">
                        <LowerContent labelName="Email" lowerValue={profile.email} />
                        <LowerContent labelName="Organization" lowerValue={profile.company} />
                        <LowerContent labelName="Location" lowerValue={profile.location} />    
                        <LowerContent labelName="Joined Date" lowerValue={profile.created_at} />
                        <LowerContent labelName="Twitter" lowerValue={'@'+profile.twitter_username} />
                        <LowerContent labelName="Website" lowerValue={profile.html_url} />

                    </div>

                    <div className="bio__wrapper">
                        <article className="description">
                            <h3>Bio</h3>

                            <p>{profile.bio}</p>
                        </article>
                    </div>
                </section>
            </section>  
        </div>
    )
}

export default GitProfile;