// import logo from './logo.svg';
import './App.css';
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import logo from './images/logo.png'
import menu from './images/menu.png'


function App() {
  return (
        <div>
            <div className='body'>
                <div className='nav'>
                    <img src ={logo} id= 'logo'/>
                    <img src ={menu} id= 'menu'/>
                </div>
                <div className='main'>
                    <h1>Say Hello To ReactJS</h1>
                    <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
                </div>
                <div className='button'>
                    <button>Awesome!</button>
                    
                </div>
            </div>
            <div className='images'>
                <div>
                    <img src ={icon4} />
                    <div>
                        <h3>Declarative</h3>
                        <p>React makes it painless to create interactive UIs</p>
                    </div>
                </div>
                <div>
                    <img src ={icon3}/>
                    <div>
                        <h3>Components</h3>
                        <p>Build encapsulated components that manage their state</p>
                    </div>
                </div>
                <div>
                    <img src ={icon2} />
                    <div>
                        <h3>Single-Way</h3>
                        <p>A set of immutable values are passed to the component's</p>
                    </div>
                </div>
                <div>
                    <img src ={icon1}/>
                    <div>
                        <h3>JSX</h3>
                        <p>Statically-typed designed to run on modern browsers</p>
                    </div>
                </div>               
            </div>

        </div>
  );
}

export default App;
