// Module ID: 5048
// Function ID: 5049
// Dependencies: []

// Module 5048
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
