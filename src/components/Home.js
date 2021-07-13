import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom' 

function Home() {
    return (
        <main>
            <div className="top__header">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="heading__container">
                <p>My Accounts</p>
                <div>
                    <Link to="/">SWITCH TO TESTNET</Link>
                    <i><SettingsIcon/></i>
                </div>
            </div>
            <section className="wrapper">
                <div className="wrapper__box">
                    <i><AddIcon style={{fontSize: "24px"}}/></i>
                    <p>Add account</p>
                </div>
                <div className="wrapper__box">
                    <p className="box__title">My Business Account</p>
                    <div className="box__content">
                        <p>
                            <span>0</span>
                            <span>EURT</span>
                        </p>
                        <p>
                            <span>4.9998</span>
                            <span>XLM</span>
                        </p>
                    </div>
                </div>
                <div className="wrapper__box">
                    <p className="box__title">Personal Safe</p>
                    <div className="box__content">
                        <p>
                            <span>5.9999</span>
                            <span>XLM</span>
                        </p>
                    </div>
                </div>
                <div className="wrapper__box">
                    <p className="box__msg"><span>1</span></p>
                    <p className="box__title">Discretionary Funds</p>
                    <div className="box__content">
                        <p>
                            <span>0.5755</span>
                            <span>EURT</span>
                        </p>
                        <p>
                            <span>0.2299</span>
                            <span>USD</span>
                        </p>
                        <p>
                            <span>673.1150</span>
                            <span>XLM</span>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home
