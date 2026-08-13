// Module ID: 13639
// Function ID: 13640
// Dependencies: [13638]

// Module 13639

export default (arg0, arg1) => {
  try {
    const obj = { value: null, configurable: true, writable: true };
    obj[0] = arg1;
    defineProperty(require(13638), arg0, obj);
    return arg1;
  } catch (err) {
    require(13638)[tmp2] = tmp;
  }
};
