// Module ID: 14555
// Function ID: 14556
// Dependencies: []

// Module 14555

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
