// Module ID: 4964
// Function ID: 4965
// Dependencies: []

// Module 4964
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
