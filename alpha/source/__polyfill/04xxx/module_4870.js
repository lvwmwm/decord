// Module ID: 4870
// Function ID: 4871
// Dependencies: []

// Module 4870
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
