import React from 'react';
import ReactDOM from 'react-dom';

class MeuComponente extends React.Component{


    constructor(props){
        super(props);
        
        this.state = {
            nome: ''
        }
    }

    funcaoNome = (campo) => {
        this.setState({nome : campo.target.value});
    }

    render(){
        return(
            <form>
                <input type='text' placeholder='Nome' onChange={this.funcaoNome}/>

                <p>{this.state.nome}</p>
            </form>
        );
    }
}


ReactDOM.render(<MeuComponente />, document.getElementById('root'));