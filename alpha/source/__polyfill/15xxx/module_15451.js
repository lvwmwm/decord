// Module ID: 15451
// Function ID: 15452
// Dependencies: []
// Exports: default

// Module 15451

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
