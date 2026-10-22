// Module ID: 15626
// Function ID: 15627
// Dependencies: []
// Exports: default

// Module 15626

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
