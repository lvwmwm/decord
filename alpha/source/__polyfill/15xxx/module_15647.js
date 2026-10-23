// Module ID: 15647
// Function ID: 15648
// Dependencies: []
// Exports: default

// Module 15647

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
