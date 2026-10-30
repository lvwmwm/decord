// Module ID: 13758
// Function ID: 13759
// Name: PremiumAnimatedGiftButton
// Dependencies: [19, 5010, 21, 5009, 575, 5591, 504, 1376, 5090, 6974, 5613, 2]
// Exports: PremiumAnimatedGiftButton

// Module 13758 (PremiumAnimatedGiftButton)
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const react = react2;
let _require;

const useRef = react2.useRef;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles((width, marginHorizontal) => {
  const obj = { containerRefresh: size, animationRefresh: { width: 24, height: 24 } };
  size = { width, height: width, borderRadius: nativeDefault.radii.sm, marginHorizontal, display: "flex", alignItems: "center", justifyContent: "center" };
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumAnimatedGiftButton.tsx");

export function PremiumAnimatedGiftButton(arg0) {
  let accessibilityState;
  let active;
  let activeStyle;
  let animationDataUrl;
  let channelId;
  let disabled;
  let loop;
  let obj7;
  let onAnimationFinished;
  let ref;
  let stateFromStores;
  let style;
  let tmp14;
  let useReducedMotion;
  ({ active, disabled, accessibilityState } = arg0);
  let tmp = _require;
  ({ style, activeStyle, channelId, animationDataUrl, onAnimationFinished, loop } = arg0);
  let obj = require("useToken");
  const token = obj.useToken(stateFromStores(575).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const obj2 = require("useToken");
  const token1 = obj2.useToken(stateFromStores(575).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const obj3 = require("useToken");
  const token2 = obj3.useToken(stateFromStores(575).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const tmp7 = closure_7(token, token1);
  const bound = Math.max(0, (token2 - token) / 2);
  const tmp9 = useRef(null);
  _require = tmp9;
  const items = [AccessibilityStore];
  const obj4 = require("get initialized");
  const tmp3 = stateFromStores;
  stateFromStores = obj4.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [channelId, stateFromStores];
  const effect = react.useEffect(() => {
    const tmp = stateFromStores;
    if (!tmp) {
      const obj = PlatformUtils;
      if (obj.isIOS()) {
        if (ref != null) {
          const current = ref.current;
          if (current != null) {
            current.reset();
          }
        }
      }
      if (ref != null) {
        const current2 = ref.current;
        if (current2 != null) {
          current2.play();
        }
      }
    }
  }, items1);
  let FadeOut;
  const View = stateFromStores(5090).View;
  if (!stateFromStores) {
    FadeOut = tmp(5090).FadeOut;
  }
  const items2 = [tmp7.containerRefresh, style, ];
  const PressableOpacity = tmp(6974).PressableOpacity;
  if (active) {
    active = !disabled;
  }
  if (active) {
    active = activeStyle;
  }
  ({ style: items2, hitSlop: tmp14, accessibilityRole: "button", accessibilityState: obj7, children: jsx(tmp3(5613), obj8) });
  items2[2] = active;
  tmp14 = undefined;
  if (bound > 0) {
    tmp14 = bound;
  }
  obj7 = { disabled };
  const merged = Object.assign(accessibilityState);
  const merged1 = Object.assign(arg0);
  return <View exiting={FadeOut}>{null}</View>;
}
