// Module ID: 16132
// Function ID: 16133
// Dependencies: []

// Module 16132

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
