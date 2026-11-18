// Module ID: 15469
// Function ID: 15470
// Dependencies: []

// Module 15469

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
