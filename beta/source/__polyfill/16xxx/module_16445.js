// Module ID: 16445
// Function ID: 16446
// Dependencies: []

// Module 16445

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
