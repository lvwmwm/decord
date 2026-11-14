// Module ID: 14656
// Function ID: 14657
// Name: GiftIconTrinketsAnimation
// Dependencies: [19, 17, 5307, 21, 5306, 5902, 575, 504, 2153, 14657, 6020, 2]

// Module 14656 (GiftIconTrinketsAnimation)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import StringUtils from "StringUtils" /* 2153 */;
import useToken from "useToken" /* 5902 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((width) => ({ containerRefresh: { position: "absolute", top: 0, left: 0, width, height: width, overflow: "visible", marginLeft: 0, zIndex: 0 }, trinketsRefresh: { zIndex: 4, position: "absolute", pointerEvents: "none", width: "175%", height: "175%", top: "-37.5%", left: "-37.5%" } }));
const memoResult = react.memo(function GiftIconTrinketsAnimation(arg0) {
  let tmp8;
  let trinketsAnimationUrl;
  let trinketsRiveAnimationUrl;
  let useReducedMotion;
  ({ trinketsAnimationUrl, trinketsRiveAnimationUrl } = arg0);
  const obj = useToken;
  const tmp4 = closure_6(obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE));
  const items = [AccessibilityStore];
  const trinketsRefresh = tmp4.trinketsRefresh;
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj3 = StringUtils;
  if (obj3.isNullOrEmpty(trinketsRiveAnimationUrl)) {
    let tmp9 = null;
    const tmpResult = StringUtils;
    if (!tmpResult.isNullOrEmpty(trinketsAnimationUrl)) {
      tmp9 = <View style={tmp4.containerRefresh} pointerEvents="none">{null}</View>;
      const obj6 = { uri: trinketsAnimationUrl };
    }
    tmp8 = tmp9;
  } else {
    tmp8 = <View style={tmp4.containerRefresh} pointerEvents="none">{null}</View>;
  }
  return tmp8;
});
const result = size.fileFinishedImporting("modules/chat_input/native/GiftIconTrinketsAnimation.tsx");

export const GiftIconTrinketsAnimation = memoResult;
