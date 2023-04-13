let url = "https://kontests.net/api/v1/kick_start";
let response = fetch(url);
response
  .then((value) => {
    return value.json();
  })
  .then((contests) => {
    console.log(contests);

    ihtml = "";
    for (item in contests) {
      let image =
        "https://th.bing.com/th/id/R.ac5c9a0b19b9d097c3773012af41762f?rik=haRjvpYMcaQIcA&riu=http%3a%2f%2fwww.logoed.co.uk%2fwp-content%2fuploads%2f2014%2f04%2f22.jpg&ehk=hJFp5SP4sK%2b4YQHaawxYkSF1tud6hXng987i9Ii05rQ%3d&risl=&pid=ImgRaw&r=0";
      ihtml += `
   
      <div class="card mx-2  my-2" style="width: 22rem; height:32rem; ">
      <img class="card-img-top " src="${image}" width = 500 height = 200 alt="Card image cap">
      <div class="card-body border border-warning ">
          <h5 class="card-title">${contests[item].name.slice(0, 28)}...</h5>
          <p class="font-weight-bold"> Contest Organizer: ${
            contests[item].site
          }</p>
          <p class="font-weight-bold text-danger"> Start at: ${
            contests[item].start_time
          } </p>
          <p class="font-weight-bold text-danger"> Ends at: ${
            contests[item].end_time
          } </p>
          <p > Status: ${contests[item].status} </p>
          <a href="${
            contests[item].url
          }" class="btn btn-primary">Go to contest</a>
      </div>
  </div>
    `;
    }
    cardContainer.innerHTML = ihtml;
  });
