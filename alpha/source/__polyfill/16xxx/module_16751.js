// Module ID: 16751
// Function ID: 16752
// Dependencies: []
// Exports: default

// Module 16751

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
