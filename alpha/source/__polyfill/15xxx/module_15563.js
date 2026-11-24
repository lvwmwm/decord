// Module ID: 15563
// Function ID: 15564
// Dependencies: []

// Module 15563

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
