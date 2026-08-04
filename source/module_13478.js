// Module ID: 13478
// Function ID: 13479
// Dependencies: [13477]

// Module 13478

export default (arg0, arg1) => {
  try {
    const obj = { value: null, configurable: true, writable: true };
    obj[0] = arg1;
    defineProperty(require(13477), arg0, obj);
    return arg1;
  } catch (err) {
    require(13477)[tmp2] = tmp;
  }
};
