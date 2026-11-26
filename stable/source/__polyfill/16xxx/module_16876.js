// Module ID: 16876
// Function ID: 16877
// Dependencies: []
// Exports: default

// Module 16876

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
