// Module ID: 14612
// Function ID: 14613
// Dependencies: []

// Module 14612

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
