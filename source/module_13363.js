// Module ID: 13363
// Function ID: 13364
// Dependencies: [13362]

// Module 13363

export default (arg0, arg1) => {
  try {
    const obj = { value: null, configurable: true, writable: true };
    obj[0] = arg1;
    defineProperty(require(13362), arg0, obj);
    return arg1;
  } catch (err) {
    require(13362)[tmp2] = tmp;
  }
};
