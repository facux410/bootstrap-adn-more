import React from "react";
import imagen1 from "../images/maxresdefault.jpg";
import imagen2 from "../images/Itachi-Uchiha-Naruto-1.jpg";
import imagen3 from "../images/snk.jpg";
export const array = [imagen1,imagen2,imagen3]

const Hero = () => {

  return (
    <>
    <div className="container">

    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={array[0]} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="display-5 text-warning bg-dark">Kimetsu no Yaiba</h5>
        <p class=" text-warning bg-dark">Shonen - Action - Gore - Nezuko UwU</p>
        
      </div>
    </div>
    <div class="carousel-item">
      <img src={array[1]} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5  class="display-5 text-warning bg-dark">Naruto</h5>
        <p class=" text-warning bg-dark">Aguante ITACHI vieja no me importa nada </p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={array[2]} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="display-5 text-warning bg-dark">Shingeki No Kioyin</h5>
        <p class=" text-warning bg-dark">humanos vs titanes , titanes vs titanes , humanos vs humanos , genocidio??????????????</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </>
  );
};

export default Hero;
