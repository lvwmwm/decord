// Module ID: 5213
// Function ID: 5214
// Dependencies: []

// Module 5213

export default (arg0) => encodeURIComponent(arg0).replace(/[!'()*]/g, (str) => {
  str = str.charCodeAt(0);
  return "%" + str.charCodeAt(0).toString(16).toUpperCase();
});
