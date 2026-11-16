// Module ID: 16474
// Function ID: 16475
// Dependencies: []

// Module 16474

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
