// Module ID: 14678
// Function ID: 14679
// Dependencies: []
// Exports: default

// Module 14678

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
