import React from 'react';
import ReactDOM from 'react-dom';


class MeuComponente extends React.Component{

    mensagem(nome){
        alert(' Olá ' + nome);
    }

    render(){
        return <button onClick={this.mensagem.bind(this, 'Gabriela')}>Clique aqui</button>;
    }

}
    ReactDOM.render(<MeuComponente />, document.getElementById('root'));