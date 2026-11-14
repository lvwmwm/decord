// Module ID: 5363
// Function ID: 5364
// Dependencies: []

// Module 5363
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
