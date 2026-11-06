// Module ID: 19139
// Function ID: 19140
// Name: IncomingRequestRowActions
// Dependencies: [19, 17, 21, 5170, 1652, 5400, 18378, 6185, 8119, 17088, 15350, 5788, 1113, 5781, 2]
// Exports: IncomingRequestRowActions

// Module 19139 (IncomingRequestRowActions)
import react_native from "react-native" /* 17 */;
import AddFriendsScreenUtils from "AddFriendsScreenUtils" /* 18378 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ container: { flexDirection: "row" } });
let closure_8 = { code: "(function IncomingRequestRowActionsTsx1(){let[animate,pressed,withTiming]=this.__closure;return{position:'absolute',right:0,flexDirection:'row',opacity:!animate?!pressed.get()?1:0:withTiming(!pressed.get()?1:0,{duration:150}),pointerEvents:!pressed.get()?'auto':'none'};})" };
let closure_9 = { code: "(function IncomingRequestRowActionsTsx2(){let[buttonWidth,buttonOffsetX,pressed,animate,withTiming]=this.__closure;const width=buttonWidth.get();const offset=buttonOffsetX.get();const scaleX=!pressed.get()?0.5:1;const translateX=!pressed.get()?width-offset:0;return{transform:[{translateX:!animate?translateX:withTiming(translateX)},{scaleX:!animate?scaleX:withTiming(scaleX)}],opacity:!animate?!pressed.get()?0:1:withTiming(!pressed.get()?0:1),pointerEvents:!pressed.get()?'none':'auto'};})" };
let closure_10 = { code: "(function IncomingRequestRowActionsTsx3(){let[waveWidth,waveHeight]=this.__closure;return{transform:[{translateX:waveWidth.get()/2},{translateY:waveHeight.get()/2}]};})" };
let closure_11 = { code: "(function IncomingRequestRowActionsTsx4(){let[withDelay,withRepeat,withTiming,pressed,Easing,waveWidth,waveHeight]=this.__closure;return{transform:[{rotateZ:withDelay(450,withRepeat(withTiming(pressed.get()?'8deg':'-2deg',{duration:150,easing:Easing.inOut(Easing.quad)}),4,true))},{translateX:-waveWidth.get()/2},{translateY:-waveHeight.get()/2}]};})" };
let closure_12 = { code: "(function IncomingRequestRowActionsTsx5(){let[pressed]=this.__closure;return{pointerEvents:!pressed.get()?'none':'none'};})" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/IncomingRequestRowActions.tsx");

export function IncomingRequestRowActions(user) {
  let Button;
  let Stack;
  let View3;
  let View4;
  let acceptRequestAccessibilityLabel;
  let ignoreRequestAccessibilityLabel;
  let intl;
  let items13;
  let items14;
  let obj11;
  let obj12;
  let obj13;
  let obj7;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp36;
  let tmp37;
  let tmp9;
  user = user.user;
  const applicationId = user.applicationId;
  const pressed = user.pressed;
  const onAcceptIncomingRequest = user.onAcceptIncomingRequest;
  const onDeclineIncomingRequest = user.onDeclineIncomingRequest;
  const animate = user.animate;
  let sharedValue2;
  ({ acceptRequestAccessibilityLabel, ignoreRequestAccessibilityLabel } = user);
  let tmp2 = user;
  let tmp3 = pressed;
  let tmp = sharedValue2();
  let obj = user(pressed[4]);
  const sharedValue = obj.useSharedValue(0);
  let obj2 = user(pressed[4]);
  const sharedValue1 = obj2.useSharedValue(-1);
  let obj3 = user(pressed[4]);
  sharedValue2 = obj3.useSharedValue(-1);
  const obj4 = user(pressed[4]);
  const sharedValue3 = obj4.useSharedValue(-1);
  let tmp8 = user(pressed[4]);
  let items = [sharedValue3, animate, pressed, ];
  const useAnimatedStyle = tmp8.useAnimatedStyle;
  items[3] = user(pressed[5]).withTiming;
  let c0;
  let c1;
  let c2;
  [tmp9, tmp10, tmp11, tmp12] = items;
  class IncomingRequestRowActionsTsx1 {
    constructor() {
      let num;
      let obj;
      let str;
      const tmp = c0;
      if (tmp) {
        let num2 = 1;
        const tmp2 = c2;
        const tmp3 = _undefined;
        if (_undefined.get()) {
          num2 = 0;
        }
        num = tmp2(num2, { duration: 150 });
        obj = tmp3;
      } else {
        obj = _undefined;
        num = 1;
        if (_undefined.get()) {
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
  const items1 = [tmp10, tmp11, tmp12];
  IncomingRequestRowActionsTsx1.__closure = items1;
  IncomingRequestRowActionsTsx1.__workletHash = 92597612104;
  IncomingRequestRowActionsTsx1.__initData = tmp9;
  const animatedStyle = useAnimatedStyle(IncomingRequestRowActionsTsx1);
  const items2 = [closure_9, sharedValue1, sharedValue, pressed, animate, ];
  const useAnimatedStyle2 = tmp2(tmp3[4]).useAnimatedStyle;
  tmp2(tmp3[4]);
  items2[5] = tmp2(tmp3[5]).withTiming;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  let c3;
  let c4;
  [tmp15, tmp16, tmp17, tmp18, tmp19, tmp20] = items2;
  class IncomingRequestRowActionsTsx2 {
    constructor() {
      let num3;
      let str;
      const value = _undefined.get();
      const value2 = _undefined2.get();
      let num = 0.5;
      if (_undefined3.get()) {
        num = 1;
      }
      let num2 = 0;
      if (!_undefined3.get()) {
        num2 = value - value2;
      }
      let tmp4 = num2;
      if (c3) {
        tmp4 = _undefined4(num2);
      }
      const items = [{ translateX: tmp4 }, ];
      let tmp6 = num;
      if (c3) {
        tmp6 = _undefined4(num);
      }
      const obj2 = { transform: items, opacity: num3, pointerEvents: str };
      items[1] = { scaleX: tmp6 };
      if (c3) {
        let num4 = 0;
        const tmp8 = _undefined4;
        if (_undefined3.get()) {
          num4 = 1;
        }
        num3 = tmp8(num4);
      } else {
        num3 = 0;
        if (_undefined3.get()) {
          num3 = 1;
        }
      }
      str = "none";
      if (_undefined3.get()) {
        str = "auto";
      }
      return obj2;
    }
  }
  const items3 = [tmp16, tmp17, tmp18, tmp19, tmp20];
  IncomingRequestRowActionsTsx2.__closure = items3;
  IncomingRequestRowActionsTsx2.__workletHash = 2238045380054;
  IncomingRequestRowActionsTsx2.__initData = tmp15;
  const animatedStyle2 = useAnimatedStyle2(IncomingRequestRowActionsTsx2);
  const items4 = [closure_10, sharedValue2, sharedValue3];
  c0 = undefined;
  c1 = undefined;
  [tmp22, tmp23, tmp24] = items4;
  const tmp2Result4 = tmp2(tmp3[4]);
  class IncomingRequestRowActionsTsx3 {
    constructor() {
      let items;
      const obj = { transform: items };
      items = [{ translateX: _undefined.get() / 2 }, ];
      ({ translateX: _undefined.get() / 2 });
      items[1] = { translateY: _undefined2.get() / 2 };
      ({ translateY: _undefined2.get() / 2 });
      return obj;
    }
  }
  const items5 = [tmp23, tmp24];
  IncomingRequestRowActionsTsx3.__closure = items5;
  IncomingRequestRowActionsTsx3.__workletHash = 11012038099485;
  IncomingRequestRowActionsTsx3.__initData = tmp22;
  const animatedStyle1 = tmp2Result4.useAnimatedStyle(IncomingRequestRowActionsTsx3);
  const items6 = [closure_11, , , , , , , ];
  const useAnimatedStyle3 = tmp2(tmp3[4]).useAnimatedStyle;
  tmp2(tmp3[4]);
  items6[1] = tmp2(tmp3[4]).withDelay;
  items6[2] = tmp2(tmp3[4]).withRepeat;
  items6[3] = tmp2(tmp3[5]).withTiming;
  items6[4] = pressed;
  items6[5] = tmp2(tmp3[4]).Easing;
  items6[6] = sharedValue2;
  items6[7] = sharedValue3;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  let c5;
  let c6;
  [tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34] = items6;
  class IncomingRequestRowActionsTsx4 {
    constructor() {
      let items;
      let obj3;
      let str = "-2deg";
      const tmp = c0;
      const tmp2 = c1;
      const tmp3 = c2;
      if (_undefined.get()) {
        str = "8deg";
      }
      const obj = { transform: items };
      const obj2 = { rotateZ: tmp(450, tmp2(tmp3(str, obj3), 4, true)) };
      obj3 = { duration: 150, easing: _undefined2.inOut(_undefined2.quad) };
      items = [obj2, { translateX: -_undefined3.get() / 2 }, ];
      ({ translateX: -_undefined3.get() / 2 });
      items[2] = { translateY: -_undefined4.get() / 2 };
      ({ translateY: -_undefined4.get() / 2 });
      return obj;
    }
  }
  const items7 = [tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34];
  IncomingRequestRowActionsTsx4.__closure = items7;
  IncomingRequestRowActionsTsx4.__workletHash = 16187142860645;
  IncomingRequestRowActionsTsx4.__initData = tmp27;
  const animatedStyle3 = useAnimatedStyle3(IncomingRequestRowActionsTsx4);
  const items8 = [closure_12, pressed];
  c0 = undefined;
  [tmp36, tmp37] = items8;
  const tmp2Result6 = tmp2(tmp3[4]);
  class IncomingRequestRowActionsTsx5 {
    constructor() {
      const value = _undefined.get();
      return { pointerEvents: "none" };
    }
  }
  const items9 = [tmp37];
  IncomingRequestRowActionsTsx5.__closure = items9;
  IncomingRequestRowActionsTsx5.__workletHash = 13146349595849;
  IncomingRequestRowActionsTsx5.__initData = tmp36;
  const animatedProps = tmp2Result6.useAnimatedProps(IncomingRequestRowActionsTsx5);
  const items10 = [applicationId, onAcceptIncomingRequest, pressed, user];
  const items11 = [applicationId, onDeclineIncomingRequest, user];
  const callback = onAcceptIncomingRequest.useCallback(() => {
    const result = pressed.set(true);
    const obj = AddFriendsScreenUtils;
    const obj2 = { userId: user.id, applicationId };
    const result1 = obj.acceptIncomingRequest(obj2);
    onAcceptIncomingRequest(user.id, applicationId);
  }, items10);
  const items12 = [user];
  const callback1 = onAcceptIncomingRequest.useCallback(() => {
    onDeclineIncomingRequest(user.id, applicationId);
    const obj = AddFriendsScreenUtils;
    const obj2 = { userId: user.id, applicationId };
    const result = obj.dismissIncomingRequest(obj2);
  }, items11);
  const obj5 = { style: tmp.container, children: items14 };
  const callback2 = onAcceptIncomingRequest.useCallback(() => {
    const obj = AddFriendsScreenUtils;
    obj.sendWave(user.id, true, "Incoming Friend Request");
  }, items12);
  const obj6 = {
    onLayout: function handleIconButtonsLayout(nativeEvent) {
      const result = sharedValue.set(nativeEvent.nativeEvent.layout.width);
    },
    style: animatedStyle,
    children: sharedValue1(Stack, obj7)
  };
  View = applicationId(tmp3[4]).View;
  obj7 = { direction: "horizontal", spacing: 8, children: items13 };
  Stack = tmp2(tmp3[7]).Stack;
  const obj8 = { size: "sm", variant: "tertiary", icon: applicationId(tmp3[9]), onPress: callback1, accessibilityLabel: ignoreRequestAccessibilityLabel, maxFontSizeMultiplier: 2 };
  const IconButton = tmp2(tmp3[8]).IconButton;
  items13 = [sharedValue(IconButton, obj8), ];
  const obj9 = { size: "sm", variant: "active", icon: applicationId(tmp3[10]), onPress: callback, accessibilityLabel: acceptRequestAccessibilityLabel, maxFontSizeMultiplier: 2 };
  const IconButton2 = tmp2(tmp3[8]).IconButton;
  items13[1] = sharedValue(IconButton2, obj9);
  items14 = [sharedValue(View, obj6), ];
  const obj10 = {
    style: animatedStyle2,
    onLayout: function handleButtonsLayout(nativeEvent) {
      const result = sharedValue1.set(nativeEvent.nativeEvent.layout.width);
    },
    children: sharedValue(Button, obj11)
  };
  const View2 = applicationId(tmp3[4]).View;
  const merged = Object.assign(animatedProps);
  obj11 = { size: "sm", variant: "secondary", text: intl.string(tmp2(tmp3[12]).t.n8nU4W), icon: sharedValue(View3, obj12), onPress: callback2 };
  Button = tmp2(tmp3[11]).Button;
  intl = tmp2(tmp3[12]).intl;
  let tmp47 = null;
  View3 = applicationId(tmp3[4]).View;
  const tmp42 = sharedValue1;
  const tmp43 = onDeclineIncomingRequest;
  const tmp45 = applicationId;
  if (animate) {
    tmp47 = animatedStyle1;
  }
  let tmp48 = null;
  obj12 = { style: tmp47, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: sharedValue(View4, obj13) };
  View4 = tmp45(tmp3[4]).View;
  if (animate) {
    tmp48 = animatedStyle3;
  }
  obj13 = {
    style: tmp48,
    onLayout: function handleWaveLayout(nativeEvent) {
      const result = sharedValue2.set(nativeEvent.nativeEvent.layout.width);
      const result1 = sharedValue3.set(nativeEvent.nativeEvent.layout.height);
    },
    children: sharedValue(tmp2(tmp3[13]).Text, { maxFontSizeMultiplier: 2, variant: "body-sm/normal", children: "\u{1F44B}" })
  };
  items14[1] = sharedValue(View2, obj10);
  return tmp42(tmp43, obj5);
}
