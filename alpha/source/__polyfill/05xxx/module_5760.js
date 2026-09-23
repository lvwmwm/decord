// Module ID: 5760
// Function ID: 5761
// Dependencies: []

// Module 5760

export default (arg0) => encodeURIComponent(arg0).replace(/[!'()*]/g, (str) => {
  str = str.charCodeAt(0);
  return "%" + str.charCodeAt(0).toString(16).toUpperCase();
});
