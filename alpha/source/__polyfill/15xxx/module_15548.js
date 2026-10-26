// Module ID: 15548
// Function ID: 15549
// Dependencies: []

// Module 15548

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
