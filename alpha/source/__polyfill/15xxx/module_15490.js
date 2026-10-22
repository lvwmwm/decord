// Module ID: 15490
// Function ID: 15491
// Dependencies: []

// Module 15490

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
