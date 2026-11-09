// Module ID: 5185
// Function ID: 5186
// Dependencies: []

// Module 5185
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
