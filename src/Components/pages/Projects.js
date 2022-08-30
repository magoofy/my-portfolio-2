import React from 'react';
import Header from '../Header'
import homegrown from '../../images/homegrown-sc.jpg'
import mtg from '../../images/mtg-sc2.png'
import parkbuddy from '../../images/website-sc2.jpg'


const Projects = () => {
    return (
        <main class="d-flex justify-content-around">
            <div class="card m-5">
                <img src={parkbuddy} class="card-img-top" alt="Parkbuddy web app landing page"></img>
                <div class="card-body">
                    <h5 class="card-title">Park Buddy</h5>
                    <p class="card-text">Project 1 during my Berkely Coding Bootcamp</p>
                    <a href="https://github.com/magoofy/project-1" class="btn btn-primary" target="_blank">Repo</a>
                </div>
            </div>
            <div class="card m-5">
                <img src={homegrown} class="card-img-top" alt="Homegrown web app landing page" />
                <div class="card-body">
                    <h5 class="card-title">Homegrown</h5>
                    <p class="card-text">Project 2 during my Berkely Coding Bootcamp</p>
                    <a href="https://github.com/Lemming97/Project_2" class="btn btn-primary" target="_blank">Repo</a>
                </div>
            </div>
            <div class="card m-5">
                <img src={mtg} class="card-img-top" alt="MTG web app landing page" />
                <div class="card-body">
                    <h5 class="card-title">MTG Tradehub</h5>
                    <p class="card-text">Project 3 during my Berkely Coding Bootcamp</p>
                    <a href="https://github.com/NicCarrig/MTG-Trade-Hub-v2" class="btn btn-primary" target="_blank">Repo</a>
                </div>
            </div>
        </main>
    )
}

export default Projects;