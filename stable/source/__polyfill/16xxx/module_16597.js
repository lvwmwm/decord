// Module ID: 16597
// Function ID: 16598
// Dependencies: []
// Exports: default

// Module 16597

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
