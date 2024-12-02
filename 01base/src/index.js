import React from 'react';
import ReactDOM from 'react-dom';


class MeuComponente extends React.Component{

    constructor(props){
        super(props);

        this.state = {texto: this.props.textoInicial};
    }

    // função
    minhaFuncao = (elemento) => {
        this.setState({texto : elemento.target.value});
    }

    render(){
        return(
            <div>
                <h1>{this.state.texto}</h1>
                <input type='text' onChange={this.minhaFuncao} value={this.state.texto}/>
            </div>
        );
    }

}

ReactDOM.render(<MeuComponente textoInicial='Digite algo...'/>, document.getElementById('root'));