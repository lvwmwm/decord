// Module ID: 16589
// Function ID: 16590
// Name: IncomingRequestRowActions
// Dependencies: [19, 17, 21, 4836, 4566, 4837, 15677, 5279, 7363, 14459, 8810, 5281, 1115, 4832, 2]
// Exports: IncomingRequestRowActions

// Module 16589 (IncomingRequestRowActions)
import react_native from "react-native" /* 17 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import timing from "timing" /* 4837 */;
import AddFriendsScreenUtils from "AddFriendsScreenUtils" /* 15677 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row" } });
let closure_8 = { code: "function IncomingRequestRowActionsTsx1(){const{animate,pressed,withTiming}=this.__closure;return{position:'absolute',right:0,flexDirection:'row',opacity:!animate?!pressed.get()?1:0:withTiming(!pressed.get()?1:0,{duration:150}),pointerEvents:!pressed.get()?'auto':'none'};}" };
let closure_9 = { code: "function IncomingRequestRowActionsTsx2(){const{buttonWidth,buttonOffsetX,pressed,animate,withTiming}=this.__closure;const width=buttonWidth.get();const offset=buttonOffsetX.get();const scaleX=!pressed.get()?0.5:1;const translateX=!pressed.get()?width-offset:0;return{transform:[{translateX:!animate?translateX:withTiming(translateX)},{scaleX:!animate?scaleX:withTiming(scaleX)}],opacity:!animate?!pressed.get()?0:1:withTiming(!pressed.get()?0:1),pointerEvents:!pressed.get()?'none':'auto'};}" };
const __initData = { code: "function IncomingRequestRowActionsTsx3(){const{waveWidth,waveHeight}=this.__closure;return{transform:[{translateX:waveWidth.get()/2},{translateY:waveHeight.get()/2}]};}" };
const __initData2 = { code: "function IncomingRequestRowActionsTsx4(){const{withDelay,withRepeat,withTiming,pressed,Easing,waveWidth,waveHeight}=this.__closure;return{transform:[{rotateZ:withDelay(450,withRepeat(withTiming(pressed.get()?'8deg':'-2deg',{duration:150,easing:Easing.inOut(Easing.quad)}),4,true))},{translateX:-waveWidth.get()/2},{translateY:-waveHeight.get()/2}]};}" };
const __initData3 = { code: "function IncomingRequestRowActionsTsx5(){const{pressed}=this.__closure;return{pointerEvents:!pressed.get()?'none':'none'};}" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/IncomingRequestRowActions.tsx");

export const IncomingRequestRowActions = function IncomingRequestRowActions(user) {
  let Button;
  let Stack;
  let View3;
  let View4;
  let acceptRequestAccessibilityLabel;
  let ignoreRequestAccessibilityLabel;
  let intl;
  let items3;
  let items4;
  let obj15;
  let obj19;
  let obj20;
  let obj21;
  user = user.user;
  const applicationId = user.applicationId;
  const pressed = user.pressed;
  const onAcceptIncomingRequest = user.onAcceptIncomingRequest;
  const onDeclineIncomingRequest = user.onDeclineIncomingRequest;
  const animate = user.animate;
  let sharedValue1;
  ({ acceptRequestAccessibilityLabel, ignoreRequestAccessibilityLabel } = user);
  const tmp3 = pressed;
  let tmp = sharedValue1();
  let obj = user(pressed[4]);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = user(pressed[4]);
  sharedValue1 = obj2.useSharedValue(-1);
  let obj3 = user(pressed[4]);
  const sharedValue2 = obj3.useSharedValue(-1);
  let obj4 = user(pressed[4]);
  const sharedValue3 = obj4.useSharedValue(-1);
  const obj5 = user(pressed[4]);
  const tmp2 = user;
  class E {
    constructor() {
      let num;
      let obj;
      let str;
      const tmp = animate;
      if (tmp) {
        const withTiming = timing.withTiming;
        let num2 = 1;
        timing;
        const tmp5 = pressed;
        if (pressed.get()) {
          num2 = 0;
        }
        num = withTiming(num2, { duration: 150 });
        obj = tmp5;
      } else {
        obj = pressed;
        num = 1;
        if (pressed.get()) {
          num = 0;
        }
      }
      const obj2 = { position: "absolute", right: 0, flexDirection: "row", opacity: num, pointerEvents: str };
      str = "auto";
      if (obj.get()) {
        str = "none";
      }
      return obj2;
    }
  }
  E.__closure = { animate, pressed, withTiming: user(pressed[5]).withTiming };
  E.__workletHash = 1291516991185;
  E.__initData = sharedValue2;
  ({ animate, pressed, withTiming: user(pressed[5]).withTiming });
  const animatedStyle = obj5.useAnimatedStyle(E);
  const fn = function q() {
    let num3;
    let str;
    const value = sharedValue1.get();
    const value2 = sharedValue.get();
    let num = 0.5;
    if (pressed.get()) {
      num = 1;
    }
    let num2 = 0;
    if (!pressed.get()) {
      num2 = value - value2;
    }
    let withTimingResult = num2;
    if (animate) {
      const obj2 = timing;
      withTimingResult = obj2.withTiming(num2);
    }
    const items = [{ translateX: withTimingResult }, ];
    let withTimingResult1 = num;
    if (animate) {
      const obj3 = timing;
      withTimingResult1 = obj3.withTiming(num);
    }
    const obj4 = { transform: items, opacity: num3, pointerEvents: str };
    items[1] = { scaleX: withTimingResult1 };
    if (animate) {
      const withTiming = timing.withTiming;
      let num4 = 0;
      timing;
      if (pressed.get()) {
        num4 = 1;
      }
      num3 = withTiming(num4);
    } else {
      num3 = 0;
      if (pressed.get()) {
        num3 = 1;
      }
    }
    str = "none";
    if (pressed.get()) {
      str = "auto";
    }
    return obj4;
  };
  const obj7 = user(pressed[4]);
  fn.__closure = { buttonWidth: sharedValue1, buttonOffsetX: sharedValue, pressed, animate, withTiming: user(pressed[5]).withTiming };
  fn.__workletHash = 2207673076655;
  fn.__initData = sharedValue3;
  ({ buttonWidth: sharedValue1, buttonOffsetX: sharedValue, pressed, animate, withTiming: user(pressed[5]).withTiming });
  const animatedStyle1 = obj7.useAnimatedStyle(fn);
  const fn2 = function x() {
    let items;
    const obj = { transform: items };
    items = [{ translateX: sharedValue2.get() / 2 }, ];
    ({ translateX: sharedValue2.get() / 2 });
    items[1] = { translateY: sharedValue3.get() / 2 };
    ({ translateY: sharedValue3.get() / 2 });
    return obj;
  };
  fn2.__closure = { waveWidth: sharedValue2, waveHeight: sharedValue3 };
  fn2.__workletHash = 4308223742756;
  fn2.__initData = __initData;
  const obj9 = user(pressed[4]);
  const animatedStyle2 = obj9.useAnimatedStyle(fn2);
  const obj10 = user(pressed[4]);
  class A {
    constructor() {
      let Easing;
      let items;
      let obj3;
      const withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      const withTiming = timing.withTiming;
      let str = "-2deg";
      timing;
      if (pressed.get()) {
        str = "8deg";
      }
      const obj = { transform: items };
      const obj2 = { rotateZ: withDelay(450, withRepeat(withTiming(str, obj3), 4, true)) };
      obj3 = { duration: 150, easing: Easing.inOut(ReanimatedRexport.Easing.quad) };
      Easing = tmp(4566).Easing;
      items = [obj2, { translateX: -sharedValue2.get() / 2 }, ];
      ({ translateX: -sharedValue2.get() / 2 });
      items[2] = { translateY: -sharedValue3.get() / 2 };
      ({ translateY: -sharedValue3.get() / 2 });
      return obj;
    }
  }
  A.__closure = { withDelay: user(pressed[4]).withDelay, withRepeat: user(pressed[4]).withRepeat, withTiming: user(pressed[5]).withTiming, pressed, Easing: user(pressed[4]).Easing, waveWidth: sharedValue2, waveHeight: sharedValue3 };
  A.__workletHash = 6870822621980;
  A.__initData = __initData2;
  ({ withDelay: user(pressed[4]).withDelay, withRepeat: user(pressed[4]).withRepeat, withTiming: user(pressed[5]).withTiming, pressed, Easing: user(pressed[4]).Easing, waveWidth: sharedValue2, waveHeight: sharedValue3 });
  const animatedStyle3 = obj10.useAnimatedStyle(A);
  const obj12 = user(pressed[4]);
  class X {
    constructor() {
      const value = pressed.get();
      return { pointerEvents: "none" };
    }
  }
  X.__closure = { pressed };
  X.__workletHash = 5804402563280;
  X.__initData = __initData3;
  const animatedProps = obj12.useAnimatedProps(X);
  let items = [applicationId, onAcceptIncomingRequest, pressed, user];
  const items1 = [applicationId, onDeclineIncomingRequest, user];
  const callback = onAcceptIncomingRequest.useCallback(() => {
    const result = pressed.set(true);
    const obj = AddFriendsScreenUtils;
    const obj2 = { userId: user.id, applicationId };
    const result1 = obj.acceptIncomingRequest(obj2);
    onAcceptIncomingRequest(user.id, applicationId);
  }, items);
  const items2 = [user];
  const callback1 = onAcceptIncomingRequest.useCallback(() => {
    onDeclineIncomingRequest(user.id, applicationId);
    const obj = AddFriendsScreenUtils;
    const obj2 = { userId: user.id, applicationId };
    const result = obj.dismissIncomingRequest(obj2);
  }, items1);
  const obj13 = { style: tmp.container, children: items4 };
  const callback2 = onAcceptIncomingRequest.useCallback(() => {
    const obj = AddFriendsScreenUtils;
    obj.sendWave(user.id, true, "Incoming Friend Request");
  }, items2);
  const obj14 = {
    onLayout(nativeEvent) {
      const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
    },
    style: animatedStyle,
    children: sharedValue(Stack, obj15)
  };
  View = applicationId(pressed[4]).View;
  obj15 = { direction: "horizontal", spacing: 8, children: items3 };
  Stack = user(pressed[7]).Stack;
  const obj16 = { size: "sm", variant: "tertiary", icon: applicationId(pressed[9]), onPress: callback1, accessibilityLabel: ignoreRequestAccessibilityLabel, maxFontSizeMultiplier: 2 };
  const IconButton = user(pressed[8]).IconButton;
  items3 = [animate(IconButton, obj16), ];
  const obj17 = { size: "sm", variant: "active", icon: applicationId(pressed[10]), onPress: callback, accessibilityLabel: acceptRequestAccessibilityLabel, maxFontSizeMultiplier: 2 };
  const IconButton2 = user(pressed[8]).IconButton;
  items3[1] = animate(IconButton2, obj17);
  items4 = [animate(View, obj14), ];
  const obj18 = {
    style: animatedStyle1,
    onLayout(nativeEvent) {
      const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
    },
    children: animate(Button, obj19)
  };
  const View2 = applicationId(pressed[4]).View;
  const merged = Object.assign(animatedProps);
  obj19 = { size: "sm", variant: "secondary", text: intl.string(user(pressed[12]).t.n8nU4W), icon: animate(View3, obj20), onPress: callback2 };
  Button = user(pressed[11]).Button;
  intl = user(pressed[12]).intl;
  let tmp21 = null;
  View3 = applicationId(pressed[4]).View;
  const tmp16 = sharedValue;
  const tmp17 = onDeclineIncomingRequest;
  const tmp19 = applicationId;
  if (animate) {
    tmp21 = animatedStyle2;
  }
  let tmp22 = null;
  obj20 = { style: tmp21, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: animate(View4, obj21) };
  View4 = tmp19(tmp3[4]).View;
  if (animate) {
    tmp22 = animatedStyle3;
  }
  obj21 = {
    style: tmp22,
    onLayout(nativeEvent) {
      const result = sharedValue2.set(nativeEvent.nativeEvent.layout.width);
      const result1 = sharedValue3.set(nativeEvent.nativeEvent.layout.height);
    },
    children: animate(tmp2(tmp3[13]).Text, { maxFontSizeMultiplier: 2, variant: "text-sm/normal", children: "\u{1F44B}" })
  };
  items4[1] = animate(View2, obj18);
  return tmp16(tmp17, obj13);
};
