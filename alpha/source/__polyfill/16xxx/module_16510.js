// Module ID: 16510
// Function ID: 16511
// Dependencies: []
// Exports: default

// Module 16510

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
