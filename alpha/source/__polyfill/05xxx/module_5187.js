// Module ID: 5187
// Function ID: 5188
// Dependencies: []

// Module 5187
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
