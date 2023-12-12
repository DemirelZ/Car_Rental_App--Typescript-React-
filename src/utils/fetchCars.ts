import { CarType, FilterType } from "../types";

const options = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "5e1b5b32c4mshad5b1b1f3e1c3c4p1b95fcjsn83a801dd00aa",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export async function fetchCars(filters: FilterType): Promise<CarType[]> {
  const {
    make = "bmw",
    model = "m3",
    limit = "5",
    year = "",
    fuel_type = "",
  } = filters;

  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&limit=${limit}&year=${year}&fuel_type=${fuel_type}`,
    options
  );

  const result = await res.json();

  return result;
}
