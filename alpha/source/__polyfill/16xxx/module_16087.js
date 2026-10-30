// Module ID: 16087
// Function ID: 16088
// Dependencies: []

// Module 16087

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
