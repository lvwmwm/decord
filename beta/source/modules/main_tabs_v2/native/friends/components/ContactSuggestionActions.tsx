// Module ID: 16080
// Function ID: 16081
// Name: ContactSuggestionActions
// Dependencies: [19, 17, 21, 4566, 4836, 576, 15677, 4837, 5280, 1177, 16081, 5281, 1115, 2]
// Exports: ContactSuggestionActions

// Module 16080 (ContactSuggestionActions)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import spring from "spring" /* 5280 */;
import AddFriendsScreenUtils from "AddFriendsScreenUtils" /* 15677 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let num, num2, num3, num4, num5, num6, num7, num8, obj1, set, set2, set2Result, set3, set3Result, set4, set4Result, tmp11, tmp13, tmp15, tmp16, tmp17, tmp18, tmp2, tmp20, tmp21, tmp22, tmp23, tmp25, tmp26, tmp27, tmp29, tmp3, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44, tmp45, tmp6, tmp7, tmp9;

let Easing;
let Easing2;
let Easing3;
let Easing4;
let hasOwnProperty;
let metroRequire;
let obj6;
let View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { duration: 200, easing: Easing.in(ReanimatedRexport.Easing.quad) };
Easing = ReanimatedRexport.Easing;
let obj2 = { duration: 250, easing: Easing2.in(ReanimatedRexport.Easing.quad) };
Easing2 = ReanimatedRexport.Easing;
let obj3 = { duration: 250, easing: Easing3.in(ReanimatedRexport.Easing.quad) };
Easing3 = ReanimatedRexport.Easing;
let obj4 = { duration: 250, easing: Easing4.out(ReanimatedRexport.Easing.quad) };
Easing4 = ReanimatedRexport.Easing;
const SPRING_CONFIG = { mass: 1, stiffness: 172, damping: 17.3 };
let obj5 = { icon: obj6 };
obj6 = { position: "absolute", top: 4, zIndex: 2, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, opacity: 0 };
let closure_12 = createStyles.createStyles(obj5);
const __initData = { code: "function ContactSuggestionActionsTsx1(){const{right,opacity,scale}=this.__closure;return{right:right.get(),opacity:opacity.get(),transform:[{scale:scale.get()}]};}" };
const __initData2 = { code: "function ContactSuggestionActionsTsx2(){const{buttonOpacity}=this.__closure;return{opacity:buttonOpacity.get()};}" };
const __initData3 = { code: "function ContactSuggestionActionsTsx3(){const{added}=this.__closure;return added.get();}" };
const __initData4 = { code: "function ContactSuggestionActionsTsx4(added){const{animate,runOnJS,finishAnimationCallback,scale,withTiming,SCALE_CONFIG,opacity,OPACITY_CONFIG,buttonOpacity,right,withSpring,SPRING_CONFIG,withDelay,OPACITY_OUT_CONFIG,TRANSLATE_OUT_CONFIG}=this.__closure;if(!animate){runOnJS(finishAnimationCallback)();return;}if(added){scale.set(withTiming(1,SCALE_CONFIG));opacity.set(withTiming(1,OPACITY_CONFIG));buttonOpacity.set(withTiming(0,OPACITY_CONFIG));right.set(withSpring(12,SPRING_CONFIG,'respect-motion-settings',function(finished){if(!finished)return;opacity.set(withDelay(1000,withTiming(0,OPACITY_OUT_CONFIG)));scale.set(withDelay(1000,withTiming(0.5,SCALE_CONFIG)));right.set(withDelay(1000,withTiming(-8,TRANSLATE_OUT_CONFIG,'respect-motion-settings',function(finished){if(finished)runOnJS(finishAnimationCallback)();})));}));}else{buttonOpacity.set(1);scale.set(0.5);opacity.set(0);right.set(30);}}" };
const __initData5 = { code: "function ContactSuggestionActionsTsx5(finished){const{opacity,withDelay,withTiming,OPACITY_OUT_CONFIG,scale,SCALE_CONFIG,right,TRANSLATE_OUT_CONFIG,runOnJS,finishAnimationCallback}=this.__closure;if(!finished)return;opacity.set(withDelay(1000,withTiming(0,OPACITY_OUT_CONFIG)));scale.set(withDelay(1000,withTiming(0.5,SCALE_CONFIG)));right.set(withDelay(1000,withTiming(-8,TRANSLATE_OUT_CONFIG,'respect-motion-settings',function(finished){if(finished)runOnJS(finishAnimationCallback)();})));}" };
let closure_18 = { code: "function ContactSuggestionActionsTsx6(finished){const{runOnJS,finishAnimationCallback}=this.__closure;if(finished)runOnJS(finishAnimationCallback)();}" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ContactSuggestionActions.tsx");

export const ContactSuggestionActions = function ContactSuggestionActions(user) {
  let Button;
  let Icon;
  let callback;
  let intl;
  let items2;
  let items3;
  let obj11;
  let obj13;
  user = user.user;
  const added = user.added;
  const onAddSuggestion = user.onAddSuggestion;
  const onFinishAnimation = user.onFinishAnimation;
  let str = user.size;
  if (str === undefined) {
    str = "sm";
  }
  const animate = user.animate;
  let tmp = closure_12();
  let obj = user(onAddSuggestion[3]);
  const sharedValue = obj.useSharedValue(30);
  let obj2 = user(onAddSuggestion[3]);
  const sharedValue1 = obj2.useSharedValue(0.5);
  obj3 = user(onAddSuggestion[3]);
  const sharedValue2 = obj3.useSharedValue(0);
  let obj4 = user(onAddSuggestion[3]);
  const sharedValue3 = obj4.useSharedValue(1);
  let items = [onFinishAnimation, user];
  const SCALE_CONFIG = onFinishAnimation.useCallback(() => {
    if (null != onFinishAnimation) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        onFinishAnimation(user);
      }, 1000);
    }
  }, items);
  let obj5 = user(onAddSuggestion[3]);
  let fn = function b() {
    let items;
    const obj = { right: sharedValue.get(), opacity: sharedValue2.get(), transform: items };
    items = [{ scale: sharedValue1.get() }];
    ({ scale: sharedValue1.get() });
    return obj;
  };
  fn.__closure = { right: sharedValue, opacity: sharedValue2, scale: sharedValue1 };
  fn.__workletHash = 13774422449074;
  fn.__initData = __initData;
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const obj6 = user(onAddSuggestion[3]);
  class E {
    constructor() {
      const obj = { opacity: sharedValue3.get() };
      return obj;
    }
  }
  E.__closure = { buttonOpacity: sharedValue3 };
  E.__workletHash = 4378005846847;
  E.__initData = __initData2;
  const items1 = [onAddSuggestion, user, added, animate, sharedValue, sharedValue2, sharedValue1, sharedValue3];
  const animatedStyle1 = obj6.useAnimatedStyle(E);
  const callback1 = onFinishAnimation.useCallback(() => {
    const obj = AddFriendsScreenUtils;
    obj.addContactSuggestion(user);
    onAddSuggestion(user);
    const result = added.set(true);
    const tmp4 = animate;
    if (!tmp4) {
      const result1 = sharedValue.set(12);
      const result2 = sharedValue2.set(1);
      const result3 = sharedValue1.set(1);
      const result4 = sharedValue3.set(0);
    }
  }, items1);
  const fn2 = function k() {
    return added.get();
  };
  fn2.__closure = { added };
  fn2.__workletHash = 15816115253403;
  fn2.__initData = __initData3;
  const obj7 = user(onAddSuggestion[3]);
  class D {
    constructor(arg0) {
      tmp = animate;
      if (tmp) {
        tmp6 = user;
        if (tmp6) {
          tmp15 = closure_6;
          tmp16 = closure_0;
          tmp17 = closure_2;
          set = closure_6.set;
          obj2 = closure_0(closure_2[7]);
          tmp18 = closure_9;
          num5 = 1;
          result = set(obj2.withTiming(1, closure_9));
          tmp20 = closure_7;
          tmp21 = closure_0;
          tmp22 = closure_2;
          set2 = closure_7.set;
          obj3 = closure_0(closure_2[7]);
          tmp23 = closure_7;
          set2Result = set2(obj3.withTiming(1, closure_7));
          tmp25 = closure_8;
          tmp26 = closure_0;
          tmp27 = closure_2;
          set3 = closure_8.set;
          obj4 = closure_0(closure_2[7]);
          num6 = 0;
          set3Result = set3(obj4.withTiming(0, closure_7));
          tmp29 = closure_5;
          tmp30 = closure_0;
          tmp31 = closure_2;
          set4 = closure_5.set;
          tmp32 = closure_0(closure_2[8]);
          tmp33 = closure_11;
          fn = function n(arg0) {
            let tmp = arg0;
            if (tmp) {
              const withDelay = user(onAddSuggestion[3]).withDelay;
              const tmp5 = user(onAddSuggestion[3]);
              let obj = user(onAddSuggestion[7]);
              const result = set(withDelay(1000, obj.withTiming(0, sharedValue3)));
              const withDelay2 = user(onAddSuggestion[3]).withDelay;
              user(onAddSuggestion[3]);
              const obj2 = user(onAddSuggestion[7]);
              set2.set(withDelay2(1000, obj2.withTiming(0.5, callback)));
              const withDelay3 = user(onAddSuggestion[3]).withDelay;
              user(onAddSuggestion[3]);
              const fn = function n(arg0) {
                const tmp = arg0;
                if (tmp) {
                  const obj = user(onAddSuggestion[3]);
                  obj.runOnJS(finishAnimationCallback)();
                }
              };
              const tmp14 = user(onAddSuggestion[7]);
              const withTiming = tmp14.withTiming;
              fn.__closure = { runOnJS: user(onAddSuggestion[3]).runOnJS, finishAnimationCallback };
              fn.__workletHash = 5242616772399;
              fn.__initData = __initData2;
              obj3 = { runOnJS: user(onAddSuggestion[3]).runOnJS, finishAnimationCallback };
              set3.set.set(withDelay3(1000, withTiming(-8, TRANSLATE_OUT_CONFIG, "respect-motion-settings", fn)));
            }
          };
          obj1 = { opacity: null, withDelay: null, withTiming: null, OPACITY_OUT_CONFIG: null, scale: null, SCALE_CONFIG: null, right: null, TRANSLATE_OUT_CONFIG: null, runOnJS: null, finishAnimationCallback: null };
          obj1.opacity = closure_7;
          tmp34 = closure_0;
          tmp35 = closure_2;
          withSpring = tmp32.withSpring;
          obj1.withDelay = closure_0(closure_2[3]).withDelay;
          tmp36 = closure_0;
          tmp37 = closure_2;
          obj1.withTiming = closure_0(closure_2[7]).withTiming;
          tmp38 = closure_8;
          obj1.OPACITY_OUT_CONFIG = closure_8;
          obj1.scale = closure_6;
          obj1.SCALE_CONFIG = closure_9;
          obj1.right = closure_5;
          tmp39 = closure_10;
          obj1.TRANSLATE_OUT_CONFIG = closure_10;
          tmp40 = closure_0;
          tmp41 = closure_2;
          obj1.runOnJS = closure_0(closure_2[3]).runOnJS;
          tmp42 = closure_9;
          obj1.finishAnimationCallback = closure_9;
          fn.__closure = obj1;
          num7 = 9570116008915;
          fn.__workletHash = 9570116008915;
          tmp43 = closure_17;
          fn.__initData = closure_17;
          str = "respect-motion-settings";
          num8 = 12;
          tmp44 = tmp32;
          tmp45 = fn;
          set4Result = set4(withSpring(12, closure_11, "respect-motion-settings", fn));
        } else {
          tmp7 = closure_8;
          num = 1;
          result1 = closure_8.set(1);
          tmp9 = closure_6;
          num2 = 0.5;
          result2 = closure_6.set(0.5);
          tmp11 = closure_7;
          num3 = 0;
          result3 = closure_7.set(0);
          tmp13 = closure_5;
          num4 = 30;
          result4 = closure_5.set(30);
        }
      } else {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[3]);
        tmp4 = closure_9;
        tmp5 = obj.runOnJS(closure_9)();
      }
      return;
    }
  }
  D.__closure = { animate, runOnJS: user(onAddSuggestion[3]).runOnJS, finishAnimationCallback: SCALE_CONFIG, scale: sharedValue1, withTiming: user(onAddSuggestion[7]).withTiming, SCALE_CONFIG, opacity: sharedValue2, OPACITY_CONFIG: sharedValue2, buttonOpacity: sharedValue3, right: sharedValue, withSpring: user(onAddSuggestion[8]).withSpring, SPRING_CONFIG, withDelay: user(onAddSuggestion[3]).withDelay, OPACITY_OUT_CONFIG: sharedValue3, TRANSLATE_OUT_CONFIG: obj4 };
  D.__workletHash = 6602847520399;
  D.__initData = __initData4;
  ({ animate, runOnJS: user(onAddSuggestion[3]).runOnJS, finishAnimationCallback: SCALE_CONFIG, scale: sharedValue1, withTiming: user(onAddSuggestion[7]).withTiming, SCALE_CONFIG, opacity: sharedValue2, OPACITY_CONFIG: sharedValue2, buttonOpacity: sharedValue3, right: sharedValue, withSpring: user(onAddSuggestion[8]).withSpring, SPRING_CONFIG, withDelay: user(onAddSuggestion[3]).withDelay, OPACITY_OUT_CONFIG: sharedValue3, TRANSLATE_OUT_CONFIG: obj4 });
  const animatedReaction = obj7.useAnimatedReaction(fn2, D);
  const obj9 = { children: items3 };
  const obj10 = { pointerEvents: "none", style: items2, children: sharedValue(Icon, obj11) };
  items2 = [tmp.icon, animatedStyle];
  View = added(onAddSuggestion[3]).View;
  obj11 = { source: added(onAddSuggestion[10]), color: tmp.icon.color };
  Icon = user(onAddSuggestion[9]).Icon;
  items3 = [sharedValue(View, obj10), ];
  const obj12 = { style: animatedStyle1, children: sharedValue(Button, obj13) };
  const View2 = added(onAddSuggestion[3]).View;
  obj13 = { variant: "secondary", size: str, grow: false, text: intl.string(user(onAddSuggestion[12]).t.OYkgVk), onPress: callback1 };
  Button = user(onAddSuggestion[11]).Button;
  intl = user(onAddSuggestion[12]).intl;
  items3[1] = sharedValue(View2, obj12);
  return sharedValue1(animate, obj9);
};
