// Module ID: 15583
// Function ID: 15584
// Dependencies: []

// Module 15583

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
