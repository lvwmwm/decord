// Module ID: 698
// Function ID: 8697
// Name: baseMatchesProperty
// Dependencies: []

// Module 698 (baseMatchesProperty)

export default function baseMatchesProperty(arg0, arg1) {
  const require = arg0;
  const dependencyMap = arg1;
  if (require(dependencyMap[0])(arg0)) {
    if (require(dependencyMap[1])(arg1)) {
      let fn = require(dependencyMap[2])(require(dependencyMap[3])(arg0), arg1);
      const tmp5 = require(dependencyMap[2]);
    }
    return fn;
  }
  fn = (arg0) => {
    const tmp = arg0(arg1[4])(arg0, arg0);
    if (undefined === tmp) {
      if (tmp === arg1) {
        let tmp3 = arg0(arg1[5])(arg0, arg0);
      }
      return tmp3;
    }
    tmp3 = arg0(arg1[6])(arg1, tmp, 3);
  };
};
