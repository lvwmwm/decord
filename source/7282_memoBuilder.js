// Module ID: 7282
// Function ID: 58712
// Name: memoBuilder
// Dependencies: []

// Module 7282 (memoBuilder)
arg5.memoBuilder = function memoBuilder() {
  let closure_0 = tmp;
  if ("function" === typeof WeakSet) {
    const _WeakSet = WeakSet;
    let weakSet = new WeakSet();
  } else {
    weakSet = [];
  }
  const items = [
    function memoize(arg0) {
      let arr = weakSet;
      if (closure_0) {
        const tmp5 = !arr.has(arg0);
        let flag3 = !tmp5;
        if (tmp5) {
          weakSet.add(arg0);
          flag3 = false;
        }
        return flag3;
      } else {
        let num = 0;
        if (0 < arr.length) {
          while (weakSet[num] !== arg0) {
            num = num + 1;
            let tmp2 = weakSet;
          }
          return true;
        }
        arr = weakSet.push(arg0);
        return false;
      }
    },
    function unmemoize(arg0) {
      if (closure_0) {
        arr.delete(arg0);
      } else {
        let num = 0;
        if (0 < arr.length) {
          while (weakSet[num] !== arg0) {
            num = num + 1;
            let tmp3 = weakSet;
          }
          weakSet.splice(num, 1);
        }
      }
    }
  ];
  return items;
};
