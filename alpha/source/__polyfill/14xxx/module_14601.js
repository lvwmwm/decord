// Module ID: 14601
// Function ID: 14602
// Dependencies: []
// Exports: default

// Module 14601

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
