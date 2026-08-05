// Module ID: 13450
// Function ID: 13451
// Dependencies: [13449]

// Module 13450

export default (arg0, arg1) => {
  try {
    const obj = { value: null, configurable: true, writable: true };
    obj[0] = arg1;
    defineProperty(require(13449), arg0, obj);
    return arg1;
  } catch (err) {
    require(13449)[tmp2] = tmp;
  }
};
