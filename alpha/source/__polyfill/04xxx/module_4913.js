// Module ID: 4913
// Function ID: 4914
// Dependencies: []

// Module 4913
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
