// Module ID: 15419
// Function ID: 15420
// Dependencies: []

// Module 15419

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
