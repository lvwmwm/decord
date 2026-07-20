// Module ID: 11199
// Function ID: 87209
// Name: usePinnedSearchBarBottomBorder
// Dependencies: [0, 0, 0, 0, 0, 0, 4294967295, 0]
// Exports: usePinnedSearchBarBottomBorder

// Module 11199 (usePinnedSearchBarBottomBorder)
import closure_3 from "result";
import { jsx } from "result";
import result from "result";
import result from "result";

result = {};
result = { borderBottomColor: require("result").colors.BORDER_SUBTLE, borderBottomWidth: 1 };
result.border = result;
result = result.createStyles(result);
let closure_6 = { code: "function SearchBarBottomBorderTsx1(){const{withSpring,scrollPosition,triggerScrollHeight,springStandard}=this.__closure;return{opacity:withSpring(scrollPosition.get()>triggerScrollHeight?1:0,springStandard)};}" };
result = result.fileFinishedImporting("modules/app_launcher/native/screens/search/SearchBarBottomBorder.tsx");

export const usePinnedSearchBarBottomBorder = function usePinnedSearchBarBottomBorder(arg0) {
  let key;
  let triggerScrollHeight;
  ({ key, triggerScrollHeight } = arg0);
  if (triggerScrollHeight === undefined) {
    triggerScrollHeight = 1;
  }
  const arg1 = triggerScrollHeight;
  let importDefault;
  let obj = arg1(dependencyMap[4]);
  const sharedValue = obj.useSharedValue(0);
  importDefault = sharedValue;
  const items = [key, sharedValue];
  const effect = React.useEffect(() => {
    const result = sharedValue.set(0);
  }, items);
  const items1 = [sharedValue];
  const callback = React.useCallback((offset) => {
    const result = sharedValue.set(offset.offset);
  }, items1);
  const tmp = result();
  const fn = function u() {
    const obj = {};
    let num = 0;
    if (sharedValue.get() > triggerScrollHeight) {
      num = 1;
    }
    obj.opacity = triggerScrollHeight(closure_2[5]).withSpring(num, triggerScrollHeight(closure_2[6]).springStandard);
    return obj;
  };
  obj = { withSpring: arg1(dependencyMap[5]).withSpring, scrollPosition: sharedValue, triggerScrollHeight, springStandard: arg1(dependencyMap[6]).springStandard };
  fn.__closure = obj;
  fn.__workletHash = 5466161440826;
  fn.__initData = closure_6;
  obj = { scrollHandler: callback };
  const animatedStyle = arg1(dependencyMap[4]).useAnimatedStyle(fn);
  const items2 = [tmp.border, animatedStyle];
  obj.bottomBorderComponent = jsx(importDefault(dependencyMap[4]).View, { style: items2 }, key);
  return obj;
};
