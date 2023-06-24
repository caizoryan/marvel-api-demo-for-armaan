fetch(
  "https://mcuapi.herokuapp.com/api/v1/movies?page=1&limit=100&columns=title%2Ccover_url%2Crelease_date%2Cphase&order=chronology%2CASC&",
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }
)
  .then((res) => res.json())
  .then((data) => process_titles(data.data));

function process_titles(data) {
  let text = [];
  data.forEach((data) => {
    text.push(
      "<img src=" +
        data.cover_url +
        " />" +
        "Movie <h1>" +
        data.title +
        "</h1> was released on " +
        data.release_date +
        " and is a phase" +
        data.phase +
        " film"
    );
  });

  text.forEach((txt) => {
    make_card(txt);
  });
}

function make_card(text) {
  document.querySelector(
    ".container"
  ).innerHTML += `<div class="card">${text}</div>`;
}
