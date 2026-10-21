// Module ID: 5006
// Function ID: 5007
// Dependencies: []

// Module 5006
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
