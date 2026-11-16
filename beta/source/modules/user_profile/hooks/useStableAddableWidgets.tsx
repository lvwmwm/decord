// Module ID: 15829
// Function ID: 15830
// Name: useStableAddableWidgets
// Dependencies: [32, 19, 15810, 7357, 2]
// Exports: default

// Module 15829 (useStableAddableWidgets)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set;

const result = size.fileFinishedImporting("modules/user_profile/hooks/useStableAddableWidgets.tsx");

export default function useStableAddableWidgets(arg0) {
  let first;
  let tmp2;
  const length = arg0;
  const arr = first(set[2])();
  const obj = react;
  [first, tmp2] = react.useState(arr);
  const self = this;
  set = new Set(first.map((getUniqueKey) => getUniqueKey.getUniqueKey()));
  const found = arr.filter((getUniqueKey) => !set.has(getUniqueKey.getUniqueKey()));
  if (found.length > 0) {
    let items = [];
    let tmp5 = first;
    let arraySpreadResult = HermesBuiltin.arraySpread(items, found, HermesBuiltin.arraySpread(items, first, 0));
    tmp2(items);
  }
  const items1 = [first, arg0];
  return obj.useMemo(() => {
    if (null != length) {
      if (0 !== length.length) {
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items, first.filter(function isHighlighted(applicationId) {
          let tmp = null != closure_1_0;
          if (tmp) {
            tmp = applicationId instanceof closure_0(set[3]).ApplicationWidget && obj.includes(applicationId.applicationId);
            applicationId instanceof closure_0(set[3]).ApplicationWidget && closure_1_0.includes(applicationId.applicationId);
          }
          return tmp;
        }), 0);
        HermesBuiltin.arraySpread(items, first.filter((applicationId) => {
          let tmp = null != closure_1_0;
          if (tmp) {
            tmp = applicationId instanceof closure_0(set[3]).ApplicationWidget && obj.includes(applicationId.applicationId);
            applicationId instanceof closure_0(set[3]).ApplicationWidget && closure_1_0.includes(applicationId.applicationId);
          }
          return !tmp;
        }), arraySpreadResult);
        return items;
      }
    }
    return first;
  }, items1);
};
