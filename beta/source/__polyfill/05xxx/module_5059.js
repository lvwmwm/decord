// Module ID: 5059
// Function ID: 5060
// Dependencies: []

// Module 5059
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
