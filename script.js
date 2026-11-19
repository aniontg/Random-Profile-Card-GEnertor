const profileName = document.querySelector(".name");
const profilePicture = document.querySelector(".img-cont");
const profileDetails = document.querySelector(".profile-details");
fetch("https://randomuser.me/api/")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    let dataResults = data.results;

    dataResults.forEach(function (name, id) {
      const nameDiv = document.createElement("div");
      nameDiv.innerHTML = `
    <p>${name.name.title} ${name.name.first} ${name.name.last}</p>
    `;
      profileName.insertBefore(nameDiv, profileName.querySelector("span"));
    });

    dataResults.forEach(function (img, id) {
      const imgDiv = document.createElement("div");
      imgDiv.innerHTML = `
   <img src=${img.picture.large} >
    `;
      profilePicture.appendChild(imgDiv);
    });

    dataResults.forEach(function (user, id) {
      const detailValues = profileDetails.querySelectorAll(".tags span");
      detailValues[0].textContent = `${user.name.first} ${user.name.last}`;
      detailValues[1].textContent = user.email;
      detailValues[2].textContent = user.gender;
      detailValues[3].textContent = user.phone;
      detailValues[4].textContent = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}`;
    });
  });
