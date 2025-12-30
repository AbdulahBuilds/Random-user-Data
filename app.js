const fetchBtn = document.getElementById("fetchBtn");
const userName = document.getElementById("UN");
const userEmail = document.getElementById("UE");
const userLocation = document.getElementById("UL");
const userImage = document.getElementById("UI");
const userDetails = document.getElementById("UD");

// fetchBtn.addEventListener("click", () => {
//   fetch("https://randomuser.me/api/")
//     .then((response) => response.json())
//     .then((data) => {
//       const user = data.results[0];
//       console.log(user);

//       userName.textContent = `${user.name.first} ${user.name.last}`;
//       userEmail.textContent = user.email;
//       userLocation.textContent = `${user.location.city}, ${user.location.country}`;
//       userImage.src = `${user.picture.large}`;
//       userDetails.textContent = `Phone: ${user.phone} | Age: ${user.dob.age}`;

//     })
//     .catch((error) => {
//       console.error("Error fetching user:", error);
//     });
// });


fetchBtn.addEventListener('click', () => {
    // Clear previous user details
fetch('https://randomuser.me/api/')
  .then(response => response.json()) // convert response to JSON
  .then(data => {
    const user = data.results[0];
    //   console.log(user);

      userName.textContent = `${user.name.first} ${user.name.last}`;
      userEmail.textContent = user.email;
      userLocation.textContent = `${user.location.city}, ${user.location.country}`;
      userImage.src = `${user.picture.large}`;
      userDetails.textContent = `Phone: ${user.phone} | Age: ${user.dob.age}`;
  })
  .catch(error => {
    console.error('Error:', error);
  });

});
fetchBtn.click(); // Automatically fetch a user on page load
