// Module ID: 15374
// Function ID: 15375
// Dependencies: []

// Module 15374

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
