// Module ID: 14683
// Function ID: 14684
// Dependencies: []
// Exports: default

// Module 14683

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
