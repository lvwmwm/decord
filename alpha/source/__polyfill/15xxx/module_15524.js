// Module ID: 15524
// Function ID: 15525
// Dependencies: []

// Module 15524

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
