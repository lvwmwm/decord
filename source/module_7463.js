// Module ID: 7463
// Function ID: 59944
// Dependencies: []

// Module 7463

export default require(dependencyMap[0])((arg0, arg1) => {
  if (null == arg0) {
    return [];
  } else {
    if (arg1.length > 1) {
      if (require(dependencyMap[1])(arg0, arg1[0], arg1[1])) {
        let items = [];
      }
      return require(dependencyMap[2])(arg0, require(dependencyMap[3])(items, 1), []);
    }
    let tmp3 = length > 2;
    if (tmp3) {
      tmp3 = require(dependencyMap[1])(arg1[0], arg1[1], arg1[2]);
    }
    items = arg1;
    if (tmp3) {
      const items1 = [arg1[0]];
      items = items1;
    }
  }
});
