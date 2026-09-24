// Module ID: 13191
// Function ID: 13192
// Name: memoBuilder
// Dependencies: []
// Exports: memoBuilder

// Module 13191 (memoBuilder)

export const memoBuilder = function memoBuilder() {
  closure_0 = typeof WeakSet === "function";
  if (typeof WeakSet === "function") {
    const _WeakSet = WeakSet;
    let weakSet = new WeakSet();
  } else {
    weakSet = [];
  }
  const items = [
    function memoize(arg0) {
      if (closure_0) {
        let flag3 = arr.has(arg0);
        if (!flag3) {
          arr.add(arg0);
          flag3 = false;
        }
        return flag3;
      } else {
        let num = 0;
        let arr2 = arr;
        if (0 < arr.length) {
          while (weakSet[num] !== arg0) {
            num = num + 1;
            arr2 = arr3;
          }
          return true;
        }
        arr2.push(arg0);
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
          }
          weakSet.splice(num, 1);
        }
      }
    }
  ];
  return items;
};
