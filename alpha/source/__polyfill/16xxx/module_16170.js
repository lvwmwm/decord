// Module ID: 16170
// Function ID: 16171
// Dependencies: []
// Exports: default

// Module 16170

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
