// Module ID: 15708
// Function ID: 15709
// Dependencies: []
// Exports: default

// Module 15708

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
