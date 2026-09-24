// Module ID: 7131
// Function ID: 7132
// Dependencies: [7132]

// Module 7131
import _mod7132 from "module_7132" /* 7132 */;


export default function _objectWithoutProperties(arg0, arr) {
  if (null == arg0) {
    return {};
  } else {
    const tmp8 = _mod7132(arg0, arr);
    const _Object2 = Object;
    if (Object.getOwnPropertySymbols) {
      const _Object = Object;
      const ownPropertySymbols = Object.getOwnPropertySymbols(arg0);
      let num = 0;
      if (0 < ownPropertySymbols.length) {
        const tmp2 = -1 === arr.indexOf(ownPropertySymbols[num]);
        while (!tmp2) {
          if (tmp2) {
            tmp8[tmp] = arg0[tmp];
          }
          num = num + 1;
        }
        const propertyIsEnumerable = {}.propertyIsEnumerable;
        const call = propertyIsEnumerable.call;
        typeof call === "unknown" ? propertyIsEnumerable(ownPropertySymbols[num]) : call(arg0, ownPropertySymbols[num]);
      }
    }
    return tmp8;
  }
};
