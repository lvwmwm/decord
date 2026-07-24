// Module ID: 1524
// Function ID: 17482
// Name: result
// Dependencies: [31]

// Module 1524 (result)

export default require("result").memo(function StaticContainer(children) {
  return children.children;
}, (arg0, arg1) => {
  const keys = Object.keys(arg0);
  if (keys.length !== Object.keys(arg1).length) {
    return false;
  } else {
    const iter = keys[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp6 = nextResult;
      if ("children" !== nextResult) {
        let tmp7 = arg0;
        let tmp8 = nextResult;
        let tmp9 = arg1;
        if (tmp[tmp6] !== tmp2[tmp6]) {
          iter.return();
          let flag = false;
          return false;
        }
      }
      continue;
    }
    return true;
  }
  tmp = arg0;
  tmp2 = arg1;
});
