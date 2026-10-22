// Module ID: 15503
// Function ID: 15504
// Dependencies: []

// Module 15503

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
