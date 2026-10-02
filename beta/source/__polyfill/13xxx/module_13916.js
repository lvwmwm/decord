// Module ID: 13916
// Function ID: 13917
// Dependencies: []
// Exports: default

// Module 13916

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
