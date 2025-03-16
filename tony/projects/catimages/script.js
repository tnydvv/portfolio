const catSearchURL = "https://api.thecatapi.com/v1/images/search";
const imageElement = document.querySelector("#picture");

let catImageURL;

async function getNewImage() {
  try {
    await fetch(catSearchURL)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data[0].url);
        catImageURL = data[0].url;
        imageElement.src = catImageURL;
      });
  } catch (error) {
    console.log("Error:", error);
  }
}
