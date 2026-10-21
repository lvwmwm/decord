// Module ID: 15569
// Function ID: 15570
// Dependencies: []
// Exports: default

// Module 15569

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
