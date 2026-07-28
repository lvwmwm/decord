// Module ID: 5400
// Function ID: 46147
// Name: _objectWithoutProperties
// Dependencies: [5401]

// Module 5400 (_objectWithoutProperties)

export default function _objectWithoutProperties(arg0, arr) {
  if (null == arg0) {
    return {};
  } else {
    const tmp5 = require(5401) /* _objectWithoutPropertiesLoose */(arg0, arr);
    const _Object2 = Object;
    if (Object.getOwnPropertySymbols) {
      const _Object = Object;
      const ownPropertySymbols = Object.getOwnPropertySymbols(arg0);
      for (let num2 = 0; num2 < ownPropertySymbols.length; num2 = num2 + 1) {
        let tmp = ownPropertySymbols[num2];
        let callResult = -1 === arr.indexOf(tmp);
        if (callResult) {
          let propertyIsEnumerable = {}.propertyIsEnumerable;
          callResult = propertyIsEnumerable.call(arg0, tmp);
        }
        if (callResult) {
          tmp5[tmp] = arg0[tmp];
        }
      }
    }
    return tmp5;
  }
};
