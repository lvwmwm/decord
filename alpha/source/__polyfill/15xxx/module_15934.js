// Module ID: 15934
// Function ID: 15935
// Dependencies: []
// Exports: default

// Module 15934

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
