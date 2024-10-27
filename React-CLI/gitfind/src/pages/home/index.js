import { Header } from "../../components/Header";
import  background  from "../../assets/background.png";
import ItemList from "../../components/ItemList/index";
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
      <img src={background} className="background" alt="background app"/>
      <div className="info">
        <div>
          <input name="usuario" placerholder="@username" />
          <button>Buscar</button>
        </div>
        <div className="perfil">
          <img src="../100_5977.JPG" className="profile" alt="imagem de perfil"/>
          <div>
           <h3> Tito Donato </h3>
           <span>@TitoDev</span>
           <p>Descrição</p>
           <hr />
           <div>
            <h4 className="repositorio"> Repositórios</h4>
            <ItemList title="teste1" description="teste de descrição"/>
            <ItemList title="teste1" description="teste de descrição"/>
            <ItemList title="teste1" description="teste de descrição"/>
           </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
