// Module ID: 5567
// Function ID: 5568
// Name: _superPropBase
// Dependencies: [5565]

// Module 5567 (_superPropBase)
import _getPrototypeOf from "_getPrototypeOf" /* 5565 */;

let hasOwnProperty;


export default function _superPropBase(arg0, arg1) {
  hasOwnProperty = {}.hasOwnProperty;
  let tmp = arg0;
  if (!hasOwnProperty.call(arg0, arg1)) {
    let tmp4 = _getPrototypeOf(arg0);
    tmp = tmp4;
    if (null !== tmp4) {
      while (true) {
        let hasOwnProperty2 = {}.hasOwnProperty;
        tmp = tmp4;
        if (hasOwnProperty2.call(tmp4, arg1)) {
          break;
        } else {
          tmp4 = _getPrototypeOf(tmp4);
          tmp = tmp4;
          if (null === tmp4) {
            break;
          }
        }
      }
    }
  }
  return tmp;
};
