// Module ID: 1375
// Function ID: 16512
// Name: availableTypedArrays
// Dependencies: []

// Module 1375 (availableTypedArrays)
if ("undefined" !== typeof globalThis) {
  const global = globalThis;
}

export default function availableTypedArrays() {
  const items = [];
  let num = 0;
  if (0 < require(dependencyMap[0]).length) {
    do {
      let tmp = closure_2;
      let tmp2 = closure_0;
      let tmp3 = closure_1;
      if ("function" === typeof closure_2[closure_0(undefined, closure_1[0])[num]]) {
        let tmp4 = closure_0;
        let tmp5 = closure_1;
        items[items.length] = closure_0(closure_1[0])[num];
      }
      num = num + 1;
      let tmp6 = closure_0;
      let tmp7 = closure_1;
    } while (num < closure_0(closure_1[0]).length);
  }
  return items;
};
