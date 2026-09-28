// Module ID: 13792
// Function ID: 13793
// Dependencies: []

// Module 13792

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
