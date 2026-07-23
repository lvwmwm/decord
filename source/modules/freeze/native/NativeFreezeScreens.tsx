// Module ID: 14892
// Function ID: 113547
// Name: NativeFreezeScreens
// Dependencies: [57, 31, 27, 33, 44, 4478, 4130, 2]
// Exports: NativeFreezeScreens

// Module 14892 (NativeFreezeScreens)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { StyleSheet } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ screens: { flex: 1, overflow: "hidden" } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/freeze/native/NativeFreezeScreens.tsx");

export const NativeFreezeScreens = function NativeFreezeScreens(detachInactiveScreens) {
  let activeIndex;
  let children;
  ({ children, activeIndex } = detachInactiveScreens);
  let flag = detachInactiveScreens.detachInactiveScreens;
  if (flag === undefined) {
    flag = true;
  }
  let flag2 = detachInactiveScreens.lazy;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let flag3 = detachInactiveScreens.unmountOnBlur;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = detachInactiveScreens.freezeOnBlur;
  if (flag4 === undefined) {
    flag4 = true;
  }
  let preloadIndices = detachInactiveScreens.preloadIndices;
  if (preloadIndices === undefined) {
    preloadIndices = [];
  }
  let first;
  let tmp3 = activeIndex >= 0;
  const tmp = callback();
  if (tmp3) {
    const _Array = Array;
    let num = 1;
    if (Array.isArray(children)) {
      num = children.length;
    }
    tmp3 = activeIndex < num;
  }
  flag(flag2[4])(tmp3, "NativeFreezeScreens: invalid activeIndex");
  let items = [activeIndex];
  const tmp6 = flag3(flag4.useState(items), 2);
  first = tmp6[0];
  if (!first.includes(activeIndex)) {
    const items1 = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(first, 0);
    items1[arraySpreadResult] = activeIndex;
    const sum = arraySpreadResult + 1;
    tmp6[1](items1);
  }
  let obj = { enabled: flag, hasTwoStates: true, style: tmp.screens, nativeID: "native-freeze-screens-container" };
  let arr4 = children;
  if (!Array.isArray(children)) {
    const items2 = [children];
    arr4 = items2;
  }
  obj.children = arr4.map((children) => {
    if (flag3) {
      if (!tmp) {
        return null;
      }
    }
    if (flag2) {
      if (!first.includes(arg1)) {
        if (!tmp) {
          if (!preloadIndices.includes(arg1)) {
            return null;
          }
        }
      }
    }
    let num = 0;
    if (activeIndex === arg1) {
      num = 2;
    }
    let obj = {};
    const items = [preloadIndices.absoluteFill, ];
    obj = {};
    let num2 = -1;
    if (activeIndex === arg1) {
      num2 = 0;
    }
    obj.zIndex = num2;
    items[1] = obj;
    obj.style = items;
    obj.activityState = num;
    obj.enabled = flag;
    obj.freezeOnBlur = flag4;
    obj.children = children;
    return first(activeIndex(flag2[5]).Screen, obj, arg1);
  });
  return first(activeIndex(flag2[5]).ScreenContainer, obj);
};
