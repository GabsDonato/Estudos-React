import React from 'react';
import ReactDOM from 'react-dom';


class MeuComponente extends React.Component{


    minhaFuncao = (elemento) => {
        elemento.preventDefault();
        alert('Testando evento onSubmit');
    }

    render(){
        return(
            <form onSubmit={this.minhaFuncao} action='http://youtube.com'>
                <input type='submit' />
            </form>
        );
    }

}

ReactDOM.render(<MeuComponente />, document.getElementById('root'));