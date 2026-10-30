// Module ID: 16210
// Function ID: 16211
// Dependencies: []
// Exports: default

// Module 16210

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
