// Module ID: 5303
// Function ID: 45784
// Name: useAnimatedSnapPoints
// Dependencies: [31, 33, 5191]

// Module 5303 (useAnimatedSnapPoints)
let closure_2 = { code: "function pnpm_useAnimatedSnapPointsTs1(){const{containerHeight,INITIAL_CONTAINER_HEIGHT,INITIAL_SNAP_POINT,snapPoints,normalizeSnapPoint,enableDynamicSizing,handleHeight,INITIAL_HANDLE_HEIGHT,contentHeight,maxDynamicContentSize,dynamicSnapPointIndex}=this.__closure;const isContainerLayoutReady=containerHeight.value!==INITIAL_CONTAINER_HEIGHT;if(!isContainerLayoutReady){return[INITIAL_SNAP_POINT];}const _snapPoints=snapPoints?'value'in snapPoints?snapPoints.value:snapPoints:[];let _normalizedSnapPoints=_snapPoints.map(function(snapPoint){return normalizeSnapPoint(snapPoint,containerHeight.value);});if(!enableDynamicSizing){return _normalizedSnapPoints;}if(handleHeight.value===INITIAL_HANDLE_HEIGHT){return[INITIAL_SNAP_POINT];}if(contentHeight.value===INITIAL_CONTAINER_HEIGHT){return[INITIAL_SNAP_POINT];}const dynamicSnapPoint=containerHeight.value-Math.min(contentHeight.value+handleHeight.value,maxDynamicContentSize!==undefined?maxDynamicContentSize:containerHeight.value);if(!_normalizedSnapPoints.includes(dynamicSnapPoint)){_normalizedSnapPoints.push(dynamicSnapPoint);}_normalizedSnapPoints=_normalizedSnapPoints.sort(function(a,b){return b-a;});dynamicSnapPointIndex.value=_normalizedSnapPoints.indexOf(dynamicSnapPoint);return _normalizedSnapPoints;}" };
let closure_3 = { code: "function pnpm_useAnimatedSnapPointsTs2(){const{enableDynamicSizing,snapPoints}=this.__closure;if(enableDynamicSizing){return true;}const _snapPoints=snapPoints?'value'in snapPoints?snapPoints.value:snapPoints:[];if(_snapPoints.length&&_snapPoints.find(function(snapPoint){return typeof snapPoint==='string';})){return true;}return false;}" };
arg5.useAnimatedSnapPoints = function useAnimatedSnapPoints(snapPoints, derivedValue, sharedValue1, reactiveSharedValue2, sharedValue, DEFAULT_DYNAMIC_SIZING, maxDynamicContentSize) {
  derivedValue = snapPoints;
  maxDynamicContentSize = derivedValue;
  let closure_2 = sharedValue1;
  let closure_3 = reactiveSharedValue2;
  let obj = derivedValue(maxDynamicContentSize[0]);
  sharedValue = obj.useSharedValue(-1);
  /* worklet (recovered source) */ function pnpm_useAnimatedSnapPointsTs1(){const{containerHeight,INITIAL_CONTAINER_HEIGHT,INITIAL_SNAP_POINT,snapPoints,normalizeSnapPoint,enableDynamicSizing,handleHeight,INITIAL_HANDLE_HEIGHT,contentHeight,maxDynamicContentSize,dynamicSnapPointIndex}=this.__closure;const isContainerLayoutReady=containerHeight.value!==INITIAL_CONTAINER_HEIGHT;if(!isContainerLayoutReady){return[INITIAL_SNAP_POINT];}const _snapPoints=snapPoints?'value'in snapPoints?snapPoints.value:snapPoints:[];let _normalizedSnapPoints=_snapPoints.map(function(snapPoint){return normalizeSnapPoint(snapPoint,containerHeight.value);});if(!enableDynamicSizing){return _normalizedSnapPoints;}if(handleHeight.value===INITIAL_HANDLE_HEIGHT){return[INITIAL_SNAP_POINT];}if(contentHeight.value===INITIAL_CONTAINER_HEIGHT){return[INITIAL_SNAP_POINT];}const dynamicSnapPoint=containerHeight.value-Math.min(contentHeight.value+handleHeight.value,maxDynamicContentSize!==undefined?maxDynamicContentSize:containerHeight.value);if(!_normalizedSnapPoints.includes(dynamicSnapPoint)){_normalizedSnapPoints.push(dynamicSnapPoint);}_normalizedSnapPoints=_normalizedSnapPoints.sort(function(a,b){return b-a;});dynamicSnapPointIndex.value=_normalizedSnapPoints.indexOf(dynamicSnapPoint);return _normalizedSnapPoints;}
  obj = { containerHeight: derivedValue, INITIAL_CONTAINER_HEIGHT: derivedValue(maxDynamicContentSize[1]).INITIAL_CONTAINER_HEIGHT, INITIAL_SNAP_POINT: derivedValue(maxDynamicContentSize[1]).INITIAL_SNAP_POINT, snapPoints, normalizeSnapPoint: derivedValue(maxDynamicContentSize[2]).normalizeSnapPoint, enableDynamicSizing: DEFAULT_DYNAMIC_SIZING, handleHeight: reactiveSharedValue2, INITIAL_HANDLE_HEIGHT: derivedValue(maxDynamicContentSize[1]).INITIAL_HANDLE_HEIGHT, contentHeight: sharedValue1, maxDynamicContentSize, dynamicSnapPointIndex: sharedValue };
  pnpm_useAnimatedSnapPointsTs1.__closure = obj;
  pnpm_useAnimatedSnapPointsTs1.__workletHash = 15015207820492;
  pnpm_useAnimatedSnapPointsTs1.__initData = closure_2;
  const items = [snapPoints, derivedValue, reactiveSharedValue2, sharedValue1, sharedValue, DEFAULT_DYNAMIC_SIZING, maxDynamicContentSize, sharedValue];
  derivedValue = derivedValue(maxDynamicContentSize[0]).useDerivedValue(pnpm_useAnimatedSnapPointsTs1, items);
  const obj2 = derivedValue(maxDynamicContentSize[0]);
  /* worklet (recovered source) */ function pnpm_useAnimatedSnapPointsTs2(){const{enableDynamicSizing,snapPoints}=this.__closure;if(enableDynamicSizing){return true;}const _snapPoints=snapPoints?'value'in snapPoints?snapPoints.value:snapPoints:[];if(_snapPoints.length&&_snapPoints.find(function(snapPoint){return typeof snapPoint==='string';})){return true;}return false;}
  pnpm_useAnimatedSnapPointsTs2.__closure = { enableDynamicSizing: DEFAULT_DYNAMIC_SIZING, snapPoints };
  pnpm_useAnimatedSnapPointsTs2.__workletHash = 4816362093278;
  pnpm_useAnimatedSnapPointsTs2.__initData = closure_3;
  const items1 = [derivedValue, sharedValue, derivedValue(maxDynamicContentSize[0]).useDerivedValue(pnpm_useAnimatedSnapPointsTs2)];
  return items1;
};
