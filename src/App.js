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
                    <h1></h1>
                    <p></p>
                </div>
                <div className='button'>
                    <button>Awesome!</button>
                    
                </div>
            </div>
            <div className='images'>
                <div>
                    <img />
                    <div>
                        <h3></h3>
                        <p></p>
                    </div>
                </div>
                <div>
                    <img />
                    <div>
                        <h3></h3>
                        <p></p>
                    </div>
                </div>
                <div>
                    <img />
                    <div>
                        <h3></h3>
                        <p></p>
                    </div>
                </div>
                <div>
                    <img />
                    <div>
                        <h3></h3>
                        <p></p>
                    </div>
                </div>
                <div>
                    <img />
                    <div>
                        <h3></h3>
                        <p></p>
                    </div>
                </div>
                
            </div>

        </div>
  );
}

export default App;
