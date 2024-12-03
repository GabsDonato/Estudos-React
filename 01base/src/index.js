import React from 'react';
import ReactDOM from 'react-dom';


class MeuComponente extends React.Component{


    minhaFuncao = () => {
        alert('Testando evento onSubmit');
    }

    render(){
        return(
            <form onSubmit={this.minhaFuncao}>
                <input type='submit' />
            </form>
        );
    }

}

ReactDOM.render(<MeuComponente />, document.getElementById('root'));