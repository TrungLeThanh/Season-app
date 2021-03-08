import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

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
        errorMessage: ''
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
    }

    render () {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return (
                <SeasonDisplay lat={this.state.lat} />
            );
        }

        return <div>Loading...</div>
    }
};


ReactDOM.render(<App />, document.querySelector('#root'));