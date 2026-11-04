// Module ID: 16377
// Function ID: 16378
// Dependencies: []

// Module 16377

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
