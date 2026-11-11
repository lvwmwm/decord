// Module ID: 16633
// Function ID: 16634
// Dependencies: []

// Module 16633

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
