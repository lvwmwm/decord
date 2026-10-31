// Module ID: 16251
// Function ID: 16252
// Dependencies: []
// Exports: default

// Module 16251

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
