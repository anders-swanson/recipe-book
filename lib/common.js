// Utility functions
export function CapitalizeWords(s) {
  return s
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.substr(1);
    })
    .join(" ");
}

export function rawData(file) {
  return (
    "https://raw.githubusercontent.com/anders-swanson/data/master/data/" + file
  );
}

export function backgroundImageStyle(image, opacity = 0.1) {
  return {
    backgroundImage: `url(${image}), linear-gradient(rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, ${opacity}))`,
  };
}
