// Module ID: 4671
// Function ID: 4672
// Dependencies: []

// Module 4671
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
