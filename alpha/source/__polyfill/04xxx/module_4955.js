// Module ID: 4955
// Function ID: 4956
// Dependencies: []

// Module 4955
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
