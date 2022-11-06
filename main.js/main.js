const API = "ZQQ8GMN - TN54SGK - NB3MKEC - ZKB8V06";
const API_CINEMA = "http://localhost:8000/cinema";

getMovies(API_CINEMA);

async function getMovies(url) {
  const resp = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      "ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06": API,
    },
  });
  const respData = await resp.json();
  console.log(respData);
}
