// Module ID: 15542
// Function ID: 15543
// Dependencies: []

// Module 15542

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
