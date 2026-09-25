// Module ID: 13837
// Function ID: 13838
// Dependencies: []

// Module 13837

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
