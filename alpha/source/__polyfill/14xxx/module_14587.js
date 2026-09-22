// Module ID: 14587
// Function ID: 14588
// Dependencies: []

// Module 14587

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
