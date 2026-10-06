// Module ID: 14083
// Function ID: 14084
// Dependencies: []

// Module 14083

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
