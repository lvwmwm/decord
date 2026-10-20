// Module ID: 15497
// Function ID: 15498
// Dependencies: []
// Exports: default

// Module 15497

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
