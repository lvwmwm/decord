// Module ID: 3959
// Function ID: 32790
// Dependencies: []

// Module 3959

export default Array.isArray || (arg0) => {
  return "[object Array]" == toString.call(arg0);
};
