// Module ID: 4841
// Function ID: 4842
// Dependencies: []

// Module 4841
const fn = Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});

export default fn;
