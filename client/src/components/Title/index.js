// This file is not currently being used in the app

import React from 'react';

class Countdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            countdownSeconds: 3,
            roundSeconds: 60
        };

        this.countdown = this.countdown.bind(this);
        this.roundCountdown = this.roundCountdown.bind(this);
        this.startTimer = this.startTimer.bind(this);
    }

    startTimer() {
        if(!this.countdownTimer) {
            this.countdownTimer = setInterval(this.countdown, 1000);
        }
    }

    countdown() {
        const currentSeconds = this.state.countdownSeconds - 1;

        this.setState({
            countdownSeconds: currentSeconds
        });

        if(currentSeconds === 0) {
            this.roundTimer = setInterval(this.roundCountdown, 1000);
            clearInterval(this.countdownTimer);
        }
    }

    roundCountdown() {
        const currentSeconds = this.state.roundSeconds - 1;

        this.setState({
            roundSeconds: currentSeconds
        });

        if(currentSeconds === 0) {
            //do whatever
            clearInterval(this.roundTimer);
        }
    }

    renderTimer() {
        const { countdownSeconds, roundSeconds } = this.state;
    
        if(countdownSeconds > 0) {
            return <span>Counting down...{countdownSeconds}</span>;
        }
    
        return <span>Round underway...{roundSeconds}</span>;
    }

    render() {
        return (
            <div>
                {this.renderTimer()}
            </div>
        );
    }
}

export default Countdown;;