// Module ID: 15255
// Function ID: 15256
// Dependencies: []

// Module 15255

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
