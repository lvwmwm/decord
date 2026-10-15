// Module ID: 15329
// Function ID: 15330
// Dependencies: []
// Exports: default

// Module 15329
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
