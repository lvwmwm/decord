// Module ID: 10381
// Function ID: 80035
// Name: ChatViewWrapperAnimatedKeyboard
// Dependencies: [31, 27, 33, 478, 2, 31, 33, 10388, 5230, 10389, 2, 57, 31]
// Exports: default

// Module 10381 (ChatViewWrapperAnimatedKeyboard)
import importAllResult from "module_31";
import { View } from "keys";
import module_33 from "module_33";
import { Easing } from "isWindows";
import module_31 from "module_31";

({ jsx: closure_5, jsxs: closure_6 } = module_33);
const obj = { duration: require("result2").timingStandardDuration, easing: Easing.bezier(0.2, 0, 0, 1) };
let closure_8 = { code: "function ChatViewWrapperAnimatedKeyboardTsx1(){const{animatedHeight}=this.__closure;return animatedHeight.get();}" };
let closure_9 = { code: "function ChatViewWrapperAnimatedKeyboardTsx2(height,heightPrev){const{animatedAdjustedMargin,animatedAdjustedMarginPending}=this.__closure;if(heightPrev==null){return;}if(height<heightPrev){animatedAdjustedMargin.set(height);animatedAdjustedMarginPending.set(-1);}else{animatedAdjustedMarginPending.set(height);}}" };
let closure_10 = { code: "function ChatViewWrapperAnimatedKeyboardTsx3(){const{animatedAdjustedMargin,withTiming,animatedHeight,INSET_ANIMATION_CONFIG2,animatedAdjustedMarginPending}=this.__closure;return{flex:1,marginTop:animatedAdjustedMargin.get(),transform:[{translateY:withTiming(-animatedHeight.get(),INSET_ANIMATION_CONFIG2,'respect-motion-settings',function(finished){if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}})}]};}" };
let closure_11 = { code: "function ChatViewWrapperAnimatedKeyboardTsx4(finished){const{animatedAdjustedMarginPending,animatedAdjustedMargin}=this.__closure;if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}}" };
let closure_12 = importAllResult.memo((channelId) => {
  const tmp = importDefault(dependencyMap[7])();
  const arg1 = tmp;
  const items = [tmp];
  const obj = {};
  const items1 = [importDefault(dependencyMap[8])(channelId.channelId), importAllResult.useMemo(() => ({ bottom: -tmp, height: tmp }), items)];
  obj.style = items1;
  return callback(View, obj);
});
const result = module_31.fileFinishedImporting("modules/chat/native/ChatViewWrapperAnimatedKeyboard.tsx");

export default function ChatViewWrapperAnimatedKeyboard(arg0) {
  let channelId;
  let children;
  let stickyHeader;
  let style;
  ({ channelId, style } = arg0);
  ({ children, stickyHeader } = arg0);
  const tmp = importDefault(dependencyMap[9])(channelId);
  let obj = {};
  obj = { header: stickyHeader, style, pointerEvents: tmp };
  obj = {
    style: function useSafeAreaInsetAnimatedStyle() {
      let obj = sharedValue(sharedValue1[5])();
      const sharedValue = obj(sharedValue1[3]).useSharedValue(obj.get());
      const obj2 = obj(sharedValue1[3]);
      const sharedValue1 = obj(sharedValue1[3]).useSharedValue(-1);
      const obj3 = obj(sharedValue1[3]);
      const fn = function n() {
        return obj.get();
      };
      fn.__closure = { animatedHeight: obj };
      fn.__workletHash = 9219066704490;
      fn.__initData = closure_8;
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
      fn2.__initData = closure_9;
      const animatedReaction = obj(sharedValue1[3]).useAnimatedReaction(fn, fn2);
      const obj4 = obj(sharedValue1[3]);
      const fn3 = function s() {
        let obj = { flex: 1, marginTop: sharedValue.get() };
        obj = {};
        const fn = function t(arg0) {
          let tmp = arg0;
          if (arg0) {
            tmp = -1 !== store.get();
          }
          if (tmp) {
            const result = closure_1.set(store.get());
            const result1 = store.set(-1);
          }
        };
        obj = { animatedAdjustedMarginPending: sharedValue1, animatedAdjustedMargin: sharedValue };
        fn.__closure = obj;
        fn.__workletHash = 16224255032954;
        fn.__initData = closure_11;
        obj.translateY = obj(sharedValue1[6]).withTiming(-obj.get(), closure_7, "respect-motion-settings", fn);
        const items = [obj];
        obj.transform = items;
        return obj;
      };
      obj = { animatedAdjustedMargin: sharedValue, withTiming: obj(sharedValue1[6]).withTiming, animatedHeight: obj, INSET_ANIMATION_CONFIG2: closure_7, animatedAdjustedMarginPending: sharedValue1 };
      fn3.__closure = obj;
      fn3.__workletHash = 7205645695043;
      fn3.__initData = closure_10;
      return obj(sharedValue1[3]).useAnimatedStyle(fn3);
    }()
  };
  const items = [callback(View, { style, children }), callback(closure_12, { channelId })];
  obj.children = items;
  obj.children = callback2(importDefault(dependencyMap[3]).View, obj);
  obj.children = callback(arg1(dependencyMap[11]).StickyWrapper, obj);
  return callback(arg1(dependencyMap[10]).LayerScope, obj);
};
