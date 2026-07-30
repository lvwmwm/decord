// Module ID: 13358
// Function ID: 13359
// Dependencies: [13357]

// Module 13358

export default (arg0, arg1) => {
  try {
    const obj = { value: null, configurable: true, writable: true };
    obj[0] = arg1;
    defineProperty(require(13357), arg0, obj);
    return arg1;
  } catch (err) {
    require(13357)[tmp2] = tmp;
  }
};
