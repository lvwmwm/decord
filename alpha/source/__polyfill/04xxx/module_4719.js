// Module ID: 4719
// Function ID: 4720
// Dependencies: []

// Module 4719
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
