// Module ID: 16390
// Function ID: 16391
// Dependencies: []

// Module 16390

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
