// Module ID: 3961
// Function ID: 32803
// Dependencies: []

// Module 3961

export default Array.isArray || ((arg0) => {
  return "[object Array]" == toString.call(arg0);
});
