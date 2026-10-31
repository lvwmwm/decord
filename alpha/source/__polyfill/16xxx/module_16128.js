// Module ID: 16128
// Function ID: 16129
// Dependencies: []

// Module 16128

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
