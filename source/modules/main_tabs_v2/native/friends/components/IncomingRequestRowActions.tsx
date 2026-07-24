// Module ID: 15505
// Function ID: 119298
// Name: IncomingRequestRowActions
// Dependencies: [31, 27, 33, 4130, 3991, 4131, 14959, 4541, 7533, 13877, 10361, 4543, 1212, 4126, 2]
// Exports: IncomingRequestRowActions

// Module 15505 (IncomingRequestRowActions)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ container: { flexDirection: "row" } });
let closure_8 = { code: "function IncomingRequestRowActionsTsx1(){const{animate,pressed,withTiming}=this.__closure;return{position:'absolute',right:0,flexDirection:'row',opacity:!animate?!pressed.get()?1:0:withTiming(!pressed.get()?1:0,{duration:150}),pointerEvents:!pressed.get()?'auto':'none'};}" };
let closure_9 = { code: "function IncomingRequestRowActionsTsx2(){const{buttonWidth,buttonOffsetX,pressed,animate,withTiming}=this.__closure;const width=buttonWidth.get();const offset=buttonOffsetX.get();const scaleX=!pressed.get()?0.5:1;const translateX=!pressed.get()?width-offset:0;return{transform:[{translateX:!animate?translateX:withTiming(translateX)},{scaleX:!animate?scaleX:withTiming(scaleX)}],opacity:!animate?!pressed.get()?0:1:withTiming(!pressed.get()?0:1),pointerEvents:!pressed.get()?'none':'auto'};}" };
let closure_10 = { code: "function IncomingRequestRowActionsTsx3(){const{waveWidth,waveHeight}=this.__closure;return{transform:[{translateX:waveWidth.get()/2},{translateY:waveHeight.get()/2}]};}" };
let closure_11 = { code: "function IncomingRequestRowActionsTsx4(){const{withDelay,withRepeat,withTiming,pressed,Easing,waveWidth,waveHeight}=this.__closure;return{transform:[{rotateZ:withDelay(450,withRepeat(withTiming(pressed.get()?'8deg':'-2deg',{duration:150,easing:Easing.inOut(Easing.quad)}),4,true))},{translateX:-waveWidth.get()/2},{translateY:-waveHeight.get()/2}]};}" };
let closure_12 = { code: "function IncomingRequestRowActionsTsx5(){const{pressed}=this.__closure;return{pointerEvents:!pressed.get()?'none':'none'};}" };
let result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/friends/components/IncomingRequestRowActions.tsx");

export const IncomingRequestRowActions = function IncomingRequestRowActions(user) {
  let acceptRequestAccessibilityLabel;
  let ignoreRequestAccessibilityLabel;
  user = user.user;
  const applicationId = user.applicationId;
  const pressed = user.pressed;
  const onAcceptIncomingRequest = user.onAcceptIncomingRequest;
  const onDeclineIncomingRequest = user.onDeclineIncomingRequest;
  const animate = user.animate;
  ({ acceptRequestAccessibilityLabel, ignoreRequestAccessibilityLabel } = user);
  let obj = user(pressed[4]);
  const sharedValue = obj.useSharedValue(0);
  let obj1 = user(pressed[4]);
  const sharedValue1 = obj1.useSharedValue(-1);
  let obj2 = user(pressed[4]);
  const sharedValue2 = obj2.useSharedValue(-1);
  let obj3 = user(pressed[4]);
  const sharedValue3 = obj3.useSharedValue(-1);
  let obj4 = user(pressed[4]);
  class E {
    constructor() {
      obj = { position: "absolute", right: 0, flexDirection: "row" };
      if (animate) {
        tmp2 = user;
        tmp3 = pressed;
        num2 = 5;
        obj2 = user(pressed[5]);
        tmp4 = pressed;
        num3 = 1;
        if (pressed.get()) {
          num3 = 0;
        }
        obj = {};
        num4 = 150;
        obj.duration = 150;
        num = obj2.withTiming(num3, obj);
      } else {
        tmp = pressed;
        num = 1;
        if (pressed.get()) {
          num = 0;
        }
      }
      obj.opacity = num;
      str = "auto";
      if (pressed.get()) {
        str = "none";
      }
      obj.pointerEvents = str;
      return obj;
    }
  }
  obj = { animate, pressed, withTiming: user(pressed[5]).withTiming };
  E.__closure = obj;
  E.__workletHash = 1291516991185;
  E.__initData = sharedValue2;
  const animatedStyle = obj4.useAnimatedStyle(E);
  let obj6 = user(pressed[4]);
  const fn = function q() {
    let value = sharedValue1.get();
    value = sharedValue.get();
    let num = 0.5;
    if (pressed.get()) {
      num = 1;
    }
    let num2 = 0;
    if (!pressed.get()) {
      num2 = value - value;
    }
    let obj = {};
    obj = {};
    let withTimingResult = num2;
    if (animate) {
      withTimingResult = user(pressed[5]).withTiming(num2);
      const obj3 = user(pressed[5]);
    }
    obj.translateX = withTimingResult;
    const items = [obj, ];
    obj = {};
    let withTimingResult1 = num;
    if (animate) {
      withTimingResult1 = user(pressed[5]).withTiming(num);
      const obj5 = user(pressed[5]);
    }
    obj.scaleX = withTimingResult1;
    items[1] = obj;
    obj.transform = items;
    if (animate) {
      let num7 = 0;
      if (pressed.get()) {
        num7 = 1;
      }
      let num5 = user(pressed[5]).withTiming(num7);
      const obj6 = user(pressed[5]);
    } else {
      num5 = 0;
      if (pressed.get()) {
        num5 = 1;
      }
    }
    obj.opacity = num5;
    let str = "none";
    if (pressed.get()) {
      str = "auto";
    }
    obj.pointerEvents = str;
    return obj;
  };
  obj = { buttonWidth: sharedValue1, buttonOffsetX: sharedValue, pressed, animate, withTiming: user(pressed[5]).withTiming };
  fn.__closure = obj;
  fn.__workletHash = 2207673076655;
  fn.__initData = sharedValue3;
  const animatedStyle1 = obj6.useAnimatedStyle(fn);
  let obj8 = user(pressed[4]);
  const fn2 = function x() {
    let obj = {};
    obj = { translateX: sharedValue2.get() / 2 };
    const items = [obj, ];
    obj = { translateY: sharedValue3.get() / 2 };
    items[1] = obj;
    obj.transform = items;
    return obj;
  };
  fn2.__closure = { waveWidth: sharedValue2, waveHeight: sharedValue3 };
  fn2.__workletHash = 4308223742756;
  fn2.__initData = closure_10;
  const animatedStyle2 = obj8.useAnimatedStyle(fn2);
  let obj9 = user(pressed[4]);
  class A {
    constructor() {
      obj = {};
      obj = {};
      obj3 = user(pressed[4]);
      obj4 = user(pressed[4]);
      obj5 = user(pressed[5]);
      str = "-2deg";
      if (pressed.get()) {
        str = "8deg";
      }
      obj1 = { duration: 150 };
      Easing = user(pressed[4]).Easing;
      obj1.easing = Easing.inOut(user(pressed[4]).Easing.quad);
      obj.rotateZ = obj3.withDelay(450, obj4.withRepeat(obj5.withTiming(str, obj1), 4, true));
      items = [, , ];
      items[0] = obj;
      obj2 = { translateX: -closure_8.get() / 2 };
      items[1] = obj2;
      obj3 = { translateY: -closure_9.get() / 2 };
      items[2] = obj3;
      obj.transform = items;
      return obj;
    }
  }
  obj1 = { withDelay: user(pressed[4]).withDelay, withRepeat: user(pressed[4]).withRepeat, withTiming: user(pressed[5]).withTiming, pressed, Easing: user(pressed[4]).Easing, waveWidth: sharedValue2, waveHeight: sharedValue3 };
  A.__closure = obj1;
  A.__workletHash = 6870822621980;
  A.__initData = closure_11;
  const animatedStyle3 = obj9.useAnimatedStyle(A);
  const tmp = sharedValue1();
  class X {
    constructor() {
      obj = {};
      value = pressed.get();
      obj.pointerEvents = "none";
      return obj;
    }
  }
  X.__closure = { pressed };
  X.__workletHash = 5804402563280;
  X.__initData = closure_12;
  const animatedProps = user(pressed[4]).useAnimatedProps(X);
  let items = [applicationId, onAcceptIncomingRequest, pressed, user];
  const items1 = [applicationId, onDeclineIncomingRequest, user];
  const callback = onAcceptIncomingRequest.useCallback(() => {
    const result = pressed.set(true);
    let obj = user(pressed[6]);
    obj = { userId: user.id, applicationId };
    const result1 = obj.acceptIncomingRequest(obj);
    onAcceptIncomingRequest(user.id, applicationId);
  }, items);
  const items2 = [user];
  const callback1 = onAcceptIncomingRequest.useCallback(() => {
    onDeclineIncomingRequest(user.id, applicationId);
    let obj = user(pressed[6]);
    obj = { userId: user.id, applicationId };
    const result = obj.dismissIncomingRequest(obj);
  }, items1);
  obj2 = { style: tmp.container };
  const callback2 = onAcceptIncomingRequest.useCallback(() => {
    user(pressed[6]).sendWave(user.id, true, "Incoming Friend Request");
  }, items2);
  obj3 = {
    onLayout(nativeEvent) {
      const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
    },
    style: animatedStyle
  };
  obj4 = { direction: "horizontal", spacing: 8 };
  let obj5 = { size: "sm", variant: "tertiary", icon: applicationId(pressed[9]), onPress: callback1, accessibilityLabel: ignoreRequestAccessibilityLabel, maxFontSizeMultiplier: 2 };
  const items3 = [animate(user(pressed[8]).IconButton, obj5), ];
  obj6 = { size: "sm", variant: "active", icon: applicationId(pressed[10]), onPress: callback, accessibilityLabel: acceptRequestAccessibilityLabel, maxFontSizeMultiplier: 2 };
  items3[1] = animate(user(pressed[8]).IconButton, obj6);
  obj4.children = items3;
  obj3.children = sharedValue(user(pressed[7]).Stack, obj4);
  const items4 = [animate(applicationId(pressed[4]).View, obj3), ];
  const obj7 = {
    style: animatedStyle1,
    onLayout(nativeEvent) {
      const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
    }
  };
  const merged = Object.assign(animatedProps);
  obj8 = { size: "sm", variant: "secondary" };
  const intl = user(pressed[12]).intl;
  obj8.text = intl.string(user(pressed[12]).t.n8nU4W);
  obj9 = { style: null, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
  let tmp18 = null;
  if (animate) {
    tmp18 = animatedStyle2;
  }
  obj9.style = tmp18;
  const obj10 = {};
  let tmp20 = null;
  if (animate) {
    tmp20 = animatedStyle3;
  }
  obj10.style = tmp20;
  obj10.onLayout = function onLayout(nativeEvent) {
    const result = sharedValue2.set(nativeEvent.nativeEvent.layout.width);
    const result1 = sharedValue3.set(nativeEvent.nativeEvent.layout.height);
  };
  obj10.children = animate(user(pressed[13]).Text, { maxFontSizeMultiplier: 2, variant: "text-sm/normal", children: "\u{1F44B}" });
  obj9.children = animate(applicationId(pressed[4]).View, obj10);
  obj8.icon = animate(applicationId(pressed[4]).View, obj9);
  obj8.onPress = callback2;
  obj7["children"] = animate(user(pressed[11]).Button, obj8);
  items4[1] = animate(applicationId(pressed[4]).View, obj7);
  obj2.children = items4;
  return sharedValue(onDeclineIncomingRequest, obj2);
};
