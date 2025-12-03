export const changeIcon = (imageName) => {
  const logoElement = document.getElementById("logo");

  logoElement.src = `./assets/img/${imageName}.jpg`
  //logoElement.src = `./public/img/${imageName}.jpg`;
};
