// Module ID: 13638
// Function ID: 13639
// Dependencies: [13637]

// Module 13638

export default (arg0, arg1) => {
  try {
    const obj = { value: null, configurable: true, writable: true };
    obj[0] = arg1;
    defineProperty(require(13637), arg0, obj);
    return arg1;
  } catch (err) {
    require(13637)[tmp2] = tmp;
  }
};
