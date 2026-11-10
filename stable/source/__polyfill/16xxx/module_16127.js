// Module ID: 16127
// Function ID: 16128
// Dependencies: []

// Module 16127

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
