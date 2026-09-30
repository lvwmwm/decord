// Module ID: 14184
// Function ID: 14185
// Dependencies: [518, 514, 536, 538, 533, 634, 545, 544]

// Module 14184
import _mod518 from "module_518" /* 518 */;
import _mod634 from "module_634" /* 634 */;


export default function isEmpty(size) {
  if (null == size) {
    return true;
  } else {
    if (_mod518(size)) {
      return !size.length;
    }
    const tmp = _mod634(size);
    if ("[object Map]" != tmp) {
      if ("[object Set]" != tmp) {
        if (tmp4(545)(size)) {
          return !tmp4(544)(size).length;
        } else {
          for (const key10021 in arg0) {
            let tmp7 = hasOwnProperty;
            let call = hasOwnProperty.call;
            if (typeof call === "unknown") {
              let callResult = tmp7(key10021);
            } else {
              callResult = call(arg0, key10021);
            }
            if (!callResult) {
              continue;
            } else {
              let flag = false;
              return false;
            }
          }
          return true;
        }
      }
    }
    return !size.size;
  }
};
