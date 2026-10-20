// Module ID: 14560
// Function ID: 14561
// Dependencies: []

// Module 14560

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
