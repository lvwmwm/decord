// Module ID: 14581
// Function ID: 14582
// Dependencies: []

// Module 14581

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
