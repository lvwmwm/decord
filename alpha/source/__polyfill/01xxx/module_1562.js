// Module ID: 1562
// Function ID: 1563
// Dependencies: []

// Module 1562

export default (arg0) => {
  let str = encodeURIComponent(arg0);
  return str.replace(/[!'()*]/g, (str) => {
    str = str.charCodeAt(0);
    const str2 = str.toString(16);
    return "%" + str2.toUpperCase();
  });
};
