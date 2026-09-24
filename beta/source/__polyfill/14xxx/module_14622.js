// Module ID: 14622
// Function ID: 14623
// Dependencies: []

// Module 14622

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
