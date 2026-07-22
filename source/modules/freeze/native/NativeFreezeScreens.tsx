// Module ID: 14776
// Function ID: 111379
// Name: NativeFreezeScreens
// Dependencies: []
// Exports: NativeFreezeScreens

// Module 14776 (NativeFreezeScreens)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const StyleSheet = arg1(dependencyMap[2]).StyleSheet;
const jsx = arg1(dependencyMap[3]).jsx;
let closure_7 = arg1(dependencyMap[6]).createStyles({ screens: {} });
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/freeze/native/NativeFreezeScreens.tsx");

export const NativeFreezeScreens = function NativeFreezeScreens(detachInactiveScreens) {
  let activeIndex;
  let children;
  ({ children, activeIndex } = detachInactiveScreens);
  const arg1 = activeIndex;
  let flag = detachInactiveScreens.detachInactiveScreens;
  if (flag === undefined) {
    flag = true;
  }
  const importDefault = flag;
  let flag2 = detachInactiveScreens.lazy;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const dependencyMap = flag2;
  let flag3 = detachInactiveScreens.unmountOnBlur;
  if (flag3 === undefined) {
    flag3 = false;
  }
  const callback = flag3;
  let flag4 = detachInactiveScreens.freezeOnBlur;
  if (flag4 === undefined) {
    flag4 = true;
  }
  const React = flag4;
  let preloadIndices = detachInactiveScreens.preloadIndices;
  if (preloadIndices === undefined) {
    preloadIndices = [];
  }
  const StyleSheet = preloadIndices;
  let jsx;
  let tmp3 = activeIndex >= 0;
  const tmp = callback2();
  if (tmp3) {
    const _Array = Array;
    let num = 1;
    if (Array.isArray(children)) {
      num = children.length;
    }
    tmp3 = activeIndex < num;
  }
  importDefault(dependencyMap[4])(tmp3, "NativeFreezeScreens: invalid activeIndex");
  const items = [activeIndex];
  const tmp6 = callback(React.useState(items), 2);
  const first = tmp6[0];
  jsx = first;
  if (!first.includes(activeIndex)) {
    const items1 = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(first, 0);
    items1[arraySpreadResult] = activeIndex;
    const sum = arraySpreadResult + 1;
    tmp6[1](items1);
  }
  const obj = { enabled: flag, hasTwoStates: true, style: tmp.screens, nativeID: "native-freeze-screens-container" };
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
  return jsx(arg1(dependencyMap[5]).ScreenContainer, obj);
};
