fetch("../elements/nav-bar.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.getElementById("nav-bar").innerHTML = data;
  });
fetch("../elements/footer.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });
