// Module ID: 5217
// Function ID: 5218
// Dependencies: []

// Module 5217
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
