// Module ID: 4839
// Function ID: 4840
// Dependencies: []

// Module 4839
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
