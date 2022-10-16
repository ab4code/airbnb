import "./App.css";
import lady from "./assets/lady.png";
// import bike from "./assets/bike.png";
import wedding from "./assets/wedding.png";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <div className="card-main">
        <Card
          lady={lady}
          title="50.0 (6) .USA"
          info="Life lessons with Katie Zaferec"
          subinfo="From $136"
        />
        <Card
          lady={wedding}
          title="50.0 (6) .USA"
          info="Life lessons with Katie Zaferec"
          subinfo="From $136"
        />
        <Card
          lady={lady}
          title="50.0 (6) .USA"
          info="Life lessons with Katie Zaferec"
          subinfo="From $136"
        />
      </div>
    </div>
  );
}

export default App;
