const getImages = async () => {
  const url = "https://jsonplaceholder.typicode.com/photos?albumId=1" // Fetches only album 1 == 50 photos instead of 5000
  
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    return json
  } catch (error) {
    alert("There was an error loading images, please try again.")
    console.log("error", error);
  }
};

export default getImages;