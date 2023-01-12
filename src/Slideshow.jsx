import React from "react";
import "./App.css"
import "./index.css"
import messi from "./images/dadbow.jpg"
import jordan from "./images/orford.jpg"
import brady from "./images/hike.jpg"
import * as PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";


const colors = [messi, jordan, brady];
const delay = 5000;

function Slideshow() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    let message1;
    let message2;
    let bMess;
    let button;
    if(index === 0){
        message1 = 'Undeniably'
        message2 = 'Effective'
        bMess = 'Find our more'
        button = '/about'
    } else if (index === 1){
        message1 = 'Incredibly'
        message2 = 'Profitable'
        bMess = 'See Our Plans'
        button = '/plan'
    } else {
        message1 = 'The Best of'
        message2 = 'the Best'
        bMess = 'Free Trial'
        button = '/contact'
    }

    const Message = () => (
        <div style={{backgroundColor:"black", width: '30vh', left: '25%', top: '30%', position:'relative', borderRadius:'10px'}}>
            <section>
                <h1 style={{color:"#21F291", textAlign:'center'}}>{message1}</h1>
                <h1 style={{color:"#21F291", textAlign:'center'}}>{message2}</h1>
            </section>
        </div>
    );
    Message.propTypes = {message: PropTypes.any};


    let navigate = useNavigate();
    const routeChange = (dir) =>{
        navigate(dir);
    }

    const Button = () => (
        <button className={'default-button'} style={{minWidth:'25vh', left: '26%', top: '45%', position:'relative', borderRadius:'10px'}}
        onClick={() => routeChange(button)}>
            {bMess}
        </button>
    );
    Button.propTypes = {message: PropTypes.any};


    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((backgroundImage, index) => (
                    <div
                        className="slide"
                        key={index}
                        style={{backgroundImage:"url(" + backgroundImage + ")", backgroundSize:'cover', backgroundRepeat:'no-repeat'}}
                    >
                        <Message/>
                        <Button/>
                    </div>
                ))}
            </div>

            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slideshow