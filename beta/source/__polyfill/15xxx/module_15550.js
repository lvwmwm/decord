// Module ID: 15550
// Function ID: 15551
// Dependencies: []

// Module 15550

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
