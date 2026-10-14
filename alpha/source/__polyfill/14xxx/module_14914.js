// Module ID: 14914
// Function ID: 14915
// Dependencies: []

// Module 14914

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
