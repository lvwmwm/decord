// Module ID: 4953
// Function ID: 4954
// Dependencies: []

// Module 4953
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
