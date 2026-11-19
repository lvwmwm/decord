// Module ID: 15455
// Function ID: 15456
// Dependencies: []

// Module 15455

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
