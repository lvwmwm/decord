// Module ID: 14382
// Function ID: 14383
// Dependencies: []

// Module 14382

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
