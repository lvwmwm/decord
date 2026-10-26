// Module ID: 15671
// Function ID: 15672
// Dependencies: []
// Exports: default

// Module 15671

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
