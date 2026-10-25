// Module ID: 15672
// Function ID: 15673
// Dependencies: []
// Exports: default

// Module 15672

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
