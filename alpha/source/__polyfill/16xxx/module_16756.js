// Module ID: 16756
// Function ID: 16757
// Dependencies: []
// Exports: default

// Module 16756

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
