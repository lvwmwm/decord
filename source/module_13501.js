// Module ID: 13501
// Function ID: 13502
// Dependencies: [13500]

// Module 13501

export default (arg0, arg1) => {
  try {
    const obj = { value: null, configurable: true, writable: true };
    obj[0] = arg1;
    defineProperty(require(13500), arg0, obj);
    return arg1;
  } catch (err) {
    require(13500)[tmp2] = tmp;
  }
};
