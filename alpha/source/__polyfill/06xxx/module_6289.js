// Module ID: 6289
// Function ID: 6290
// Dependencies: [1643, 6116, 6129]
// Exports: useAnimatedSnapPoints

// Module 6289
import DEFAULT_HANDLE_HEIGHT from "DEFAULT_HANDLE_HEIGHT" /* 6116 */;

const require = globalThis.__r;
let _Math, _require, arr1, dependencyMap, diff, flag, items2, items3, iter, iter2, iter3, iter4, length, mapped, min, sorted, str, sum, tmp, tmp2, tmp3, tmp4, tmp8, value, value1, value4;

let __initData = { code: "function pnpm_useAnimatedSnapPointsTs1(){const{containerHeight,INITIAL_CONTAINER_HEIGHT,INITIAL_SNAP_POINT,snapPoints,normalizeSnapPoint,enableDynamicSizing,handleHeight,INITIAL_HANDLE_HEIGHT,contentHeight,maxDynamicContentSize,dynamicSnapPointIndex}=this.__closure;const isContainerLayoutReady=containerHeight.value!==INITIAL_CONTAINER_HEIGHT;if(!isContainerLayoutReady){return[INITIAL_SNAP_POINT];}const _snapPoints=snapPoints?'value'in snapPoints?snapPoints.value:snapPoints:[];let _normalizedSnapPoints=_snapPoints.map(function(snapPoint){return normalizeSnapPoint(snapPoint,containerHeight.value);});if(!enableDynamicSizing){return _normalizedSnapPoints;}if(handleHeight.value===INITIAL_HANDLE_HEIGHT){return[INITIAL_SNAP_POINT];}if(contentHeight.value===INITIAL_CONTAINER_HEIGHT){return[INITIAL_SNAP_POINT];}const dynamicSnapPoint=containerHeight.value-Math.min(contentHeight.value+handleHeight.value,maxDynamicContentSize!==undefined?maxDynamicContentSize:containerHeight.value);if(!_normalizedSnapPoints.includes(dynamicSnapPoint)){_normalizedSnapPoints.push(dynamicSnapPoint);}_normalizedSnapPoints=_normalizedSnapPoints.sort(function(a,b){return b-a;});dynamicSnapPointIndex.value=_normalizedSnapPoints.indexOf(dynamicSnapPoint);return _normalizedSnapPoints;}" };
let __initData2 = { code: "function pnpm_useAnimatedSnapPointsTs2(){const{enableDynamicSizing,snapPoints}=this.__closure;if(enableDynamicSizing){return true;}const _snapPoints=snapPoints?'value'in snapPoints?snapPoints.value:snapPoints:[];if(_snapPoints.length&&_snapPoints.find(function(snapPoint){return typeof snapPoint==='string';})){return true;}return false;}" };

export const useAnimatedSnapPoints = (snapPoints, containerHeight, contentHeight, handleHeight, arg4, enableDynamicSizing, maxDynamicContentSize) => {
  _require = snapPoints;
  dependencyMap = containerHeight;
  __initData = contentHeight;
  __initData2 = handleHeight;
  let closure_4 = enableDynamicSizing;
  let closure_5 = maxDynamicContentSize;
  let obj = require("module_1643");
  const sharedValue = obj.useSharedValue(-1);
  const obj2 = require("module_1643");
  class P {
    constructor() {
      iter = closure_1;
      tmp = closure_0;
      tmp2 = closure_1;
      if (closure_1.value === closure_0(closure_1[1]).INITIAL_CONTAINER_HEIGHT) {
        items = [];
        items[0] = tmp(tmp2[1]).INITIAL_SNAP_POINT;
        return items;
      } else {
        iter3 = closure_0;
        if (iter3) {
          str = "value";
          value = iter3;
          if ("value" in iter3) {
            value = iter3.value;
          }
          items1 = value;
        } else {
          items1 = [];
        }
        mapped = items1.map(() => { /* body not rendered: F137002 */ });
        tmp3 = closure_4;
        if (tmp3) {
          iter2 = closure_3;
          if (closure_3.value === tmp(tmp2[1]).INITIAL_HANDLE_HEIGHT) {
            items2 = [];
            items2[0] = tmp(tmp2[1]).INITIAL_SNAP_POINT;
            return items2;
          } else {
            iter4 = closure_2;
            if (closure_2.value === tmp(tmp2[1]).INITIAL_CONTAINER_HEIGHT) {
              items3 = [];
              items3[0] = tmp(tmp2[1]).INITIAL_SNAP_POINT;
              return items3;
            } else {
              tmp4 = globalThis;
              value4 = closure_5;
              value1 = iter.value;
              _Math = Math;
              min = Math.min;
              sum = iter4.value + iter2.value;
              if (undefined === closure_5) {
                value4 = iter.value;
              }
              diff = value1 - min(sum, value4);
              if (!mapped.includes(diff)) {
                arr1 = mapped.push(diff);
              }
              sorted = mapped.sort(() => { /* body not rendered: F137003 */ });
              tmp8 = closure_6;
              closure_6.value = sorted.indexOf(diff);
              return sorted;
            }
          }
        } else {
          return mapped;
        }
      }
    }
  }
  P.__closure = { containerHeight, INITIAL_CONTAINER_HEIGHT: require("DEFAULT_HANDLE_HEIGHT").INITIAL_CONTAINER_HEIGHT, INITIAL_SNAP_POINT: require("DEFAULT_HANDLE_HEIGHT").INITIAL_SNAP_POINT, snapPoints, normalizeSnapPoint: require("normalizeSnapPoint").normalizeSnapPoint, enableDynamicSizing, handleHeight, INITIAL_HANDLE_HEIGHT: require("DEFAULT_HANDLE_HEIGHT").INITIAL_HANDLE_HEIGHT, contentHeight, maxDynamicContentSize, dynamicSnapPointIndex: sharedValue };
  P.__workletHash = 15015207820492;
  P.__initData = __initData;
  let items = [snapPoints, containerHeight, handleHeight, contentHeight, arg4, enableDynamicSizing, maxDynamicContentSize, sharedValue];
  ({ containerHeight, INITIAL_CONTAINER_HEIGHT: require("DEFAULT_HANDLE_HEIGHT").INITIAL_CONTAINER_HEIGHT, INITIAL_SNAP_POINT: require("DEFAULT_HANDLE_HEIGHT").INITIAL_SNAP_POINT, snapPoints, normalizeSnapPoint: require("normalizeSnapPoint").normalizeSnapPoint, enableDynamicSizing, handleHeight, INITIAL_HANDLE_HEIGHT: require("DEFAULT_HANDLE_HEIGHT").INITIAL_HANDLE_HEIGHT, contentHeight, maxDynamicContentSize, dynamicSnapPointIndex: sharedValue });
  const derivedValue = obj2.useDerivedValue(P, items);
  const obj4 = require("module_1643");
  class N {
    constructor() {
      tmp = closure_4;
      if (tmp) {
        flag = true;
        return true;
      } else {
        iter = closure_0;
        if (iter) {
          str = "value";
          value = iter;
          if ("value" in iter) {
            value = iter.value;
          }
          items = value;
        } else {
          items = [];
        }
        length = items.length;
        tmp2 = !length;
        if (length) {
          tmp2 = !items.find(function() { /* body not rendered: F137004 */ });
        }
        return !tmp2;
      }
    }
  }
  N.__closure = { enableDynamicSizing, snapPoints };
  N.__workletHash = 4816362093278;
  N.__initData = __initData2;
  let items1 = [derivedValue, sharedValue, obj4.useDerivedValue(N)];
  return items1;
};
