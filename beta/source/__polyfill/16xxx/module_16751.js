// Module ID: 16751
// Function ID: 16752
// Dependencies: []

// Module 16751

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
