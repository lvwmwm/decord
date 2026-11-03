// Module ID: 16275
// Function ID: 16276
// Dependencies: []

// Module 16275

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
