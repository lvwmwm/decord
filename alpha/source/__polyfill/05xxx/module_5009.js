// Module ID: 5009
// Function ID: 5010
// Dependencies: []

// Module 5009
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
