// Module ID: 13581
// Function ID: 13582
// Dependencies: [13580]

// Module 13581

export default (arg0, arg1) => {
  try {
    const obj = { value: null, configurable: true, writable: true };
    obj[0] = arg1;
    defineProperty(require(13580), arg0, obj);
    return arg1;
  } catch (err) {
    require(13580)[tmp2] = tmp;
  }
};
