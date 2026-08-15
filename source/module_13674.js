// Module ID: 13674
// Function ID: 13675
// Dependencies: [13673]

// Module 13674

export default (arg0, arg1) => {
  try {
    const obj = { value: null, configurable: true, writable: true };
    obj[0] = arg1;
    defineProperty(require(13673), arg0, obj);
    return arg1;
  } catch (err) {
    require(13673)[tmp2] = tmp;
  }
};
