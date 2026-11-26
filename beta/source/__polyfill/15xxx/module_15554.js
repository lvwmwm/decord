// Module ID: 15554
// Function ID: 15555
// Dependencies: []

// Module 15554

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
