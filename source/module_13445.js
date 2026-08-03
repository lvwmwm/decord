// Module ID: 13445
// Function ID: 13446
// Dependencies: [13444]

// Module 13445

export default (arg0, arg1) => {
  try {
    const obj = { value: null, configurable: true, writable: true };
    obj[0] = arg1;
    defineProperty(require(13444), arg0, obj);
    return arg1;
  } catch (err) {
    require(13444)[tmp2] = tmp;
  }
};
