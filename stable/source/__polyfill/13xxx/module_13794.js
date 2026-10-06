// Module ID: 13794
// Function ID: 13795
// Dependencies: []

// Module 13794

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
