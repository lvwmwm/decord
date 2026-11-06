// Module ID: 16387
// Function ID: 16388
// Dependencies: []

// Module 16387

export default (fn) => {
  try {
    return fn();
  } catch (err) {
    return true;
  }
};
