// Module ID: 14505
// Function ID: 14506
// Dependencies: []
// Exports: default

// Module 14505

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
