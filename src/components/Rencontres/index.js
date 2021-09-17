import React, { useEffect } from 'react';
import './styles.scss';

function Rencontres() {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      });
  return (
    <>
      <section className="projects" id="project">

        <div className="title">Rencontres +35 ans 2021
        </div>

        <div className="project-row">

          <div className="proj-row-items">
            <div className="design-img">
              {/* <img src={image1} alt="" /> */}
            </div>

            <div className="details">
                <div className="date">26/09/2021</div>
              <h3> Cendras - As Salindres</h3>
              <p className="detail_p">Thierry - Fabrice - Sébastien</p>
              {/* <div className="prj-link">
                <a href="https://atypeek.io" target="_blank"><button type="button">Visiter</button></a>
                <a href="https://github.com/O-clock-Pan/projet-atypeek-front" target="_blank"><button type="button">Voir le Code</button></a>
              </div> */}

            </div>
          </div>

          <div className="proj-row-items">
            <div className="csheet-img">
              {/* <img src={image2} alt="" /> */}
            </div>

            <div className="details">
                <div className="date">03/10/2021</div>
              <h3> As Salindres - Les Mages</h3>
              <p className="detail_p">Dispo : Thierry - Fabrice - Sébastien</p>
              

            </div>
          </div>

          <div className="proj-row-items">
            <div className="csheet-img">
              {/* <img src={image2} alt="" /> */}
            </div>

            <div className="details">
                <div className="date">10/10/2021</div>
              <h3> Tc Ribaute les Tavernes - As Salindres</h3>
              <p className="detail_p">Dispo : Sébastien</p>
              

            </div>
          </div>
          <div className="proj-row-items">
            <div className="csheet-img">
              {/* <img src={image2} alt="" /> */}
            </div>

            <div className="details">
                <div className="date">17/10/2021</div>
              <h3> La Calmette - As Salindres</h3>
              <p className="detail_p">Dispo : Thierry - Sébastien</p>
              

            </div>
          </div>
          <div className="proj-row-items">
            <div className="csheet-img">
              {/* <img src={image2} alt="" /> */}
            </div>

            <div className="details">
                <div className="date">24/10/2021</div>
              <h3> As Salindres - Bessèges</h3>
              <p className="detail_p">Dispo : Thierry - Sébastien</p>
              
            </div>
          </div>
          <a href="sms://+622997083?body=I%27m%20interested%20in%20your%20product.%20Please%20contact%20me.">Send a SMS message</a>
          

        </div>

      </section>

    </>

  // <div className="projets_reas">
  //   <div className="portfolio_container">
  //     <h3>Voici la liste des projets réalisés ou en cours</h3>
  //     {/* <div className="w3-content w3-section titlepic">
  //   <img className="mySlides w3-animate-fading titlepic" src={image1} alt="paysage" />
  //   <img className="mySlides w3-animate-fading" src={image2} alt="paysage" />
  //   <img className="mySlides w3-animate-fading" src={image3} alt="paysage" />
  // </div> */}
  //     <div className="projets_capt1" data-aos="zoom-in-up" data-aos-duration="3000">

  //       <figure>
  //         <a href="http://cyr.netlify.app" target="_blank" rel="noreferrer">
  //           <img src={image3} className="imga" alt="paysage" />
  //         </a>
  //         <figcaption>La Deumeure de Cyr - Chambre d'hôte dans le pays de Salers (2021 - )</figcaption>
  //       </figure>
  //     </div>
  //     <div className="projets_capt2" data-aos="zoom-out" data-aos-duration="2000">
  //       <figure>
  //         <a href="http://www.atypeek.xyz" target="_blank" rel="noreferrer">
  //           <img src={image1} className="imga" alt="paysage" />
  //         </a>
  //         <figcaption>Atypeek : Projet de fin de formation (2021)</figcaption>
  //       </figure>
  //     </div>
  //     <div className="projets_capt3" data-aos="zoom-in-down" data-aos-duration="3000">

  //       <figure>
  //         <a href="http://www.salindrestennis.fr" target="_blank" rel="noreferrer">
  //           <img src={image2} className="imga" alt="paysage" />
  //         </a>
  //         // eslint-disable-next-line max-len
  //         <figcaption>As Salindres Tennis : Site du club de Tennis de Salindres (2019 - Aujourd'hui)</figcaption>
  //       </figure>
  //     </div>
  //     </div>
  //     </div>

  );
}

export default Rencontres;
