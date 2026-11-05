// Module ID: 16513
// Function ID: 16514
// Dependencies: []
// Exports: default

// Module 16513

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
