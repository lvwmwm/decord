// Module ID: 5357
// Function ID: 5358
// Dependencies: []

// Module 5357
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
