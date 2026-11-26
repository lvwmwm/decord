// Module ID: 5090
// Function ID: 5091
// Dependencies: []

// Module 5090
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
