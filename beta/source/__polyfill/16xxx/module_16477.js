// Module ID: 16477
// Function ID: 16478
// Dependencies: []

// Module 16477

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
