// Module ID: 14206
// Function ID: 14207
// Dependencies: []
// Exports: default

// Module 14206

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
