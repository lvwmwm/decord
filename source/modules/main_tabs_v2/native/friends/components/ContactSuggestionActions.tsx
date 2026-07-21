// Module ID: 15044
// Function ID: 113254
// Name: ContactSuggestionActions
// Dependencies: []
// Exports: ContactSuggestionActions

// Module 15044 (ContactSuggestionActions)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = { duration: 200 };
const Easing = arg1(dependencyMap[3]).Easing;
obj.easing = Easing.in(arg1(dependencyMap[3]).Easing.quad);
obj = { duration: 250 };
const Easing2 = arg1(dependencyMap[3]).Easing;
obj.easing = Easing2.in(arg1(dependencyMap[3]).Easing.quad);
obj = { duration: 250 };
const Easing3 = arg1(dependencyMap[3]).Easing;
obj.easing = Easing3.in(arg1(dependencyMap[3]).Easing.quad);
const obj1 = { duration: 250 };
const Easing4 = arg1(dependencyMap[3]).Easing;
obj1.easing = Easing4.out(arg1(dependencyMap[3]).Easing.quad);
let closure_11 = { containerRefresh: -1825505279, HomeDrawerStateContext: -2051735970, tierPill: 1363145734 };
const tmp2 = arg1(dependencyMap[2]);
const obj2 = {};
const obj5 = arg1(dependencyMap[4]);
obj2.icon = { color: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_DEFAULT };
let closure_12 = obj5.createStyles(obj2);
let closure_13 = { code: "function ContactSuggestionActionsTsx1(){const{right,opacity,scale}=this.__closure;return{right:right.get(),opacity:opacity.get(),transform:[{scale:scale.get()}]};}" };
let closure_14 = { code: "function ContactSuggestionActionsTsx2(){const{buttonOpacity}=this.__closure;return{opacity:buttonOpacity.get()};}" };
let closure_15 = { code: "function ContactSuggestionActionsTsx3(){const{added}=this.__closure;return added.get();}" };
let closure_16 = { code: "function ContactSuggestionActionsTsx4(added){const{animate,runOnJS,finishAnimationCallback,scale,withTiming,SCALE_CONFIG,opacity,OPACITY_CONFIG,buttonOpacity,right,withSpring,SPRING_CONFIG,withDelay,OPACITY_OUT_CONFIG,TRANSLATE_OUT_CONFIG}=this.__closure;if(!animate){runOnJS(finishAnimationCallback)();return;}if(added){scale.set(withTiming(1,SCALE_CONFIG));opacity.set(withTiming(1,OPACITY_CONFIG));buttonOpacity.set(withTiming(0,OPACITY_CONFIG));right.set(withSpring(12,SPRING_CONFIG,'respect-motion-settings',function(finished){if(!finished)return;opacity.set(withDelay(1000,withTiming(0,OPACITY_OUT_CONFIG)));scale.set(withDelay(1000,withTiming(0.5,SCALE_CONFIG)));right.set(withDelay(1000,withTiming(-8,TRANSLATE_OUT_CONFIG,'respect-motion-settings',function(finished){if(finished)runOnJS(finishAnimationCallback)();})));}));}else{buttonOpacity.set(1);scale.set(0.5);opacity.set(0);right.set(30);}}" };
let closure_17 = { code: "function ContactSuggestionActionsTsx5(finished){const{opacity,withDelay,withTiming,OPACITY_OUT_CONFIG,scale,SCALE_CONFIG,right,TRANSLATE_OUT_CONFIG,runOnJS,finishAnimationCallback}=this.__closure;if(!finished)return;opacity.set(withDelay(1000,withTiming(0,OPACITY_OUT_CONFIG)));scale.set(withDelay(1000,withTiming(0.5,SCALE_CONFIG)));right.set(withDelay(1000,withTiming(-8,TRANSLATE_OUT_CONFIG,'respect-motion-settings',function(finished){if(finished)runOnJS(finishAnimationCallback)();})));}" };
let closure_18 = { code: "function ContactSuggestionActionsTsx6(finished){const{runOnJS,finishAnimationCallback}=this.__closure;if(finished)runOnJS(finishAnimationCallback)();}" };
const obj3 = { color: importDefault(dependencyMap[5]).colors.INTERACTIVE_TEXT_DEFAULT };
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ContactSuggestionActions.tsx");

export const ContactSuggestionActions = function ContactSuggestionActions(user) {
  user = user.user;
  const arg1 = user;
  const added = user.added;
  const importDefault = added;
  const onAddSuggestion = user.onAddSuggestion;
  const dependencyMap = onAddSuggestion;
  const onFinishAnimation = user.onFinishAnimation;
  const React = onFinishAnimation;
  let str = user.size;
  if (str === undefined) {
    str = "sm";
  }
  const animate = user.animate;
  const View = animate;
  let sharedValue;
  let sharedValue1;
  let obj;
  obj = undefined;
  obj = undefined;
  const tmp = callback();
  obj = arg1(dependencyMap[3]);
  sharedValue = obj.useSharedValue(30);
  let obj1 = arg1(dependencyMap[3]);
  sharedValue1 = obj1.useSharedValue(0.5);
  let obj2 = arg1(dependencyMap[3]);
  const sharedValue2 = obj2.useSharedValue(0);
  obj = sharedValue2;
  let obj3 = arg1(dependencyMap[3]);
  const sharedValue3 = obj3.useSharedValue(1);
  obj = sharedValue3;
  const items = [onFinishAnimation, user];
  const callback = React.useCallback(() => {
    if (null != onFinishAnimation) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        callback(closure_0);
      }, 1000);
    }
  }, items);
  obj = callback;
  let obj4 = arg1(dependencyMap[3]);
  const fn = function b() {
    let obj = { right: sharedValue.get(), opacity: sharedValue2.get() };
    obj = { scale: sharedValue1.get() };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { right: sharedValue, opacity: sharedValue2, scale: sharedValue1 };
  fn.__workletHash = 13774422449074;
  fn.__initData = closure_13;
  const animatedStyle = obj4.useAnimatedStyle(fn);
  class E {
    constructor() {
      obj = { opacity: closure_8.get() };
      return obj;
    }
  }
  E.__closure = { buttonOpacity: sharedValue3 };
  E.__workletHash = 4378005846847;
  E.__initData = closure_14;
  const items1 = [onAddSuggestion, user, added, animate, sharedValue, sharedValue2, sharedValue1, sharedValue3];
  const animatedStyle1 = arg1(dependencyMap[3]).useAnimatedStyle(E);
  const callback1 = React.useCallback(() => {
    user(onAddSuggestion[6]).addContactSuggestion(user);
    onAddSuggestion(user);
    const result = added.set(true);
    if (!animate) {
      const result1 = sharedValue.set(12);
      const result2 = sharedValue2.set(1);
      const result3 = sharedValue1.set(1);
      const result4 = sharedValue3.set(0);
    }
  }, items1);
  const obj6 = arg1(dependencyMap[3]);
  const fn2 = function k() {
    return added.get();
  };
  fn2.__closure = { added };
  fn2.__workletHash = 15816115253403;
  fn2.__initData = closure_15;
  class D {
    constructor(arg0) {
      if (animate) {
        tmp5 = user;
        if (user) {
          tmp14 = closure_6;
          tmp15 = user;
          tmp16 = onAddSuggestion;
          num6 = 7;
          obj2 = user(onAddSuggestion[7]);
          tmp17 = closure_9;
          num7 = 1;
          result = closure_6.set(obj2.withTiming(1, closure_9));
          tmp19 = closure_7;
          obj3 = user(onAddSuggestion[7]);
          tmp20 = closure_7;
          result1 = closure_7.set(obj3.withTiming(1, closure_7));
          tmp22 = closure_8;
          obj4 = user(onAddSuggestion[7]);
          num8 = 0;
          result2 = closure_8.set(obj4.withTiming(0, closure_7));
          tmp24 = closure_5;
          num9 = 8;
          obj5 = user(onAddSuggestion[8]);
          tmp25 = closure_11;
          fn = function n(arg0) {
            if (arg0) {
              let obj = callback(closure_2[3]);
              const result = closure_7.set(obj.withDelay(1000, callback(closure_2[7]).withTiming(0, closure_8)));
              const obj2 = callback(closure_2[7]);
              const obj3 = callback(closure_2[3]);
              const result1 = closure_6.set(obj3.withDelay(1000, callback(closure_2[7]).withTiming(0.5, closure_9)));
              const obj4 = callback(closure_2[7]);
              const obj6 = callback(closure_2[7]);
              const fn = function n(arg0) {
                if (arg0) {
                  callback(closure_2[3]).runOnJS(closure_9)();
                  const obj = callback(closure_2[3]);
                }
              };
              obj = { runOnJS: callback(closure_2[3]).runOnJS, finishAnimationCallback: closure_9 };
              fn.__closure = obj;
              fn.__workletHash = 5242616772399;
              fn.__initData = closure_18;
              const result2 = closure_5.set(callback(closure_2[3]).withDelay(1000, obj6.withTiming(-8, closure_10, "respect-motion-settings", fn)));
              const obj5 = callback(closure_2[3]);
            }
          };
          obj = {};
          tmp26 = closure_7;
          obj.opacity = closure_7;
          num10 = 3;
          obj.withDelay = user(onAddSuggestion[3]).withDelay;
          obj.withTiming = user(onAddSuggestion[7]).withTiming;
          tmp27 = closure_8;
          obj.OPACITY_OUT_CONFIG = closure_8;
          tmp28 = closure_6;
          obj.scale = closure_6;
          obj.SCALE_CONFIG = closure_9;
          tmp29 = closure_5;
          obj.right = closure_5;
          tmp30 = closure_10;
          obj.TRANSLATE_OUT_CONFIG = closure_10;
          obj.runOnJS = user(onAddSuggestion[3]).runOnJS;
          tmp31 = closure_9;
          obj.finishAnimationCallback = closure_9;
          fn.__closure = obj;
          num11 = 9570116008915;
          fn.__workletHash = 9570116008915;
          tmp32 = closure_17;
          fn.__initData = closure_17;
          num12 = 12;
          str = "respect-motion-settings";
          tmp33 = obj5;
          tmp34 = fn;
          result3 = closure_5.set(obj5.withSpring(12, closure_11, "respect-motion-settings", fn));
        } else {
          tmp6 = closure_8;
          num2 = 1;
          result4 = closure_8.set(1);
          tmp8 = closure_6;
          num3 = 0.5;
          result5 = closure_6.set(0.5);
          tmp10 = closure_7;
          num4 = 0;
          result6 = closure_7.set(0);
          tmp12 = closure_5;
          num5 = 30;
          result7 = closure_5.set(30);
        }
      } else {
        tmp = user;
        tmp2 = onAddSuggestion;
        num = 3;
        obj = user(onAddSuggestion[3]);
        tmp3 = closure_9;
        tmp4 = obj.runOnJS(closure_9)();
      }
      return;
    }
  }
  obj = { animate, runOnJS: arg1(dependencyMap[3]).runOnJS, finishAnimationCallback: callback, scale: sharedValue1, withTiming: arg1(dependencyMap[7]).withTiming, SCALE_CONFIG: obj, opacity: sharedValue2, OPACITY_CONFIG: obj, buttonOpacity: sharedValue3, right: sharedValue, withSpring: arg1(dependencyMap[8]).withSpring, SPRING_CONFIG: closure_11, withDelay: arg1(dependencyMap[3]).withDelay, OPACITY_OUT_CONFIG: obj, TRANSLATE_OUT_CONFIG: obj1 };
  D.__closure = obj;
  D.__workletHash = 6602847520399;
  D.__initData = closure_16;
  const animatedReaction = arg1(dependencyMap[3]).useAnimatedReaction(fn2, D);
  obj = {};
  obj1 = { pointerEvents: "none", style: items2 };
  const items2 = [tmp.icon, animatedStyle];
  obj2 = { source: importDefault(dependencyMap[10]), color: tmp.icon.color };
  obj1.children = sharedValue(arg1(dependencyMap[9]).Icon, obj2);
  const items3 = [sharedValue(importDefault(dependencyMap[3]).View, obj1), ];
  obj3 = { style: animatedStyle1 };
  obj4 = { 9223372036854775807: true, -9223372036854775808: true, 0: true, size: str };
  const intl = arg1(dependencyMap[12]).intl;
  obj4.text = intl.string(arg1(dependencyMap[12]).t.OYkgVk);
  obj4.onPress = callback1;
  obj3.children = sharedValue(arg1(dependencyMap[11]).Button, obj4);
  items3[1] = sharedValue(importDefault(dependencyMap[3]).View, obj3);
  obj.children = items3;
  return sharedValue1(View, obj);
};
