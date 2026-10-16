// Module ID: 15245
// Function ID: 15246
// Dependencies: []

// Module 15245

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
