// Module ID: 13487
// Function ID: 13488
// Dependencies: [13486]

// Module 13487

export default (arg0, arg1) => {
  try {
    const obj = { value: null, configurable: true, writable: true };
    obj[0] = arg1;
    defineProperty(require(13486), arg0, obj);
    return arg1;
  } catch (err) {
    require(13486)[tmp2] = tmp;
  }
};
