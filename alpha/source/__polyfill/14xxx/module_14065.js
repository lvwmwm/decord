// Module ID: 14065
// Function ID: 14066
// Dependencies: []

// Module 14065

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
