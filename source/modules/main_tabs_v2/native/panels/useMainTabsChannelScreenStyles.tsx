// Module ID: 15135
// Function ID: 114219
// Name: useMainTabsChannelScreenStyles
// Dependencies: []
// Exports: useMainTabsChannelScreenStyles

// Module 15135 (useMainTabsChannelScreenStyles)
let closure_2 = importAll(dependencyMap[0]);
let obj = arg1(dependencyMap[2]);
obj = {};
obj = {};
const merged = Object.assign(arg1(dependencyMap[1]).StyleSheet.absoluteFillObject);
const merged1 = Object.assign(importDefault(dependencyMap[3]).shadows.SHADOW_LOW);
obj.elevation = obj;
let closure_3 = obj.createStyles(obj);
let closure_4 = { code: "function useMainTabsChannelScreenStylesTsx1(){const{freezeValue,isDragging,translateX,maxWidth,elevationStyle,isCompletelyCovered}=this.__closure;var _freezeValue,_isCompletelyCovered;(_freezeValue=freezeValue)===null||_freezeValue===void 0||_freezeValue.get();const showBorder=isDragging.get()||translateX.get()!==0&&translateX.get()!==maxWidth;return{transform:[{translateX:translateX.get()}],shadowOpacity:showBorder?elevationStyle.shadowOpacity:0,elevation:showBorder?elevationStyle.elevation:0,opacity:(_isCompletelyCovered=isCompletelyCovered)!==null&&_isCompletelyCovered!==void 0&&_isCompletelyCovered.get()?0:1};}" };
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/main_tabs_v2/native/panels/useMainTabsChannelScreenStyles.tsx");

export const useMainTabsChannelScreenStyles = function useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, isCompletelyCovered, parentFreezeValue) {
  translateX = isDragging;
  const dependencyMap = translateX;
  const React = maxWidth;
  const callback = isCompletelyCovered;
  let closure_4 = parentFreezeValue;
  const tmp = callback();
  const elevation = tmp.elevation;
  const fn = function c() {
    if (null != arg4) {
      let value = arg4.get();
    }
    value = arg0.get();
    if (!value) {
      let tmp5 = 0 !== arg1.get();
      if (tmp5) {
        tmp5 = arg1.get() !== arg2;
      }
      value = tmp5;
    }
    let obj = {};
    obj = { translateX: arg1.get() };
    const items = [obj];
    obj.transform = items;
    let num2 = 0;
    if (value) {
      num2 = elevation.shadowOpacity;
    }
    obj.shadowOpacity = num2;
    let num3 = 0;
    if (value) {
      num3 = elevation.elevation;
    }
    obj.elevation = num3;
    let num4 = 1;
    if (null != arg3) {
      num4 = 1;
      if (arg3.get()) {
        num4 = 0;
      }
    }
    obj.opacity = num4;
    return obj;
  };
  fn.__closure = { freezeValue: parentFreezeValue, isDragging, translateX, maxWidth, elevationStyle: elevation, isCompletelyCovered };
  fn.__workletHash = 16765484569296;
  fn.__initData = closure_4;
  const animatedStyle = translateX(dependencyMap[4]).useAnimatedStyle(fn);
  const items = [tmp, animatedStyle];
  return React.useMemo(() => {
    const items = [tmp.elevation, animatedStyle];
    return items;
  }, items);
};
