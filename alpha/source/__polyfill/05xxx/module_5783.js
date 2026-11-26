// Module ID: 5783
// Function ID: 5784
// Dependencies: []

// Module 5783

export default (arg0) => {
  let str = encodeURIComponent(arg0);
  return str.replace(/[!'()*]/g, (str) => {
    str = str.charCodeAt(0);
    const str2 = str.toString(16);
    return "%" + str2.toUpperCase();
  });
};
