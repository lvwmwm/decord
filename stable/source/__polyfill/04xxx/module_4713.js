// Module ID: 4713
// Function ID: 4714
// Dependencies: []

// Module 4713
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
