// Module ID: 11356
// Function ID: 88275
// Name: GiftIconTrinketsAnimation
// Dependencies: [31, 27, 4122, 33, 4130, 4547, 1324, 3834, 689, 566, 1832, 477, 7956, 5085, 2]

// Module 11356 (GiftIconTrinketsAnimation)
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let closure_6 = _createForOfIteratorHelperLoose.createStyles((width) => {
  const sum = require(4547) /* getButtonPadding */.SMALL_BUTTON_HEIGHT + require(4547) /* getButtonPadding */.SMALL_BUTTON_PADDING + 2;
  const container = { position: "absolute", top: 0, left: 0, width: sum, height: sum, overflow: "visible", marginLeft: 4, zIndex: 0 };
  const containerRefresh = { position: "absolute", top: 0, left: 0, width, height: width, overflow: "visible", marginLeft: 0, zIndex: 0 };
  return { container, containerRefresh, trinkets: { zIndex: 4, position: "absolute", pointerEvents: "none", width: "100%", height: "100%", top: 0, left: 0 }, trinketsRefresh: { zIndex: 4, position: "absolute", pointerEvents: "none", width: "175%", height: "175%", top: "-37.5%", left: "-37.5%" } };
});
const memoResult = require("result").memo((trinketsAnimationUrl) => {
  trinketsAnimationUrl = trinketsAnimationUrl.trinketsAnimationUrl;
  let obj = require(1324) /* useIsMobileVisualRefreshExperimentEnabled */;
  const enabled = obj.useMobileVisualRefreshConfig({ location: "GiftIconTrinketsAnimation" }).enabled;
  let obj1 = require(3834) /* map */;
  const tmp = callback(obj1.useToken(importDefault(689).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE));
  let obj2 = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  let stateFromStores = obj2.useStateFromStores(items, () => outer1_4.useReducedMotion);
  const tmp3 = enabled ? tmp.trinketsRefresh : tmp.trinkets;
  if (obj4.isNullOrEmpty(trinketsAnimationUrl)) {
    return null;
  } else {
    obj = { style: enabled ? tmp.containerRefresh : tmp.container, pointerEvents: "none" };
    if (obj6.isAndroid()) {
      obj = { url: trinketsAnimationUrl };
      stateFromStores = !stateFromStores;
      obj.autoplay = stateFromStores;
      obj.style = tmp3;
      let tmp8Result = tmp8(require(7956) /* useAPNGPlayerControls */.APNGPlayer, obj);
    } else {
      obj1 = {};
      obj2 = { uri: trinketsAnimationUrl };
      obj1.source = obj2;
      obj1.style = tmp3;
      obj1.resizeMode = "contain";
      obj1.enableAnimation = !stateFromStores;
      tmp8Result = tmp8(importDefault(5085), obj1);
    }
    obj.children = tmp8Result;
    <View style={enabled ? tmp.containerRefresh : tmp.container} pointerEvents="none" />;
    obj6 = require(477) /* set */;
    const tmp4 = jsx;
    const tmp5 = View;
  }
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/chat_input/native/GiftIconTrinketsAnimation.tsx");

export const GiftIconTrinketsAnimation = memoResult;
