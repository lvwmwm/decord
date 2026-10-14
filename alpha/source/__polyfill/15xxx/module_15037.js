// Module ID: 15037
// Function ID: 15038
// Dependencies: []
// Exports: default

// Module 15037

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
