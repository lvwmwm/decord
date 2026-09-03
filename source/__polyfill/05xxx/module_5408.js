// Module ID: 5408
// Function ID: 5409
// Dependencies: []

// Module 5408

export default (arg0) => encodeURIComponent(arg0).replace(/[!'()*]/g, (str) => {
  str = str.charCodeAt(0);
  return "%" + str.charCodeAt(0).toString(16).toUpperCase();
});
