let url = "https://kontests.net/api/v1/leet_code";
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
        "https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X2pwZy9ENjdwZWNlaWJlSVFJRGRNaWJiYW9kN3ZFaG4xRTN2UFNBMEE4N3ROamNLT0MyRm54WVFoeVJpYm5GeVJ0RWRPNXFzZ1VXMXZReDlZaWFQeHBTdFZwWEM4ZVEvNjQw?x-oss-process=image/format,png";
      ihtml += `
    
      <div class="card mx-2  my-2 shadow p-3 mb-5 bg-white rounded" style="width: 22rem; height:35rem;">
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
