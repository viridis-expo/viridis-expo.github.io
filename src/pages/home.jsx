import '../styles/home.css';
import NavBar from './navbar.jsx';
import Bottom from './bottom.jsx';
import {Link}from 'react-router-dom';
export default function Home(){
window.addEventListener('scroll', function(){
document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
console.log(window.pageYOffset / (document.body.offsetHeight - window.innerHeight));

},false);
    return (
        <>
            <NavBar/>
            <div className = "progress"/>
            <div className ='cover'> <img src = {require('../imgs/favicon2.png')}/><div className ='text'style = {{opacity:'1'}}>Viridis Innovation Convention</div><div style = {{fontSize:'0.5em',fontWeight:'lighter'}}>Opportunities for the Youth</div><Link id ='getstarted' to ='/find-local'>Get Started</Link></div>
            <div className = 'introductioncontainer' id = 'about'>
                <div className = 'header1'><h1>SOLVE REAL-WORLD PROBLEMS</h1></div>
                <div className = 'about'>In Viridis Innovation Expo, is a competition for the middle-schoolers and high-schoolers that gives them the chance to participate in Green Energy Research, meet new people, challenge themselves and be part of a very important Green-energy community for the future.</div>
            </div>
            <div className = 'keynotecontainer'>
                <div className = 'imgcontainerl'>
                <img src ={require('../imgs/elonmusk.jpg')} className = 'speaker'></img><img src = {require('../imgs/davidsuzuki.jpg')} className = 'speaker' id ='david'></img>
                    </div>
                <div className = 'imgdescription'>
                <div className ='keynotesubtext'><h1>Keynote Speakers</h1><div className>At most events, you can get the opportunity to learn from industry leaders, professionals, and role models throughout the event.  Everyone of all skills and ages can learn something new!   Some leaders also sign up as mentors, allowing full-on interactions with these Green Energy experts stimulating further learning and inspiring the future generation.</div></div>
                </div>
                </div>
                <div className = 'keynotecontainer'>
            
                <div className = 'imgdescription'>
                <div className ='keynotesubtext'><h1>Work Together</h1><div style={{paddingBottom:'5vmax'}}>When you participate at Viridis, you can not only work together with your friends but network and join a national community of Green Energy-conscious students, adults, and professionals alike!  Each event you go to should remind you that you were never alone in solving and tackling the difficult problem of utilizing green energy.  If you're new, learn something new and join our growing community!</div></div>
                </div>
          
                <div className = 'imgcontainerr'>
                <img src ={require('../imgs/workingtogether.jpg')} className = 'speaker'></img><img src = {require('../imgs/energyproject.jpg')} className = 'speaker' id ='energyproject'></img>
                </div>
                </div>
                <div className = 'keynotecontainer'>
                <div className = 'imgcontainerl'>
                <img src ={require('../imgs/shirt.jpeg')} className = 'speaker' ></img><img src = {require('../imgs/tesla.jpg')} className = 'speaker' id ='tesla'></img>
                    </div>
                <div className = 'imgdescription'>
                <div className ='keynotesubtext'><h1>Win </h1><div className>Perhaps what will make our event big is the opportunity to win an internship at a big company, or work for the Canadian government by winning the higher-level competitions. For all levels, get the chance to win various of other prizes, like cash, merch, and more!</div></div>
                </div>
                </div>


            {/* <div className = 'testcontainerr'>
                <div className = 'test'>Learn from different mentors and develop insights from keynote speakers!</div>
                <div className = 'test'>Get the opportunity to work with other students and develop your own projects!</div>
                <div className = 'test'>Get Free food and merch.</div>
            </div> */}
            <Bottom/>
        </>
    );
}
