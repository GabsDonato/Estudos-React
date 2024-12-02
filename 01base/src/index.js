import React from 'react';
import ReactDOM from 'react-dom';


class MeuComponente extends React.Component{

    constructor(props){
        super(props);

        this.state = {texto:''};
    }

    render(){
        return(
            <div>
                <h1></h1>
                <input type='text' />
            </div>
        );
    }

}

ReactDOM.render(<MeuComponente />, document.getElementById('root'));