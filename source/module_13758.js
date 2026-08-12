// Module ID: 13758
// Function ID: 13759
// Dependencies: []

// Module 13758
arg5.default = () => (arg0) => {
  let closure_0 = arg0;
  const features = {
    image(uri) {
      return closure_0.send("image", { uri: uri.uri, preview: uri.preview, filename: uri.filename, width: uri.width, height: uri.height, caption: uri.caption });
    }
  };
  return { features };
};
