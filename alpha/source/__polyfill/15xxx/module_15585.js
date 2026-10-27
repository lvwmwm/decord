// Module ID: 15585
// Function ID: 15586
// Dependencies: []

// Module 15585

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
