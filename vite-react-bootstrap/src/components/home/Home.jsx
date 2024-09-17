import "./home.css";
import React from 'react';

const Home = () => {
    return (

        <>
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Fluid jumbotron</h1>
          <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
        <div className="container-image">
        <img src="https://i.pinimg.com/564x/62/a6/36/62a6360502e77f3186f1cc17b5396119.jpg" className="imagem-cabida"alt="Paris"/>
            </div>
      </div>

<div class="jumbotron jumbotron-fluid">
<div class="container">
  <h1 class="display-4">Fluid jumbotron</h1>
  <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
</div>
</div>

</>
    )
}

export default Home;
