// Module ID: 15667
// Function ID: 15668
// Dependencies: []
// Exports: default

// Module 15667

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
