// Module ID: 6671
// Function ID: 6672
// Dependencies: []

// Module 6671

export default (arg0) => {
  let str = encodeURIComponent(arg0);
  return str.replace(/[!'()*]/g, (str) => {
    str = str.charCodeAt(0);
    const str2 = str.toString(16);
    return "%" + str2.toUpperCase();
  });
};
