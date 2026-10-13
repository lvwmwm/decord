// Module ID: 14876
// Function ID: 14877
// Dependencies: []

// Module 14876

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
