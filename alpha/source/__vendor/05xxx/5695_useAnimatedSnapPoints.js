// Module ID: 5695
// Function ID: 5696
// Name: useAnimatedSnapPoints
// Dependencies: [1652, 5511, 5524]
// Exports: useAnimatedSnapPoints

// Module 5695 (useAnimatedSnapPoints)
import _mod1652 from "module_1652" /* 1652 */;
import DEFAULT_HANDLE_HEIGHT from "DEFAULT_HANDLE_HEIGHT" /* 5511 */;
import _mod5524 from "module_5524" /* 5524 */;

let closure_2 = { code: "(function pnpm_useAnimatedSnapPointsTs1(){let[containerHeight,INITIAL_CONTAINER_HEIGHT,INITIAL_SNAP_POINT,snapPoints,normalizeSnapPoint,enableDynamicSizing,handleHeight,INITIAL_HANDLE_HEIGHT,contentHeight,maxDynamicContentSize,dynamicSnapPointIndex]=this.__closure;const isContainerLayoutReady=containerHeight.value!==INITIAL_CONTAINER_HEIGHT;if(!isContainerLayoutReady){return[INITIAL_SNAP_POINT];}const _snapPoints=snapPoints?'value'in snapPoints?snapPoints.value:snapPoints:[];let _normalizedSnapPoints=_snapPoints.map(function(snapPoint){return normalizeSnapPoint(snapPoint,containerHeight.value);});if(!enableDynamicSizing){return _normalizedSnapPoints;}if(handleHeight.value===INITIAL_HANDLE_HEIGHT){return[INITIAL_SNAP_POINT];}if(contentHeight.value===INITIAL_CONTAINER_HEIGHT){return[INITIAL_SNAP_POINT];}const dynamicSnapPoint=containerHeight.value-Math.min(contentHeight.value+handleHeight.value,maxDynamicContentSize!==undefined?maxDynamicContentSize:containerHeight.value);if(!_normalizedSnapPoints.includes(dynamicSnapPoint)){_normalizedSnapPoints.push(dynamicSnapPoint);}_normalizedSnapPoints=_normalizedSnapPoints.sort(function(a,b){return b-a;});dynamicSnapPointIndex.value=_normalizedSnapPoints.indexOf(dynamicSnapPoint);return _normalizedSnapPoints;})" };
let closure_3 = { code: "(function pnpm_useAnimatedSnapPointsTs2(){let[enableDynamicSizing,snapPoints]=this.__closure;if(enableDynamicSizing){return true;}const _snapPoints=snapPoints?'value'in snapPoints?snapPoints.value:snapPoints:[];if(_snapPoints.length&&_snapPoints.find(function(snapPoint){return typeof snapPoint==='string';})){return true;}return false;})" };

export const useAnimatedSnapPoints = (arg0, arg1, arg2, arg3, arg4, arg5, arg6) => {
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let tmp = require;
  let tmp2 = dependencyMap;
  const obj = _mod1652;
  const sharedValue = obj.useSharedValue(-1);
  let items = [closure_2, arg1, , , , , , , , , , ];
  const useDerivedValue = _mod1652.useDerivedValue;
  items[2] = DEFAULT_HANDLE_HEIGHT.INITIAL_CONTAINER_HEIGHT;
  items[3] = DEFAULT_HANDLE_HEIGHT.INITIAL_SNAP_POINT;
  items[4] = arg0;
  items[5] = _mod5524.normalizeSnapPoint;
  items[6] = arg5;
  items[7] = arg3;
  items[8] = DEFAULT_HANDLE_HEIGHT.INITIAL_HANDLE_HEIGHT;
  items[9] = arg2;
  items[10] = arg6;
  items[11] = sharedValue;
  let c2;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items;
  function pnpm_useAnimatedSnapPointsTs1() {
    if (_undefined.value !== c1) {
      let items;
      if (c3) {
        let value = iter2;
        if ("value" in c3) {
          value = iter2.value;
        }
        items = value;
      } else {
        items = [];
      }
      const mapped = items.map((item) => closure_1_4(item, value.value));
      const tmp3 = c5;
      if (tmp3) {
        if (_undefined2.value === c7) {
          const items1 = [c2];
          return items1;
        } else if (_undefined3.value === tmp) {
          const items2 = [c2];
          return items2;
        } else {
          let value3 = c9;
          const value2 = iter.value;
          const _Math = Math;
          const sum = iter4.value + iter3.value;
          if (undefined === c9) {
            value3 = iter.value;
          }
          const diff = value2 - min(sum, value3);
          if (!mapped.includes(diff)) {
            mapped.push(diff);
          }
          const sorted = mapped.sort((arg0, arg1) => arg1 - arg0);
          c10.value = sorted.indexOf(diff);
          return sorted;
        }
      } else {
        return mapped;
      }
    } else {
      const items3 = [c2];
      return items3;
    }
  }
  let items1 = [tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16];
  pnpm_useAnimatedSnapPointsTs1.__closure = items1;
  pnpm_useAnimatedSnapPointsTs1.__workletHash = 232924243029;
  pnpm_useAnimatedSnapPointsTs1.__initData = tmp5;
  let items2 = [arg0, arg1, arg3, arg2, arg4, arg5, arg6, sharedValue];
  const derivedValue = useDerivedValue(pnpm_useAnimatedSnapPointsTs1, items2);
  let items3 = [closure_3, arg5, arg0];
  let c0;
  let c1;
  [tmp18, tmp19, tmp20] = items3;
  function pnpm_useAnimatedSnapPointsTs2() {
    const tmp = c0;
    if (tmp) {
      return true;
    } else {
      let items;
      if (c1) {
        let value = iter;
        if ("value" in c1) {
          value = iter.value;
        }
        items = value;
      } else {
        items = [];
      }
      let tmp2 = !length;
      if (items.length) {
        tmp2 = !items.find((item) => typeof item === "string");
      }
      return !tmp2;
    }
  }
  const items4 = [tmp19, tmp20];
  pnpm_useAnimatedSnapPointsTs2.__closure = items4;
  pnpm_useAnimatedSnapPointsTs2.__workletHash = 7724666336615;
  pnpm_useAnimatedSnapPointsTs2.__initData = tmp18;
  const items5 = [derivedValue, sharedValue, ];
  const tmpResult = _mod1652;
  items5[2] = tmpResult.useDerivedValue(pnpm_useAnimatedSnapPointsTs2);
  return items5;
};
