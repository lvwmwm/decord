// Module ID: 14655
// Function ID: 14656
// Dependencies: []
// Exports: default

// Module 14655

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
