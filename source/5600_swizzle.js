// Module ID: 5600
// Function ID: 47470
// Name: swizzle
// Dependencies: [5601]

// Module 5600 (swizzle)
function swizzle(arg0) {
  let items = [];
  let num = 0;
  let tmp = items;
  if (0 < arg0.length) {
    do {
      let tmp2 = arg0[num];
      let tmp3 = require;
      let tmp4 = dependencyMap;
      if (require(5601) /* isArrayish */(tmp2)) {
        let tmp7 = concat;
        let tmp8 = slice;
        let callResult = concat.call(items, slice.call(tmp2));
      } else {
        let arr = items.push(tmp2);
        callResult = items;
      }
      num = num + 1;
      items = callResult;
      tmp = callResult;
    } while (num < length);
  }
  return tmp;
}
swizzle.wrap = (arg0) => {
  let closure_0 = arg0;
  return () => callback(outer1_4(arguments));
};

export default swizzle;
