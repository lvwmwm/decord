// Module ID: 5050
// Function ID: 5051
// Dependencies: []

// Module 5050
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
