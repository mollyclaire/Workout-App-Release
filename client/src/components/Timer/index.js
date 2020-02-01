import React, { Component } from 'react';
import "./style.css";
import API from "../../utils/API";
import UIfx from 'uifx'
import bellAudio from '../../bell-sound.mp3';

const bell = new UIfx(
    bellAudio,
    {
      volume: 0.4, // number between 0.0 ~ 1.0
      throttleMs: 100
    }
  )


class Timer extends Component {

    state = {
        seconds: null,
        exercises: [],
        next: false
    }

    getRandom() {
        API.getExercise()
        .then(res =>this.setState(({exercises: res.data})))
        .catch(err => console.log(err));
    };

    componentDidMount() {
        this.getRandom();
        this.startRestTimer();
    }

    startRoundTimer() {
        this.setState({ seconds: 30})
        this.firstTimer = setInterval(() => {
            const { seconds } = this.state
         
            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1,
                    
                }))
            }

            if (seconds === 0) {
                clearInterval(this.firstTimer)
                this.getRandom();
                this.startRestTimer()
                bell.play()
            }
            
        }, 1000) 
    }

    startRestTimer() {
        this.setState({ seconds: 5})
        this.secondTimer = setInterval(() => {
            const { seconds } = this.state
         
            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1,
                    
                }))
            }

            if (seconds === 0) {
               
                clearInterval(this.secondTimer)
                this.startRoundTimer()
                bell.play()
            }
            
        }, 1000) 
    }

    componentWillUnmount() {
        clearInterval(this.firstTimer)
        clearInterval(this.secondTimer)
    }

    render() {
        const { seconds } = this.state
        const { exercises } = this.state
        if (exercises === null) return null;
        if (this.state.next === false) {
            return (
            <div className="app">
                
                <div >
                    {this.state.exercises.map(exercise => 
                        <h1>{exercise.title}</h1>
                    )}
                </div>
                
                <div className="time">
                    {seconds}s
                </div>
                <div></div>
            </div>
        )};
    }

};

export default Timer;
