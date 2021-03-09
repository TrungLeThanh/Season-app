import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{

    // constructor(props){
    //     super(props);

    //     this.state({ lat: null, errorMessage: ''})

        // window.navigator.geolocation.getCurrentPosition(
        //     position => this.setState({lat: position.coords.latitude}), 
        //     err => this.setState({errorMessage: err.message})
        // );
    // }


    //Tự động viết thành contructor function
    state = {
        lat: null, 
        errorMessage: '',
        time: ''
    };

    /**
     * Được gọi khi đã hiển thị component ra ngoài trình duyệt, hàm này chỉ gọi 1 lần
     * Hàm này được gọi để thông báo component đã tồn tại trên DOM, từ đó các thao tác trên DOM có thể thực hiện bình thường với component này.
     */
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}), 
            err => this.setState({errorMessage: err.message})
        );
        
        //Sau 1s sẽ cập nhật
        setInterval( () => {
            this.setState({time: new Date().toLocaleTimeString()})
        },1000)
    }

    renderContent(){
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return (
                <SeasonDisplay 
                    lat={this.state.lat}
                    time={this.state.time}
                />
            );
        }

        return <Spinner message="Please accept location requests!" />
    }

    render () {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
};


ReactDOM.render(<App />, document.querySelector('#root'));