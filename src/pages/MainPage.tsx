import { useEffect, useState } from "react";
import CustomFilter from "../components/CustomFilter";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import { fetchCars } from "../utils/fetchCars";
import { CarType } from "../types";

const MainPage = () => {
  const [cars, setCars] = useState<CarType[]>([]);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    fetchCars()
      .then((res) => setCars(res))
      .catch(() => setIsError(true));
  }, []);

  return (
    <div>
      <Hero />

      <div id="catalogue" className="mt-12 padding-x padding-y max-width">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Araba Kataloğu</h1>
          <p>Beğenebileceğin arabaları keşfet</p>
        </div>
      </div>

      <div className="home__filters">
        <SearchBar />
        <div className="home__filter-container">
          <CustomFilter />
          <CustomFilter />
        </div>
      </div>

      {isError && (
        <div>
          <h2>Üzgünüz Bir Sorun Oluştu</h2>
        </div>
      )}

      {!cars || cars.length < 0 ? (
        <h2>Aradığınız kriterlere uygun araba bulunamadı</h2>
      ) : (
        <section>
          <div>{cars.map((car) => car.make)}</div>
        </section>
      )}
      
    </div>
  );
};

export default MainPage;
