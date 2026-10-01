// Module ID: 11732
// Function ID: 11733
// Name: GiftIconTrinketsAnimation
// Dependencies: [19, 17, 4825, 21, 4836, 4531, 576, 504, 2011, 1364, 8271, 5899, 2]

// Module 11732 (GiftIconTrinketsAnimation)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import StringUtils from "StringUtils" /* 2011 */;
import useToken from "useToken" /* 4531 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let trinketsAnimationUrl;

let tmp3;
const FastImageDefault = tmp3(5899);
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((width) => ({ containerRefresh: { position: "absolute", top: 0, left: 0, width, height: width, overflow: "visible", marginLeft: 0, zIndex: 0 }, trinketsRefresh: { zIndex: 4, position: "absolute", pointerEvents: "none", width: "175%", height: "175%", top: "-37.5%", left: "-37.5%" } }));
const memoResult = react.memo((trinketsAnimationUrl) => {
  let obj7;
  let tmp7Result;
  let useReducedMotion;
  trinketsAnimationUrl = trinketsAnimationUrl.trinketsAnimationUrl;
  const obj = useToken;
  const tmp4 = closure_6(obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE));
  const items = [AccessibilityStore];
  const obj2 = get_initialized;
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const trinketsRefresh = tmp4.trinketsRefresh;
  let tmp7Result2 = null;
  const obj3 = StringUtils;
  if (!obj3.isNullOrEmpty(trinketsAnimationUrl)) {
    const obj4 = { style: tmp4.containerRefresh, pointerEvents: "none", children: tmp7Result };
    const tmp8 = View;
    const tmpResult = PlatformUtils;
    if (tmpResult.isAndroid()) {
      const obj5 = { url: trinketsAnimationUrl, autoplay: !stateFromStores, style: trinketsRefresh };
      tmp7Result = tmp7(tmp(8271).APNGPlayer, obj5);
    } else {
      const obj6 = { source: obj7, style: trinketsRefresh, resizeMode: "contain", enableAnimation: !stateFromStores };
      obj7 = { uri: trinketsAnimationUrl };
      tmp7Result = tmp7(FastImageDefault, obj6);
    }
    tmp7Result2 = tmp7(tmp8, obj4);
  }
  return tmp7Result2;
});
const result = size.fileFinishedImporting("modules/chat_input/native/GiftIconTrinketsAnimation.tsx");

export const GiftIconTrinketsAnimation = memoResult;
