// Module ID: 14390
// Function ID: 14391
// Dependencies: []

// Module 14390

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
