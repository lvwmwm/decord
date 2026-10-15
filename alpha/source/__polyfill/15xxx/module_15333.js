// Module ID: 15333
// Function ID: 15334
// Dependencies: []
// Exports: default

// Module 15333

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
