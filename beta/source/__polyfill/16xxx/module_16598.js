// Module ID: 16598
// Function ID: 16599
// Dependencies: []
// Exports: default

// Module 16598

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
