// Module ID: 16786
// Function ID: 16787
// Dependencies: []

// Module 16786

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
