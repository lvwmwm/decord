// Module ID: 5016
// Function ID: 5017
// Dependencies: []

// Module 5016
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
