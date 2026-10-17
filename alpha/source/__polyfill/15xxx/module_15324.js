// Module ID: 15324
// Function ID: 15325
// Dependencies: []

// Module 15324

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
