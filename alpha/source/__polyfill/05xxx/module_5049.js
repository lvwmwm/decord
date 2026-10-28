// Module ID: 5049
// Function ID: 5050
// Dependencies: []

// Module 5049
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
