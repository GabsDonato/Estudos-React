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

        // vetor
        let cores = ['Azul','Amarelo','Vermelho'];

        //listar 
        let listar = cores.map((cor,index) => {
            return <li key={index}>{index} - {cor}</li>
        });

        return(
           <ul>
            {listar}
           </ul>
        );
    }

}

ReactDOM.render(<MeuComponente textoInicial='Digite algo...'/>, document.getElementById('root'));