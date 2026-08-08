// Module ID: 13571
// Function ID: 13572
// Dependencies: [13570]

// Module 13571

export default (arg0, arg1) => {
  try {
    const obj = { value: null, configurable: true, writable: true };
    obj[0] = arg1;
    defineProperty(require(13570), arg0, obj);
    return arg1;
  } catch (err) {
    require(13570)[tmp2] = tmp;
  }
};
