// Module ID: 16398
// Function ID: 16399
// Dependencies: []
// Exports: default

// Module 16398

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
