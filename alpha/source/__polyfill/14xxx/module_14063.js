// Module ID: 14063
// Function ID: 14064
// Dependencies: []

// Module 14063

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
