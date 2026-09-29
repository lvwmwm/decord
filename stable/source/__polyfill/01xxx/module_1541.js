// Module ID: 1541
// Function ID: 1542
// Dependencies: []

// Module 1541

export default (arg0) => encodeURIComponent(arg0).replace(/[!'()*]/g, (str) => {
  str = str.charCodeAt(0);
  return "%" + str.charCodeAt(0).toString(16).toUpperCase();
});
