// Module ID: 15446
// Function ID: 15447
// Dependencies: []

// Module 15446

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
