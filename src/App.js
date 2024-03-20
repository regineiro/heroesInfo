
import Header from "./components/header";
import Heroes from "./components/heroes";

const App = () => {
  return (
    <>
      <Header />
      <div className='heroesContainer'>
        <Heroes />
      </div>

    </>

  );
}

export default App;
