// Module ID: 13630
// Function ID: 13631
// Dependencies: [13629]

// Module 13630

export default (arg0, arg1) => {
  try {
    const obj = { value: null, configurable: true, writable: true };
    obj[0] = arg1;
    defineProperty(require(13629), arg0, obj);
    return arg1;
  } catch (err) {
    require(13629)[tmp2] = tmp;
  }
};
