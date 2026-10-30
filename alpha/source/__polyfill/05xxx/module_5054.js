// Module ID: 5054
// Function ID: 5055
// Dependencies: []

// Module 5054
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
