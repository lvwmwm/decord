// Module ID: 15368
// Function ID: 15369
// Dependencies: []
// Exports: default

// Module 15368

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
