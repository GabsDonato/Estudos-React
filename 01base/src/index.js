import React from 'react';
import ReactDOM from 'react-dom';


class MeuComponente extends React.Component{

    mensagem(nome){
        alert(' Olá ' + nome);
    }

    minhaArrowFunction = (curso) => {
        alert('Estou fazendo o curso de ' + curso);
    }

    render(){
        return(

            <div>
                <button onClick={this.mensagem.bind(this, 'Gabriela')}>Clique aqui</button>
                <button onClick={() => this.minhaArrowFunction('ReactJS')}>Arrow Function</button>
            </div>
        ) ;
        
    }

}
    ReactDOM.render(<MeuComponente />, document.getElementById('root'));