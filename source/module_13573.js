// Module ID: 13573
// Function ID: 13574
// Dependencies: [13572]

// Module 13573

export default (arg0, arg1) => {
  try {
    const obj = { value: null, configurable: true, writable: true };
    obj[0] = arg1;
    defineProperty(require(13572), arg0, obj);
    return arg1;
  } catch (err) {
    require(13572)[tmp2] = tmp;
  }
};
