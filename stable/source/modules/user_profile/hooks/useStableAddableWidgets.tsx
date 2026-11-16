// Module ID: 15231
// Function ID: 15232
// Name: useStableAddableWidgets
// Dependencies: [32, 19, 15211, 7886, 2]
// Exports: default

// Module 15231 (useStableAddableWidgets)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/hooks/useStableAddableWidgets.tsx");

export default function useStableAddableWidgets(arg0) {
  let first;
  const length = arg0;
  const arr = first(15211)();
  const obj = react;
  let tmp = _slicedToArray(react.useState(arr), 2);
  first = tmp[0];
  if (arr.length > first.length) {
    const tmp2 = tmp[1](arr);
  }
  let items = [first, arg0];
  return obj.useMemo(() => {
    if (null != length) {
      if (0 !== length.length) {
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items, first.filter(function isHighlighted(applicationId) {
          let tmp = null != closure_1_0;
          if (tmp) {
            tmp = applicationId instanceof closure_0(dependencyMap[3]).ApplicationWidget && obj.includes(applicationId.applicationId);
            applicationId instanceof closure_0(dependencyMap[3]).ApplicationWidget && closure_1_0.includes(applicationId.applicationId);
          }
          return tmp;
        }), 0);
        HermesBuiltin.arraySpread(items, first.filter((applicationId) => {
          let tmp = null != closure_1_0;
          if (tmp) {
            tmp = applicationId instanceof closure_0(dependencyMap[3]).ApplicationWidget && obj.includes(applicationId.applicationId);
            applicationId instanceof closure_0(dependencyMap[3]).ApplicationWidget && closure_1_0.includes(applicationId.applicationId);
          }
          return !tmp;
        }), arraySpreadResult);
        return items;
      }
    }
    return first;
  }, items);
};
