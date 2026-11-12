// Module ID: 16628
// Function ID: 16629
// Dependencies: []

// Module 16628

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
