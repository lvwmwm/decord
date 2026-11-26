// Module ID: 5522
// Function ID: 5523
// Name: _objectWithoutProperties
// Dependencies: [5523]

// Module 5522 (_objectWithoutProperties)
import _objectWithoutPropertiesLoose from "_objectWithoutPropertiesLoose" /* 5523 */;


export default function _objectWithoutProperties(arg0, arr) {
  if (null == arg0) {
    return {};
  } else {
    const tmp7 = _objectWithoutPropertiesLoose(arg0, arr);
    const _Object2 = Object;
    if (Object.getOwnPropertySymbols) {
      let num;
      const _Object = Object;
      const ownPropertySymbols = Object.getOwnPropertySymbols(arg0);
      for (let num = 0; num < ownPropertySymbols.length; num = num + 1) {
        let tmp = ownPropertySymbols[num];
        let callResult = -1 === arr.indexOf(tmp);
        if (callResult) {
          let propertyIsEnumerable = {}.propertyIsEnumerable;
          callResult = propertyIsEnumerable.call(arg0, tmp);
        }
        if (callResult) {
          tmp7[tmp] = arg0[tmp];
        }
      }
    }
    return tmp7;
  }
};
