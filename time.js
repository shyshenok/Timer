/**
 * Created by shyshenok on 01.11.17.
 */

var Timer = React.createClass({
    getInitialState: function () {
        return {
            seconds: 0,
            isPaused: true
        };
    },

    handleStart: function () {
        this.setState({isPaused: false});
        this.timer = setInterval(this.tick, 1000);
    },

    handlePause: function () {
        this.setState({isPaused: true});
        clearInterval(this.timer);
    },

    handleReset: function () {
        this.setState({
            isPaused: true,
            seconds: 0
        });
        clearInterval(this.timer);
    },

    handleStartPaused: function(){
        if(this.state.isPaused) {
            this.handleStart();
        } else {
            this.handlePause();
        }
    },

    tick: function () {
        this.setState({seconds: this.state.seconds + 1});
    },

    componentWillUnmount: function () {
        clearInterval(this.timer);
    },
    render: function () {
        return (
            <div className="timer-wrapper">
                <div className="timer">
                    <img id='start' onClick={this.handleStartPaused} src={this.state.isPaused ? 'pictures.png': 'pause.png'} alt="picture"/>
                    <h4 > Уже прошло {this.state.seconds} секунд </h4>
                    <img onClick={this.handleReset} src={'picture.png'} alt="reload"/>
                </div>
            </div>
        );
    }
});
ReactDOM.render(
    <Timer />,
    document.getElementById('mount-point')
);