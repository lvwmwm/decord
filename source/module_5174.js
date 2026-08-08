// Module ID: 5174
// Function ID: 5175
// Dependencies: []

// Module 5174

export default (arg0) => encodeURIComponent(arg0).replace(/[!'()*]/g, (str) => {
  str = str.charCodeAt(0);
  return "%" + str.charCodeAt(0).toString(16).toUpperCase();
});
