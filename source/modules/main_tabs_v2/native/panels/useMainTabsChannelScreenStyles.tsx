// Module ID: 15305
// Function ID: 116753
// Name: useMainTabsChannelScreenStyles
// Dependencies: [31, 27, 4130, 689, 3991, 2]
// Exports: useMainTabsChannelScreenStyles

// Module 15305 (useMainTabsChannelScreenStyles)
import result from "result";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(require("get ActivityIndicator").StyleSheet.absoluteFillObject);
const merged1 = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_LOW);
_createForOfIteratorHelperLoose.elevation = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_4 = { code: "function useMainTabsChannelScreenStylesTsx1(){const{freezeValue,isDragging,translateX,maxWidth,elevationStyle,isCompletelyCovered}=this.__closure;var _freezeValue,_isCompletelyCovered;(_freezeValue=freezeValue)===null||_freezeValue===void 0||_freezeValue.get();const showBorder=isDragging.get()||translateX.get()!==0&&translateX.get()!==maxWidth;return{transform:[{translateX:translateX.get()}],shadowOpacity:showBorder?elevationStyle.shadowOpacity:0,elevation:showBorder?elevationStyle.elevation:0,opacity:(_isCompletelyCovered=isCompletelyCovered)!==null&&_isCompletelyCovered!==void 0&&_isCompletelyCovered.get()?0:1};}" };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/main_tabs_v2/native/panels/useMainTabsChannelScreenStyles.tsx");

export const useMainTabsChannelScreenStyles = function useMainTabsChannelScreenStyles(isDragging, translateX, maxWidth, isCompletelyCovered, parentFreezeValue) {
  const _require = isDragging;
  const dependencyMap = translateX;
  const React = maxWidth;
  const _createForOfIteratorHelperLoose = isCompletelyCovered;
  let closure_4 = parentFreezeValue;
  const tmp = _createForOfIteratorHelperLoose();
  let closure_5 = tmp;
  const elevation = tmp.elevation;
  const fn = function c() {
    if (null != parentFreezeValue) {
      let value = parentFreezeValue.get();
    }
    value = isDragging.get();
    if (!value) {
      let tmp5 = 0 !== translateX.get();
      if (tmp5) {
        tmp5 = translateX.get() !== result;
      }
      value = tmp5;
    }
    let obj = {};
    obj = { translateX: translateX.get() };
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
    if (null != isCompletelyCovered) {
      num4 = 1;
      if (isCompletelyCovered.get()) {
        num4 = 0;
      }
    }
    obj.opacity = num4;
    return obj;
  };
  fn.__closure = { freezeValue: parentFreezeValue, isDragging, translateX, maxWidth, elevationStyle: elevation, isCompletelyCovered };
  fn.__workletHash = 16765484569296;
  fn.__initData = closure_4;
  const animatedStyle = _require(3991).useAnimatedStyle(fn);
  let items = [tmp, animatedStyle];
  return React.useMemo(() => {
    const items = [tmp.elevation, animatedStyle];
    return items;
  }, items);
};
