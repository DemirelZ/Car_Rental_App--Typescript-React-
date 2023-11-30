const options = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "5e1b5b32c4mshad5b1b1f3e1c3c4p1b95fcjsn83a801dd00aa",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

export async function fetchCars() {
  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`,
    options
  );

  return await res.json();
}
