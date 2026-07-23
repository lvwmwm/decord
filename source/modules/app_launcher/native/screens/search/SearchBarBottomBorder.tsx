// Module ID: 11216
// Function ID: 87307
// Name: usePinnedSearchBarBottomBorder
// Dependencies: [31, 33, 4130, 689, 3991, 4542, 4546, 2]
// Exports: usePinnedSearchBarBottomBorder

// Module 11216 (usePinnedSearchBarBottomBorder)
import result from "result";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderBottomWidth: 1 };
_createForOfIteratorHelperLoose.border = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_6 = { code: "function SearchBarBottomBorderTsx1(){const{withSpring,scrollPosition,triggerScrollHeight,springStandard}=this.__closure;return{opacity:withSpring(scrollPosition.get()>triggerScrollHeight?1:0,springStandard)};}" };
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/app_launcher/native/screens/search/SearchBarBottomBorder.tsx");

export const usePinnedSearchBarBottomBorder = function usePinnedSearchBarBottomBorder(arg0) {
  let key;
  let triggerScrollHeight;
  ({ key, triggerScrollHeight } = arg0);
  if (triggerScrollHeight === undefined) {
    triggerScrollHeight = 1;
  }
  let sharedValue;
  let obj = triggerScrollHeight(3991);
  sharedValue = obj.useSharedValue(0);
  const items = [key, sharedValue];
  const effect = React.useEffect(() => {
    const result = sharedValue.set(0);
  }, items);
  const items1 = [sharedValue];
  const callback = React.useCallback((offset) => {
    const result = sharedValue.set(offset.offset);
  }, items1);
  const tmp = _createForOfIteratorHelperLoose();
  const fn = function u() {
    const obj = {};
    let num = 0;
    if (sharedValue.get() > triggerScrollHeight) {
      num = 1;
    }
    obj.opacity = triggerScrollHeight(outer1_2[5]).withSpring(num, triggerScrollHeight(outer1_2[6]).springStandard);
    return obj;
  };
  obj = { withSpring: triggerScrollHeight(4542).withSpring, scrollPosition: sharedValue, triggerScrollHeight, springStandard: triggerScrollHeight(4546).springStandard };
  fn.__closure = obj;
  fn.__workletHash = 5466161440826;
  fn.__initData = closure_6;
  obj = { scrollHandler: callback };
  const animatedStyle = triggerScrollHeight(3991).useAnimatedStyle(fn);
  const items2 = [tmp.border, animatedStyle];
  obj.bottomBorderComponent = jsx(sharedValue(3991).View, { style: items2 }, key);
  return obj;
};
