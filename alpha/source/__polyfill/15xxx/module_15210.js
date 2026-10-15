// Module ID: 15210
// Function ID: 15211
// Dependencies: []

// Module 15210

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
