// Module ID: 14016
// Function ID: 14017
// Name: GiftIconTrinketsAnimation
// Dependencies: [19, 17, 5171, 21, 5170, 5754, 575, 504, 2150, 14017, 1377, 9606, 5872, 2]

// Module 14016 (GiftIconTrinketsAnimation)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import StringUtils from "StringUtils" /* 2150 */;
import useToken from "useToken" /* 5754 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5171 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let tmp3;
const FastImageDefault = tmp3(5872);
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((width) => ({ containerRefresh: { position: "absolute", top: 0, left: 0, width, height: width, overflow: "visible", marginLeft: 0, zIndex: 0 }, trinketsRefresh: { zIndex: 4, position: "absolute", pointerEvents: "none", width: "175%", height: "175%", top: "-37.5%", left: "-37.5%" } }));
const memoResult = react.memo(function GiftIconTrinketsAnimation(arg0) {
  let obj7;
  let tmp10Result;
  let tmp8;
  let trinketsAnimationUrl;
  let trinketsRiveAnimationUrl;
  let useReducedMotion;
  ({ trinketsAnimationUrl, trinketsRiveAnimationUrl } = arg0);
  const obj = useToken;
  const tmp4 = closure_6(obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE));
  const items = [AccessibilityStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const trinketsRefresh = tmp4.trinketsRefresh;
  const obj3 = StringUtils;
  if (obj3.isNullOrEmpty(trinketsRiveAnimationUrl)) {
    let tmp10Result2 = null;
    const tmpResult = StringUtils;
    if (!tmpResult.isNullOrEmpty(trinketsAnimationUrl)) {
      const obj4 = { style: tmp4.containerRefresh, pointerEvents: "none", children: tmp10Result };
      const tmp11 = View;
      const tmpResult2 = PlatformUtils;
      if (tmpResult2.isAndroid()) {
        const obj5 = { url: trinketsAnimationUrl, autoplay: !stateFromStores, style: trinketsRefresh };
        tmp10Result = tmp10(tmp(9606).APNGPlayer, obj5);
      } else {
        const obj6 = { source: obj7, style: trinketsRefresh, resizeMode: "contain", enableAnimation: !stateFromStores };
        obj7 = { uri: trinketsAnimationUrl };
        tmp10Result = tmp10(FastImageDefault, obj6);
      }
      tmp10Result2 = tmp10(tmp11, obj4);
    }
    tmp8 = tmp10Result2;
  } else {
    tmp8 = <View style={tmp4.containerRefresh} pointerEvents="none">{null}</View>;
  }
  return tmp8;
});
const result = size.fileFinishedImporting("modules/chat_input/native/GiftIconTrinketsAnimation.tsx");

export const GiftIconTrinketsAnimation = memoResult;
