// Module ID: 15540
// Function ID: 15541
// Dependencies: []

// Module 15540

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
