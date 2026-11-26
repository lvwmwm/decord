// Module ID: 15736
// Function ID: 15737
// Dependencies: []

// Module 15736

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
