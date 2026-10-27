// Module ID: 15549
// Function ID: 15550
// Dependencies: []

// Module 15549

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
