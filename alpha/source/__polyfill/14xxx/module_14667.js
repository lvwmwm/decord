// Module ID: 14667
// Function ID: 14668
// Dependencies: []

// Module 14667

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
