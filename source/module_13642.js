// Module ID: 13642
// Function ID: 13643
// Dependencies: [13641]

// Module 13642

export default (arg0, arg1) => {
  try {
    const obj = { value: null, configurable: true, writable: true };
    obj[0] = arg1;
    defineProperty(require(13641), arg0, obj);
    return arg1;
  } catch (err) {
    require(13641)[tmp2] = tmp;
  }
};
