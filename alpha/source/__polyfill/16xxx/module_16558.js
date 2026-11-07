// Module ID: 16558
// Function ID: 16559
// Dependencies: []
// Exports: default

// Module 16558

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
