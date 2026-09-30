// Module ID: 14110
// Function ID: 14111
// Dependencies: []
// Exports: default

// Module 14110

export default () => (arg0) => {
  closure_0 = arg0;
  return {
    features: {
      clear() {
        return closure_0.send("clear");
      }
    }
  };
};
