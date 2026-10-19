// Module ID: 15328
// Function ID: 15329
// Dependencies: []

// Module 15328

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
