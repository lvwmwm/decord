// Module ID: 14188
// Function ID: 14189
// Dependencies: []
// Exports: default

// Module 14188

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
