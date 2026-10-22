// Module ID: 15613
// Function ID: 15614
// Dependencies: []
// Exports: default

// Module 15613

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
