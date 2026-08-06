// Module ID: 13607
// Function ID: 13608
// Dependencies: []

// Module 13607
arg5.default = () => (arg0) => {
  let closure_0 = arg0;
  const features = {
    image(uri) {
      return closure_0.send("image", { uri: uri.uri, preview: uri.preview, filename: uri.filename, width: uri.width, height: uri.height, caption: uri.caption });
    }
  };
  return { features };
};
