// Module ID: 16500
// Function ID: 16501
// Dependencies: []
// Exports: default

// Module 16500

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
