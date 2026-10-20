// Module ID: 15356
// Function ID: 15357
// Dependencies: []

// Module 15356

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
