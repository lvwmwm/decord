// Module ID: 13460
// Function ID: 103221
// Name: result
// Dependencies: []

// Module 13460 (result)
arg5.default = function image() {
  return (arg0) => {
    let closure_0 = arg0;
    const features = {
      image(uri) {
        return closure_0.send("image", { uri: uri.uri, preview: uri.preview, filename: uri.filename, width: uri.width, height: uri.height, caption: uri.caption });
      }
    };
    return { features };
  };
};
