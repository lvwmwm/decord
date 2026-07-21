// Module ID: 1524
// Function ID: 17480
// Dependencies: []

// Module 1524

export default importAll(dependencyMap[0]).memo(function StaticContainer(children) {
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
      // continue
    }
    return true;
  }
  const tmp = arg0;
  const tmp2 = arg1;
});
