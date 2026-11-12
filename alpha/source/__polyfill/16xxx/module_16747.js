// Module ID: 16747
// Function ID: 16748
// Dependencies: []
// Exports: default

// Module 16747
let size;


export default () => (arg0) => {
  let closure_0 = arg0;
  return {
    features: {
      image(uri) {
        size = { uri: uri.uri, preview: uri.preview, filename: uri.filename, width: uri.width, height: uri.height, caption: uri.caption };
        return closure_0.send("image", size);
      }
    }
  };
};
