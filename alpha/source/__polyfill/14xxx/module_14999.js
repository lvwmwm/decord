// Module ID: 14999
// Function ID: 15000
// Dependencies: []
// Exports: default

// Module 14999

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
