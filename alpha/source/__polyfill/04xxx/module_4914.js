// Module ID: 4914
// Function ID: 4915
// Dependencies: []

// Module 4914
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
