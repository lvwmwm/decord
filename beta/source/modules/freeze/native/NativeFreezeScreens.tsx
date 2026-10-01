// Module ID: 15653
// Function ID: 15654
// Name: NativeFreezeScreens
// Dependencies: [32, 19, 17, 21, 38, 5211, 4836, 2]
// Exports: NativeFreezeScreens

// Module 15653 (NativeFreezeScreens)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import enableScreens from "enableScreens" /* 5211 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const StyleSheet = react_native.StyleSheet;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ screens: { flex: 1, overflow: "hidden" } });
const result = size.fileFinishedImporting("modules/freeze/native/NativeFreezeScreens.tsx");

export const NativeFreezeScreens = function NativeFreezeScreens(detachInactiveScreens) {
  let activeIndex;
  let arr4;
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
  let tmp2 = closure_7();
  let tmp5 = activeIndex >= 0;
  let tmp4 = flag(flag2[4]);
  const tmp3 = flag2;
  if (tmp5) {
    const _Array = Array;
    let num = 1;
    if (Array.isArray(children)) {
      num = children.length;
    }
    tmp5 = activeIndex < num;
  }
  tmp4(tmp5, "NativeFreezeScreens: invalid activeIndex");
  let items = [activeIndex];
  let tmp8 = flag3(flag4.useState(items), 2);
  first = tmp8[0];
  const tmp9 = tmp8[1];
  if (!first.includes(activeIndex)) {
    const items1 = [];
    let num2 = 0;
    items1[HermesBuiltin.arraySpread(items1, first, 0)] = activeIndex;
    tmp9(items1);
  }
  let obj = {
    enabled: flag,
    hasTwoStates: true,
    style: tmp2.screens,
    nativeID: "native-freeze-screens-container",
    children: arr4.map((children, index) => {
      const tmp2 = flag3;
      if (tmp2) {
        if (activeIndex !== index) {
          return null;
        }
      }
      const tmp4 = flag2;
      if (tmp4) {
        if (!first.includes(index)) {
          if (activeIndex !== index) {
            if (!preloadIndices.includes(index)) {
              return null;
            }
          }
        }
      }
      let num = 0;
      if (activeIndex === index) {
        num = 2;
      }
      const items = [StyleSheet.absoluteFill, ];
      let num2 = -1;
      const Screen = enableScreens.Screen;
      const tmp8 = jsx;
      if (activeIndex === index) {
        num2 = 0;
      }
      const obj = { style: items, activityState: num, enabled: flag, freezeOnBlur: flag4, children };
      items[1] = { zIndex: num2 };
      return tmp8(Screen, obj, index);
    })
  };
  const ScreenContainer = activeIndex(tmp3[5]).ScreenContainer;
  arr4 = children;
  const tmp13 = first;
  if (!Array.isArray(children)) {
    const items2 = [children];
    arr4 = items2;
  }
  return tmp13(ScreenContainer, obj);
};
