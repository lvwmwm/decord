// Module ID: 103
// Function ID: 1590
// Name: _superPropBase
// Dependencies: [17]

// Module 103 (_superPropBase)

export default function _superPropBase(arg0, arg1) {
  const hasOwnProperty = {}.hasOwnProperty;
  let tmp = arg0;
  if (!hasOwnProperty.call(arg0, arg1)) {
    let tmp4 = require(17) /* _getPrototypeOf */(arg0);
    tmp = tmp4;
    if (null !== tmp4) {
      const hasOwnProperty2 = {}.hasOwnProperty;
      tmp = tmp4;
      while (!hasOwnProperty2.call(tmp4, arg1)) {
        let tmp7 = require;
        let tmp8 = dependencyMap;
        tmp4 = require(17) /* _getPrototypeOf */(tmp4);
        tmp = tmp4;
        if (null === tmp4) {
          break;
        }
      }
    }
  }
  return tmp;
};
