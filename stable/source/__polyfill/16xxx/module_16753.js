// Module ID: 16753
// Function ID: 16754
// Dependencies: []

// Module 16753

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
