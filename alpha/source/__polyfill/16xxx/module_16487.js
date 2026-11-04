// Module ID: 16487
// Function ID: 16488
// Dependencies: []
// Exports: default

// Module 16487

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
