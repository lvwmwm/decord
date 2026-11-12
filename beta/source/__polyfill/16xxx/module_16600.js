// Module ID: 16600
// Function ID: 16601
// Dependencies: []
// Exports: default

// Module 16600

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
