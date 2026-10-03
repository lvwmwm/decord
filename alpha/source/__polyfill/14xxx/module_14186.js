// Module ID: 14186
// Function ID: 14187
// Dependencies: []
// Exports: default

// Module 14186

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
