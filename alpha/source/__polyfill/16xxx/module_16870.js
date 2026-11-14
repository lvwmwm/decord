// Module ID: 16870
// Function ID: 16871
// Dependencies: []
// Exports: default

// Module 16870
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
