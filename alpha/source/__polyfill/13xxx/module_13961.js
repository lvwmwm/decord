// Module ID: 13961
// Function ID: 13962
// Dependencies: []

// Module 13961

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
