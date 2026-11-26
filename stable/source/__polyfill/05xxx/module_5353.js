// Module ID: 5353
// Function ID: 5354
// Dependencies: []

// Module 5353
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
