// Module ID: 15479
// Function ID: 15480
// Dependencies: []
// Exports: default

// Module 15479

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
