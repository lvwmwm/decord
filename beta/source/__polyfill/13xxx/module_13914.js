// Module ID: 13914
// Function ID: 13915
// Dependencies: []
// Exports: default

// Module 13914

export default () => (arg0) => {
  let closure_0 = arg0;
  return {
    features: {
      clear() {
        return closure_0.send("clear");
      }
    }
  };
};
