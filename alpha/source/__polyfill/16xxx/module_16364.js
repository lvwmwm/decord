// Module ID: 16364
// Function ID: 16365
// Dependencies: []

// Module 16364

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
