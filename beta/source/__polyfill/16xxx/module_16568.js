// Module ID: 16568
// Function ID: 16569
// Dependencies: []
// Exports: default

// Module 16568

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
