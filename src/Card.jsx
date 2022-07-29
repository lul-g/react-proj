import React from "react";
import lul from './lul_photo.jpg'
import github from './Github Icon.png'
import facebook from './Facebook Icon.png'
import insta from './Instagram Icon.png'
import tweet from './Twitter Icon.png'
    
export default function Card() {
    return (
        <div className="bod">
            <div className="card-left">
                <img src={lul} />
                <header>
                    <h1>Lulseged Admasu</h1>
                    <h3>CS Student</h3>
                    <div>lulsegedwork@gmai.com</div>
                    <div className="btns">
                        <a href="/" className="btn1">Email</a>
                        <a href="/" className="btn2">LinkedIn</a>
                    </div>
                </header>
                <main>
                    <div>
                        <h3>About</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus molestiae neque dolore quaerat voluptate maxime eum deserunt, maiores officiis! Aspernatur ut incidunt culpa nam aperiam animi est porro iste dignissimos.
                        </p>
                    </div>
                    <div>
                        <h3>Interests</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus molestiae neque dolore quaerat voluptate maxime eum deserunt, maiores officiis! Aspernatur ut incidunt culpa nam aperiam animi est porro iste dignissimos.
                        </p>
                    </div>
                </main>
                <footer>
                    <a href="/"><img src={tweet}/></a>
                    <a href="/"><img src={facebook}/></a>
                    <a href="/"><img src={insta}/></a>
                    <a href="/"><img src={github}/></a>
                </footer>
            </div>
    
            <div className="card-right">
            <img src={lul} />
            <header>
                <h1>Lulseged Admasu</h1>
                <h3>CS Student</h3>
                <div>lulsegedwork@gmai.com</div>
                <div className="btns">
                    <a href="/" className="btn1">Email</a>
                    <a href="/" className="btn2">LinkedIn</a>
                </div>
            </header>
            <main>
                <div>
                    <h3>About</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus molestiae neque dolore quaerat voluptate maxime eum deserunt, maiores officiis! Aspernatur ut incidunt culpa nam aperiam animi est porro iste dignissimos.
                    </p>
                </div>
                <div>
                    <h3>Interests</h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus molestiae neque dolore quaerat voluptate maxime eum deserunt, maiores officiis! Aspernatur ut incidunt culpa nam aperiam animi est porro iste dignissimos.
                    </p>
                </div>
            </main>
            <footer>
                <a href="/"><img src={tweet}/></a>
                <a href="/"><img src={facebook}/></a>
                <a href="/"><img src={insta}/></a>
                <a href="/"><img src={github}/></a>
            </footer>
            </div>
        </div>
    )
}
/*

*/ 