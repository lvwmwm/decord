// Module ID: 13150
// Function ID: 99565
// Dependencies: []

// Module 13150

export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (require(dependencyMap[0])(toString)) {
      const tmp6 = require(dependencyMap[2])(toString, arg0);
      if (!tmp5(tmp6)) {
        return tmp6;
      }
      const tmp5 = require(dependencyMap[1]);
    }
  }
  const valueOf = arg0.valueOf;
  if (require(dependencyMap[0])(valueOf)) {
    const tmp10 = require(dependencyMap[2])(valueOf, arg0);
    if (!tmp9(tmp10)) {
      return tmp10;
    }
    const tmp9 = require(dependencyMap[1]);
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (require(dependencyMap[0])(toString2)) {
      const tmp16 = require(dependencyMap[2])(toString2, arg0);
      if (!tmp15(tmp16)) {
        return tmp16;
      }
      const tmp15 = require(dependencyMap[1]);
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
