// Module ID: 5300
// Function ID: 5301
// Dependencies: []

// Module 5300
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
