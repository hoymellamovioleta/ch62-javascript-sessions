export const changeIcon = (imageName) => {
  const logoElement = document.getElementById("logo");

  logoElement.src = `./assets/img/${imageName}.jpg`
};
