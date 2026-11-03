// Module ID: 5186
// Function ID: 5187
// Dependencies: []

// Module 5186
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
