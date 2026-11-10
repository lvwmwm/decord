// Module ID: 16472
// Function ID: 16473
// Dependencies: []

// Module 16472

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
