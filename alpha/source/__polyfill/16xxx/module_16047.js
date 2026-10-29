// Module ID: 16047
// Function ID: 16048
// Dependencies: []

// Module 16047

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
