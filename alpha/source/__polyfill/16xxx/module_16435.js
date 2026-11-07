// Module ID: 16435
// Function ID: 16436
// Dependencies: []

// Module 16435

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
