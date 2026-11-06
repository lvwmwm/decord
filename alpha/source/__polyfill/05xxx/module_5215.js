// Module ID: 5215
// Function ID: 5216
// Dependencies: []

// Module 5215
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
