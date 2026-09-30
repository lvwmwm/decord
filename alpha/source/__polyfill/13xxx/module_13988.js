// Module ID: 13988
// Function ID: 13989
// Dependencies: []

// Module 13988

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
