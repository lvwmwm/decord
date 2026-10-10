// Module ID: 14532
// Function ID: 14533
// Dependencies: []

// Module 14532

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
