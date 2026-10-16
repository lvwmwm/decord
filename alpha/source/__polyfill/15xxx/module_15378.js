// Module ID: 15378
// Function ID: 15379
// Dependencies: []
// Exports: default

// Module 15378

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
