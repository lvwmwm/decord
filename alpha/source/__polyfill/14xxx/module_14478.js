// Module ID: 14478
// Function ID: 14479
// Dependencies: []

// Module 14478

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
