// Module ID: 14651
// Function ID: 14652
// Dependencies: []
// Exports: default

// Module 14651
let size;


export default () => (arg0) => {
  let closure_0 = arg0;
  return {
    features: {
      image(dependencyMap) {
        size = { uri: dependencyMap.uri, preview: dependencyMap.preview, filename: dependencyMap.filename, width: dependencyMap.width, height: dependencyMap.height, caption: dependencyMap.caption };
        return closure_0.send("image", size);
      }
    }
  };
};
