// Module ID: 16595
// Function ID: 16596
// Dependencies: []
// Exports: default

// Module 16595

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
