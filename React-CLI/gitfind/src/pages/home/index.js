import { useState } from 'react';
import { Header } from "../../components/Header";
import  background  from "../../assets/background.png";
import ItemList from "../../components/ItemList/index";
import './styles.css';

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/Users/${user}`);
    const newUser = await userData.json();

    if(newUser){
      const {avatar_url, name, bio, login} = newUser;
      setCurrentUser({avatar_url, name, bio, login});

      const reposData = await fetch(`https://api.github.com/Users/${user}/repos`);
      const newRepos = await reposData.json();

      if(newRepos.length){
        setRepos(newRepos);
      }
    }

  };

  return (
    <div className="App">
      <Header />
      <div className="conteudo">
      <img src={background} className="background" alt="background app"/>
      <div className="info">
        <div>
          <input
          name="usuario" value={user} 
          onChange={event => setUser(event.target.value)} 
          placerholder="@username" />
          <button onClick={handleGetData} >Buscar</button>
        </div>
        {currentUser.name ? (
          <>
          <div className="perfil">
          <img src={currentUser.avatar_url} className="profile" alt="imagem de perfil"/>
          <div>
           <h3>{currentUser.name} Tito Donato </h3>
           <span>{currentUser.login}@TitoDev</span>
           <p>{currentUser.bio}Descrição</p>
           <hr />
           </div>
        </div>
          </>
        ): null}
        {repos?.length ? (
          
           <div>
            <h4 className="repositorio"> Repositórios</h4>
            {repos.map(repo => (
                <ItemList title={repo.name} description={repo.description}/>
            ))}
           </div>
        ) : null}
          </div>
      </div>
    </div>
  );
}

export default App;
