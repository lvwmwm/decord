// Module ID: 10893
// Function ID: 10894
// Name: ChatViewWrapperAnimatedKeyboard
// Dependencies: [19, 17, 21, 4566, 4840, 10894, 4837, 5891, 10899, 10901, 6577, 10902, 2]
// Exports: default

// Module 10893 (ChatViewWrapperAnimatedKeyboard)
import react_native from "react-native" /* 17 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import timingPresets from "timingPresets" /* 4840 */;
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight" /* 5891 */;
import useChannelSafeAreaBottomStylesDefault from "useChannelSafeAreaBottomStyles" /* 10899 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let bezierResult;
let hasOwnProperty;
let metroRequire;
let View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const Easing = ReanimatedRexport.Easing;
let obj = { duration: timingPresets.timingStandardDuration, easing: bezierResult };
const __initData = { code: "function ChatViewWrapperAnimatedKeyboardTsx1(){const{animatedHeight}=this.__closure;return animatedHeight.get();}" };
const __initData2 = { code: "function ChatViewWrapperAnimatedKeyboardTsx2(height,heightPrev){const{animatedAdjustedMargin,animatedAdjustedMarginPending}=this.__closure;if(heightPrev==null){return;}if(height<heightPrev){animatedAdjustedMargin.set(height);animatedAdjustedMarginPending.set(-1);}else{animatedAdjustedMarginPending.set(height);}}" };
const __initData3 = { code: "function ChatViewWrapperAnimatedKeyboardTsx3(){const{animatedAdjustedMargin,withTiming,animatedHeight,INSET_ANIMATION_CONFIG2,animatedAdjustedMarginPending}=this.__closure;return{flex:1,marginTop:animatedAdjustedMargin.get(),transform:[{translateY:withTiming(-animatedHeight.get(),INSET_ANIMATION_CONFIG2,'respect-motion-settings',function(finished){if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}})}]};}" };
let closure_11 = { code: "function ChatViewWrapperAnimatedKeyboardTsx4(finished){const{animatedAdjustedMarginPending,animatedAdjustedMargin}=this.__closure;if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}}" };
bezierResult = Easing.bezier(0.2, 0, 0, 1);
let closure_12 = react.memo((channelId) => {
  let items1;
  channelId = channelId.channelId;
  const tmp = useCustomKeyboardHeightDefault();
  let closure_0 = tmp;
  const items = [tmp];
  obj = { style: items1 };
  items1 = [useChannelSafeAreaBottomStylesDefault(channelId), ];
  useChannelSafeAreaBottomStylesDefault(channelId);
  items1[1] = react.useMemo(() => {
    const rect = { position: "absolute", bottom: -height, height, right: 0, left: 0 };
    return rect;
  }, items);
  return hasOwnProperty(View, obj);
});
let result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapperAnimatedKeyboard.tsx");

export default function ChatViewWrapperAnimatedKeyboard(arg0) {
  let StickyWrapper;
  let channelId;
  let children;
  let items;
  let obj8;
  let obj9;
  let stickyHeader;
  let style;
  ({ channelId, style } = arg0);
  ({ children, stickyHeader } = arg0);
  let sharedValue;
  let sharedValue1;
  let tmp = sharedValue(sharedValue1[9])(channelId);
  const INSET_ANIMATION_CONFIG2 = sharedValue(sharedValue1[5])();
  let obj2 = INSET_ANIMATION_CONFIG2(sharedValue1[3]);
  sharedValue = obj2.useSharedValue(INSET_ANIMATION_CONFIG2.get());
  let obj3 = INSET_ANIMATION_CONFIG2(sharedValue1[3]);
  sharedValue1 = obj3.useSharedValue(-1);
  let obj4 = INSET_ANIMATION_CONFIG2(sharedValue1[3]);
  let fn = function n() {
    return obj.get();
  };
  fn.__closure = { animatedHeight: INSET_ANIMATION_CONFIG2 };
  fn.__workletHash = 9219066704490;
  fn.__initData = __initData;
  const fn2 = function t(arg0, arg1) {
    if (null != arg1) {
      if (arg0 < arg1) {
        const result = sharedValue.set(arg0);
        const result1 = sharedValue1.set(-1);
      } else {
        const result2 = sharedValue1.set(arg0);
      }
    }
  };
  fn2.__closure = { animatedAdjustedMargin: sharedValue, animatedAdjustedMarginPending: sharedValue1 };
  fn2.__workletHash = 15141457454312;
  fn2.__initData = __initData2;
  const animatedReaction = obj4.useAnimatedReaction(fn, fn2);
  const fn3 = function s() {
    let fn;
    let items;
    let obj3;
    obj = { flex: 1, marginTop: sharedValue.get(), transform: items };
    const obj2 = { translateY: obj3.withTiming(-obj.get(), obj, "respect-motion-settings", fn) };
    fn = function t(arg0) {
      const tmp = arg0 && -1 !== sharedValue1.get();
      if (tmp) {
        const result = sharedValue.set(sharedValue1.get());
        const result1 = sharedValue1.set(-1);
      }
    };
    const obj4 = { animatedAdjustedMarginPending: sharedValue1, animatedAdjustedMargin: sharedValue };
    fn.__closure = obj4;
    fn.__workletHash = 16224255032954;
    fn.__initData = __initData;
    items = [obj2];
    obj3 = timing;
    return obj;
  };
  const obj5 = INSET_ANIMATION_CONFIG2(sharedValue1[3]);
  fn3.__closure = { animatedAdjustedMargin: sharedValue, withTiming: INSET_ANIMATION_CONFIG2(sharedValue1[6]).withTiming, animatedHeight: INSET_ANIMATION_CONFIG2, INSET_ANIMATION_CONFIG2, animatedAdjustedMarginPending: sharedValue1 };
  fn3.__workletHash = 7205645695043;
  fn3.__initData = __initData3;
  ({ animatedAdjustedMargin: sharedValue, withTiming: INSET_ANIMATION_CONFIG2(sharedValue1[6]).withTiming, animatedHeight: INSET_ANIMATION_CONFIG2, INSET_ANIMATION_CONFIG2, animatedAdjustedMarginPending: sharedValue1 });
  const animatedStyle = obj5.useAnimatedStyle(fn3);
  const obj7 = { children: closure_5(StickyWrapper, obj8) };
  const LayerScope = INSET_ANIMATION_CONFIG2(sharedValue1[10]).LayerScope;
  obj8 = { header: stickyHeader, style, pointerEvents: tmp, children: closure_6(View, obj9) };
  obj9 = { style: animatedStyle, children: items };
  StickyWrapper = INSET_ANIMATION_CONFIG2(sharedValue1[11]).StickyWrapper;
  View = sharedValue(sharedValue1[3]).View;
  items = [closure_5(View, { style, children }), closure_5(closure_12, { channelId })];
  return closure_5(LayerScope, obj7);
};
