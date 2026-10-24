// Module ID: 15544
// Function ID: 15545
// Dependencies: []

// Module 15544

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
