// Module ID: 13996
// Function ID: 13997
// Dependencies: []

// Module 13996

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
