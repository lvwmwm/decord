// Module ID: 4960
// Function ID: 4961
// Dependencies: []

// Module 4960
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
