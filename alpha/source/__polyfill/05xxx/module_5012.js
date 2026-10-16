// Module ID: 5012
// Function ID: 5013
// Dependencies: []

// Module 5012
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
