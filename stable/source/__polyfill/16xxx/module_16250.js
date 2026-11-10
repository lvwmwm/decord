// Module ID: 16250
// Function ID: 16251
// Dependencies: []
// Exports: default

// Module 16250

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
