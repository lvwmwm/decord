// Module ID: 15743
// Function ID: 15744
// Dependencies: []

// Module 15743

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
