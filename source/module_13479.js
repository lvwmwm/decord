// Module ID: 13479
// Function ID: 13480
// Dependencies: [13478]

// Module 13479

export default (arg0, arg1) => {
  try {
    const obj = { value: null, configurable: true, writable: true };
    obj[0] = arg1;
    defineProperty(require(13478), arg0, obj);
    return arg1;
  } catch (err) {
    require(13478)[tmp2] = tmp;
  }
};
