// Module ID: 5014
// Function ID: 5015
// Dependencies: []

// Module 5014
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
