// Module ID: 13793
// Function ID: 13794
// Dependencies: []

// Module 13793

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
