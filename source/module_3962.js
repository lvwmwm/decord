// Module ID: 3962
// Function ID: 32815
// Dependencies: []

// Module 3962

export default Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});
