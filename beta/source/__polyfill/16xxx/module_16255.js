// Module ID: 16255
// Function ID: 16256
// Dependencies: []
// Exports: default

// Module 16255

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
