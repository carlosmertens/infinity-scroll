const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unplash API url
const count = 10;
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${config.apiKey}&count=${count}`;

// Helper function to set attributes to DOM elements
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create elements to disply photos, add them to DOM
function displayPhotos() {
  // Loop photosArray
  photosArray.forEach((photo) => {
    // Create anchor link to Unplash website
    const anchor = document.createElement('a');
    setAttributes(anchor, {
      href: photo.links.html,
      target: '_blank',
    });
    // Create image element
    const image = document.createElement('img');
    setAttributes(image, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // Add image into anchor and them add them to image container
    anchor.appendChild(image);
    imageContainer.appendChild(anchor);
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
