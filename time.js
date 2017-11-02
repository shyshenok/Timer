/**
 * Created by shyshenok on 01.11.17.
 */

var Timer = React.createClass({
    getInitialState: function() {
        return {
            seconds: 0
        };
    },

    handleStart : function () {
        this.timer = setInterval(this.tick, 1000git);
    },

    handlePause : function () {
        console.log("rfds")
        clearInterval(this.timer);
    },

    handleReset : function() {
        this.setState({seconds: 0});
        clearInterval(this.timer);
    },

    tick: function() {
        this.setState({ seconds: this.state.seconds + 1 });
    },

    componentWillUnmount: function() {
        clearInterval(this.timer);
    },
    render: function() {
        return (
            <div className="timer-wrapper">
                <div className="timer">
                    <img onClick={this.handleStart} src={'pictures.png'} alt="picture"/>
                    <img onClick={this.handlePause} src={'pause.png'} alt="pause"/>
                    <h4> Уже прошло {this.state.seconds} секунд </h4>
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