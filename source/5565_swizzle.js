// Module ID: 5565
// Function ID: 47309
// Name: swizzle
// Dependencies: []

// Module 5565 (swizzle)
function swizzle(arg0) {
  let items = [];
  let num = 0;
  let tmp = items;
  if (0 < arg0.length) {
    do {
      let tmp2 = arg0[num];
      let tmp3 = closure_0;
      let tmp4 = closure_1;
      if (closure_0(closure_1[0])(tmp2)) {
        let tmp7 = closure_2;
        let tmp8 = closure_3;
        let callResult = closure_2.call(items, closure_3.call(tmp2));
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
  const require = arg0;
  return () => arg0(callback(arguments));
};

export default swizzle;
