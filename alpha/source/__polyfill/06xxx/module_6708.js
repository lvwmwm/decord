// Module ID: 6708
// Function ID: 6709
// Dependencies: []

// Module 6708

export default (arg0) => {
  let str = encodeURIComponent(arg0);
  return str.replace(/[!'()*]/g, (str) => {
    str = str.charCodeAt(0);
    const str2 = str.toString(16);
    return "%" + str2.toUpperCase();
  });
};
