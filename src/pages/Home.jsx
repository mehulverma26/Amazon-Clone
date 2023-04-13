import React from "react";
import "./Home.css";
import Product from "../components/Product";
import Header from "../components/Header";

function Home() {
  return (
    <>
    <Header />
      <div className="Home">
        <div className="home_container">
          <img
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />
          <div className="home__row">
            <Product
              id="12321341"
              title="The Lean Startup"
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
              price={600}
              rating={5}
            />
            <Product
              id="49538094"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={5000}
              rating={4}
              image="https://imgs.search.brave.com/IGfTPw4BBoU9HGVI7n90knYFP4OjOuamsAuMU7K-qno/rs:fit:706:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5R/b1Brbk9sQjZnYThN/T192OGpOY2V3SGFF/LSZwaWQ9QXBp"
            />
          </div>
          <div className="home__row">
            <Product
              id="4903850"
              title="Samsung LC49RG90SSuxen 49' Curved LED Gaming Monitor"
              price={60000}
              rating={3}
              image="https://imgs.search.brave.com/bG7V4lMz9HrxQFOqchabCoRsVEbMMAt1DLvTD_PJuRI/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5a/YXFIYjl4R0NqY2Ru/cjlGWFhrLTRnSGFF/NyZwaWQ9QXBp"
            />
            <Product
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={3000}
              rating={5}
              image="https://imgs.search.brave.com/EA_MURqyw-107fhnHTTVaj61DuZ5P3hS9XGnhqbRtyM/rs:fit:534:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/MWUyUWZqaXdTRS13/OGZua0FMd2hRSGFH/ayZwaWQ9QXBp"
            />
          </div>
          <div className="home__row">
            <Product
              id="325454345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 129GB) - Silver (4th Generation)"
              price={30000}
              rating={4}
              image="https://imgs.search.brave.com/FWCbQ7hPvUkWS4qD6BNVoJgGBeRxq5HOKaGSeBwpSo4/rs:fit:799:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5X/QkJKR1RxTkZYUWFC/UExiMXhMMDVnSGFF/WiZwaWQ9QXBp"
            />
            <Product
              id="4903850"
              title="Samsung LC49RG90SSuxen 49' Curved LED Gaming Monitor"
              price={34000}
              rating={3}
              image="https://imgs.search.brave.com/bG7V4lMz9HrxQFOqchabCoRsVEbMMAt1DLvTD_PJuRI/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5a/YXFIYjl4R0NqY2Ru/cjlGWFhrLTRnSGFF/NyZwaWQ9QXBp"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
