// Module ID: 15685
// Function ID: 15686
// Dependencies: []

// Module 15685

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
