// Module ID: 11384
// Function ID: 88510
// Name: PremiumAnimatedGiftButton
// Dependencies: [31, 4122, 33, 4130, 689, 1324, 3834, 566, 477, 3991, 4660, 5453, 2]
// Exports: PremiumAnimatedGiftButton

// Module 11384 (PremiumAnimatedGiftButton)
import result from "result";
import { useRef } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let require = arg1;
let closure_7 = _createForOfIteratorHelperLoose.createStyles((width, marginHorizontal) => {
  let obj = {};
  obj = { backgroundColor: importDefault(689).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, width, height: width, borderRadius: importDefault(689).radii.round, marginHorizontal, display: "flex", alignItems: "center", justifyContent: "center" };
  obj.container = obj;
  obj = { width, height: width, borderRadius: importDefault(689).radii.sm, marginHorizontal, display: "flex", alignItems: "center", justifyContent: "center" };
  obj.containerRefresh = obj;
  obj.animation = { width: 30, height: 30 };
  obj.animationRefresh = { width: 24, height: 24 };
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/premium/native/gifting/PremiumAnimatedGiftButton.tsx");

export const PremiumAnimatedGiftButton = function PremiumAnimatedGiftButton(arg0) {
  let accessibilityState;
  let active;
  let activeStyle;
  let animationDataUrl;
  let channelId;
  let disabled;
  let loop;
  let onAnimationFinished;
  let style;
  ({ active, disabled, accessibilityState } = arg0);
  ({ style, activeStyle, channelId, animationDataUrl, onAnimationFinished, loop } = arg0);
  let obj = require(1324) /* useIsMobileVisualRefreshExperimentEnabled */;
  const enabled = obj.useMobileVisualRefreshConfig({ location: "PremiumAnimatedGiftButton" }).enabled;
  let obj1 = require(3834) /* map */;
  const token = obj1.useToken(stateFromStores(689).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj2 = require(3834) /* map */;
  const token1 = obj2.useToken(stateFromStores(689).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const token2 = require(3834) /* map */.useToken(stateFromStores(689).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const tmp4 = callback(token, token1);
  const bound = Math.max(0, (token2 - token) / 2);
  const tmp6 = useRef(null);
  require = tmp6;
  const obj4 = require(3834) /* map */;
  const items = [_isNativeReflectConstruct];
  stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_5.useReducedMotion);
  const items1 = [channelId, stateFromStores];
  const effect = React.useEffect(() => {
    if (!stateFromStores) {
      if (obj.isIOS()) {
        let tmp5 = null == tmp6;
        if (!tmp5) {
          const current = tmp6.current;
          tmp5 = null == current;
          const obj2 = current;
        }
        if (!tmp5) {
          obj2.reset();
        }
      }
      let tmp10 = null == tmp6;
      if (!tmp10) {
        const current2 = tmp6.current;
        tmp10 = null == current2;
        const obj3 = current2;
      }
      if (!tmp10) {
        obj3.play();
      }
      obj = tmp6(outer1_2[8]);
    }
  }, items1);
  obj = {};
  let FadeOut;
  if (!stateFromStores) {
    FadeOut = require(3991).FadeOut;
  }
  obj.exiting = FadeOut;
  obj = {};
  const items2 = [enabled ? tmp4.containerRefresh : tmp4.container, style, ];
  if (active) {
    active = !disabled;
  }
  if (active) {
    active = activeStyle;
  }
  items2[2] = active;
  obj.style = items2;
  let tmp14;
  if (bound > 0) {
    tmp14 = bound;
  }
  obj.hitSlop = tmp14;
  obj.accessibilityRole = "button";
  obj1 = { disabled };
  const merged = Object.assign(accessibilityState);
  obj.accessibilityState = obj1;
  const merged1 = Object.assign(arg0);
  obj2 = { ref: tmp6, style: enabled ? tmp4.animationRefresh : tmp4.animation, source: { uri: animationDataUrl }, loop, autoPlay: false, onAnimationFinish: onAnimationFinished };
  obj["children"] = jsx(stateFromStores(5453), { ref: tmp6, style: enabled ? tmp4.animationRefresh : tmp4.animation, source: { uri: animationDataUrl }, loop, autoPlay: false, onAnimationFinish: onAnimationFinished });
  obj.children = jsx(require(4660) /* PressableBase */.PressableOpacity, {});
  return jsx(stateFromStores(3991).View, {});
};
