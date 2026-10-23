// Module ID: 6721
// Function ID: 6722
// Dependencies: []

// Module 6721

export default (arg0) => {
  let str = encodeURIComponent(arg0);
  return str.replace(/[!'()*]/g, (str) => {
    str = str.charCodeAt(0);
    const str2 = str.toString(16);
    return "%" + str2.toUpperCase();
  });
};
