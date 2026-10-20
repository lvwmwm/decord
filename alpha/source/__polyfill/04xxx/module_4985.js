// Module ID: 4985
// Function ID: 4986
// Dependencies: []

// Module 4985
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
