// Module ID: 1499
// Function ID: 17281
// Dependencies: []

// Module 1499

export default (arg0, arr) => {
  const obj = {};
  const keys = Object.keys(arg0);
  for (let num = 0; num < keys.length; num = num + 1) {
    let tmp2 = keys[num];
    let tmp3 = arg0[tmp2];
    if (tmp) {
      let tmp4 = -1 !== arr.indexOf(tmp2);
    } else {
      tmp4 = arr(tmp2, tmp3, arg0);
    }
    if (tmp4) {
      obj[tmp2] = tmp3;
    }
  }
  return obj;
};
