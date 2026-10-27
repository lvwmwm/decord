// Module ID: 5017
// Function ID: 5018
// Dependencies: []

// Module 5017
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
