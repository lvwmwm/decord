// Module ID: 16909
// Function ID: 16910
// Dependencies: []
// Exports: default

// Module 16909

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
