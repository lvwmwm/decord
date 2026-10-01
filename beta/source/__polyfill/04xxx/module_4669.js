// Module ID: 4669
// Function ID: 4670
// Dependencies: []

// Module 4669
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
