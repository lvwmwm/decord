// Module ID: 13228
// Function ID: 100378
// Name: image
// Dependencies: []

// Module 13228 (image)
arg5.default = function image() {
  return (arg0) => {
    const features = {
      image(uri) {
        return uri.send("image", { uri: uri.uri, preview: uri.preview, filename: uri.filename, width: uri.width, height: uri.height, caption: uri.caption });
      }
    };
    return { features };
  };
};
