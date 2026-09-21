// Module ID: 14584
// Function ID: 14585
// Dependencies: []

// Module 14584

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
