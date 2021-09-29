const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unplash API
const count = 10;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${config.apiKey}&count=${count}`;

// Create elemnts to disply photos, add them to DOM
function displayPhotos() {
  // Loop photosArray
  photosArray.forEach((photo) => {
    console.log(photo);
  });
}

// Get photos from Unplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // Catch error
  }
}

// On page load
getPhotos();
