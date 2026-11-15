// Module ID: 16475
// Function ID: 16476
// Dependencies: []

// Module 16475

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
