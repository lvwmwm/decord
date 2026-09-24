// Module ID: 14676
// Function ID: 14677
// Dependencies: []

// Module 14676

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
