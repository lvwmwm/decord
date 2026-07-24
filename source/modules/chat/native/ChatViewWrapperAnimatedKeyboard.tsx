// Module ID: 10421
// Function ID: 80301
// Name: ChatViewWrapperAnimatedKeyboard
// Dependencies: [31, 27, 33, 3991, 4134, 10422, 4131, 5163, 10426, 10428, 5449, 10429, 2]
// Exports: default

// Module 10421 (ChatViewWrapperAnimatedKeyboard)
import importAllResult from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import { Easing } from "module_3991";

let closure_5;
let closure_6;
let require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = { duration: require("timingNone").timingStandardDuration, easing: Easing.bezier(0.2, 0, 0, 1) };
let closure_8 = { code: "function ChatViewWrapperAnimatedKeyboardTsx1(){const{animatedHeight}=this.__closure;return animatedHeight.get();}" };
let closure_9 = { code: "function ChatViewWrapperAnimatedKeyboardTsx2(height,heightPrev){const{animatedAdjustedMargin,animatedAdjustedMarginPending}=this.__closure;if(heightPrev==null){return;}if(height<heightPrev){animatedAdjustedMargin.set(height);animatedAdjustedMarginPending.set(-1);}else{animatedAdjustedMarginPending.set(height);}}" };
let closure_10 = { code: "function ChatViewWrapperAnimatedKeyboardTsx3(){const{animatedAdjustedMargin,withTiming,animatedHeight,INSET_ANIMATION_CONFIG2,animatedAdjustedMarginPending}=this.__closure;return{flex:1,marginTop:animatedAdjustedMargin.get(),transform:[{translateY:withTiming(-animatedHeight.get(),INSET_ANIMATION_CONFIG2,'respect-motion-settings',function(finished){if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}})}]};}" };
let closure_11 = { code: "function ChatViewWrapperAnimatedKeyboardTsx4(finished){const{animatedAdjustedMarginPending,animatedAdjustedMargin}=this.__closure;if(!finished){return;}if(animatedAdjustedMarginPending.get()!==-1){animatedAdjustedMargin.set(animatedAdjustedMarginPending.get());animatedAdjustedMarginPending.set(-1);}}" };
let closure_12 = importAllResult.memo((channelId) => {
  const tmp = importDefault(5163)();
  const require = tmp;
  const items = [tmp];
  let obj = {};
  const items1 = [
    importDefault(10426)(channelId.channelId),
    importAllResult.useMemo(() => {
      const obj = { position: "absolute", bottom: -closure_0, height: closure_0, right: 0, left: 0 };
      return obj;
    }, items)
  ];
  obj.style = items1;
  return callback(View, obj);
});
const bezierResult = Easing.bezier(0.2, 0, 0, 1);
let result = require("jsxProd").fileFinishedImporting("modules/chat/native/ChatViewWrapperAnimatedKeyboard.tsx");

export default function ChatViewWrapperAnimatedKeyboard(arg0) {
  let channelId;
  let children;
  let stickyHeader;
  let style;
  ({ channelId, style } = arg0);
  ({ children, stickyHeader } = arg0);
  let tmp = importDefault(10428)(channelId);
  let obj = {};
  obj = { header: stickyHeader, style, pointerEvents: tmp };
  obj = {
    style: (function useSafeAreaInsetAnimatedStyle() {
      let obj = outer1_1(outer1_2[5])();
      const sharedValue = outer1_0(outer1_2[3]).useSharedValue(obj.get());
      const obj2 = outer1_0(outer1_2[3]);
      const sharedValue1 = outer1_0(outer1_2[3]).useSharedValue(-1);
      const obj3 = outer1_0(outer1_2[3]);
      let fn = function n() {
        return obj.get();
      };
      fn.__closure = { animatedHeight: obj };
      fn.__workletHash = 9219066704490;
      fn.__initData = outer1_8;
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
      fn2.__initData = outer1_9;
      const animatedReaction = outer1_0(outer1_2[3]).useAnimatedReaction(fn, fn2);
      const obj4 = outer1_0(outer1_2[3]);
      const fn3 = function s() {
        let obj = { flex: 1, marginTop: sharedValue.get() };
        obj = {};
        const fn = function t(arg0) {
          let tmp = arg0;
          if (arg0) {
            tmp = -1 !== outer1_2.get();
          }
          if (tmp) {
            const result = outer1_1.set(outer1_2.get());
            const result1 = outer1_2.set(-1);
          }
        };
        obj = { animatedAdjustedMarginPending: sharedValue1, animatedAdjustedMargin: sharedValue };
        fn.__closure = obj;
        fn.__workletHash = 16224255032954;
        fn.__initData = outer2_11;
        obj.translateY = outer2_0(outer2_2[6]).withTiming(-obj.get(), outer2_7, "respect-motion-settings", fn);
        const items = [obj];
        obj.transform = items;
        return obj;
      };
      obj = { animatedAdjustedMargin: sharedValue, withTiming: outer1_0(outer1_2[6]).withTiming, animatedHeight: obj, INSET_ANIMATION_CONFIG2: outer1_7, animatedAdjustedMarginPending: sharedValue1 };
      fn3.__closure = obj;
      fn3.__workletHash = 7205645695043;
      fn3.__initData = outer1_10;
      return outer1_0(outer1_2[3]).useAnimatedStyle(fn3);
    })()
  };
  let items = [callback(View, { style, children }), callback(closure_12, { channelId })];
  obj.children = items;
  obj.children = callback2(importDefault(3991).View, obj);
  obj.children = callback(require(10429) /* StickyWrapper */.StickyWrapper, obj);
  return callback(require(5449) /* Layer */.LayerScope, obj);
};
