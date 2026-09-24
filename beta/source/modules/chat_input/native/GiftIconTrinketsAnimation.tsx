// Module ID: 12433
// Function ID: 12434
// Name: GiftIconTrinketsAnimation
// Dependencies: [19, 17, 4782, 21, 4790, 558, 568, 4494, 580, 504, 2013, 1368, 9119, 5834, 2]

// Module 12433 (GiftIconTrinketsAnimation)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import useToken from "useToken" /* 4494 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4782 */;

const initialize = APNGPlayer(504);
const PlatformUtils = APNGPlayer(1368);
const FastImageDefault = tmp2(5834);
const APNGPlayer2 = APNGPlayer(9119);
require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4790);
let closure_6 = createStyles.createStyles((width) => ({ containerRefresh: { position: "absolute", top: 0, left: 0, width, height: width, overflow: "visible", marginLeft: 0, zIndex: 0 }, trinketsRefresh: { zIndex: 4, position: "absolute", pointerEvents: "none", width: "175%", height: "175%", top: "-37.5%", left: "-37.5%" } }));
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/GiftIconTrinketsAnimation.tsx");

export const GiftIconTrinketsAnimation = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((trinketsAnimationUrl) => {
  let APNGPlayer = require;
  let obj = dependencyMap;
  const cResult = c.c(9);
  trinketsAnimationUrl = trinketsAnimationUrl.trinketsAnimationUrl;
  let containerRefresh = closure_6(useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE));
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function c() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp3 = items;
    tmp4 = fn;
  } else {
    [tmp3, tmp4] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp3, tmp4);
  const trinketsRefresh = containerRefresh.trinketsRefresh;
  const APNGPlayerResult = initialize;
  if (APNGPlayerResult1.isNullOrEmpty(trinketsAnimationUrl)) {
    return null;
  } else {
    if (cResult[2] === stateFromStores) {
      if (cResult[3] === trinketsRefresh) {
        if (cResult[4] === trinketsAnimationUrl) {
          if (cResult[6] === containerRefresh.containerRefresh) {
          }
          const obj4 = { style: containerRefresh.containerRefresh, pointerEvents: "none", children: cResult[5] };
          const tmp14 = <View style={containerRefresh.containerRefresh} pointerEvents="none">{cResult[5]}</View>;
          containerRefresh = containerRefresh.containerRefresh;
          cResult[6] = containerRefresh;
          cResult[7] = cResult[5];
          cResult[8] = tmp14;
        }
      }
    }
    if (APNGPlayerResult2.isAndroid()) {
      APNGPlayer = APNGPlayer2.APNGPlayer;
      obj = { url: trinketsAnimationUrl, autoplay: !stateFromStores, style: trinketsRefresh };
      let tmp8Result = tmp8(APNGPlayer, obj);
    } else {
      const obj5 = { source: null, style: null, resizeMode: "contain", enableAnimation: null };
      const obj6 = { uri: trinketsAnimationUrl };
      obj5.source = obj6;
      obj5.style = trinketsRefresh;
      obj5.enableAnimation = !stateFromStores;
      tmp8Result = tmp8(FastImageDefault, obj5);
    }
    cResult[2] = stateFromStores;
    cResult[3] = trinketsRefresh;
    cResult[4] = trinketsAnimationUrl;
    cResult[5] = tmp8Result;
    APNGPlayerResult2 = PlatformUtils;
  }
}) : ((trinketsAnimationUrl) => {
  trinketsAnimationUrl = trinketsAnimationUrl.trinketsAnimationUrl;
  let APNGPlayer = require;
  let obj = dependencyMap;
  const tmp2 = closure_6(useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE));
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const trinketsRefresh = tmp2.trinketsRefresh;
  if (obj4.isNullOrEmpty(trinketsAnimationUrl)) {
    return null;
  } else {
    const obj5 = { style: tmp2.containerRefresh, pointerEvents: "none", children: null };
    if (APNGPlayerResult.isAndroid()) {
      APNGPlayer = APNGPlayer2.APNGPlayer;
      obj = { url: trinketsAnimationUrl, autoplay: !stateFromStores, style: trinketsRefresh };
      let tmp4Result = tmp4(APNGPlayer, obj);
    } else {
      const obj6 = { source: null, style: null, resizeMode: "contain", enableAnimation: null };
      const obj7 = { uri: trinketsAnimationUrl };
      obj6.source = obj7;
      obj6.style = trinketsRefresh;
      obj6.enableAnimation = !stateFromStores;
      tmp4Result = tmp4(FastImageDefault, obj6);
    }
    obj5.children = tmp4Result;
    <View style={tmp2.containerRefresh} pointerEvents="none">{null}</View>;
    APNGPlayerResult = PlatformUtils;
  }
}));
