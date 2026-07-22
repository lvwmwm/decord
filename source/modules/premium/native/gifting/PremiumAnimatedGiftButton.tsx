// Module ID: 11345
// Function ID: 88220
// Name: PremiumAnimatedGiftButton
// Dependencies: []
// Exports: PremiumAnimatedGiftButton

// Module 11345 (PremiumAnimatedGiftButton)
let closure_3 = importAll(dependencyMap[0]);
const useRef = arg1(dependencyMap[0]).useRef;
let closure_5 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
let closure_7 = arg1(dependencyMap[3]).createStyles((width, marginHorizontal) => {
  let obj = {};
  obj = { backgroundColor: importDefault(dependencyMap[4]).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, width, height: width, borderRadius: importDefault(dependencyMap[4]).radii.round, marginHorizontal, display: "flex", alignItems: "center", justifyContent: "center" };
  obj.container = obj;
  obj = { width, height: width, borderRadius: importDefault(dependencyMap[4]).radii.sm, marginHorizontal, display: "flex", alignItems: "center", justifyContent: "center" };
  obj.containerRefresh = obj;
  obj.animation = {};
  obj.animationRefresh = {};
  return obj;
});
const obj = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/premium/native/gifting/PremiumAnimatedGiftButton.tsx");

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
  let obj = arg1(dependencyMap[5]);
  const enabled = obj.useMobileVisualRefreshConfig({ location: "PremiumAnimatedGiftButton" }).enabled;
  let obj1 = arg1(dependencyMap[6]);
  const token = obj1.useToken(importDefault(dependencyMap[4]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj2 = arg1(dependencyMap[6]);
  const token1 = obj2.useToken(importDefault(dependencyMap[4]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const token2 = arg1(dependencyMap[6]).useToken(importDefault(dependencyMap[4]).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const tmp4 = callback(token, token1);
  const bound = Math.max(0, (token2 - token) / 2);
  const tmp6 = useRef(null);
  const arg1 = tmp6;
  const obj4 = arg1(dependencyMap[6]);
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[7]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const importDefault = stateFromStores;
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
      const obj = tmp6(closure_2[8]);
    }
  }, items1);
  obj = {};
  let FadeOut;
  if (!stateFromStores) {
    FadeOut = arg1(dependencyMap[9]).FadeOut;
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
  obj["children"] = jsx(importDefault(dependencyMap[11]), obj2);
  obj.children = jsx(arg1(dependencyMap[10]).PressableOpacity, obj);
  return jsx(importDefault(dependencyMap[9]).View, obj);
};
