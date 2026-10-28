// Module ID: 15811
// Function ID: 15812
// Dependencies: []

// Module 15811

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
