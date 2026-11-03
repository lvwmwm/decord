// Module ID: 18669
// Function ID: 18670
// Name: ContactSuggestionActions
// Dependencies: [19, 17, 21, 1652, 5141, 575, 18245, 1705, 5377, 5757, 1187, 18670, 5754, 1113, 2]
// Exports: ContactSuggestionActions

// Module 18669 (ContactSuggestionActions)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import AddFriendsScreenUtils from "AddFriendsScreenUtils" /* 18245 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let _undefined2, _undefined4, _undefined5, _undefined6, _undefined7, _undefined8, _undefined9, closure_0, closure_1, num, num2, num3, num4, num5, tmp13, tmp7, tmp8;

let Easing;
let Easing2;
let Easing3;
let Easing4;
let hasOwnProperty;
let metroRequire;
let obj6;
let View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { duration: 200, easing: Easing.in(_mod1652.Easing.quad) };
Easing = _mod1652.Easing;
let obj2 = { duration: 250, easing: Easing2.in(_mod1652.Easing.quad) };
Easing2 = _mod1652.Easing;
let obj3 = { duration: 250, easing: Easing3.in(_mod1652.Easing.quad) };
Easing3 = _mod1652.Easing;
let obj4 = { duration: 250, easing: Easing4.out(_mod1652.Easing.quad) };
Easing4 = _mod1652.Easing;
let closure_11 = { mass: 1, stiffness: 172, damping: 17.3 };
let obj5 = { icon: obj6 };
obj6 = { position: "absolute", top: 4, zIndex: 2, color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT, opacity: 0 };
let closure_12 = createStyles.createStyles(obj5);
let closure_13 = { code: "(function ContactSuggestionActionsTsx1(){let[right,opacity,scale]=this.__closure;return{right:right.get(),opacity:opacity.get(),transform:[{scale:scale.get()}]};})" };
let closure_14 = { code: "(function ContactSuggestionActionsTsx2(){let[buttonOpacity]=this.__closure;return{opacity:buttonOpacity.get()};})" };
let closure_15 = { code: "(function ContactSuggestionActionsTsx3(){let[added]=this.__closure;return added.get();})" };
let closure_16 = { code: "(function ContactSuggestionActionsTsx4(finished){let[scheduleOnRN,finishAnimationCallback]=this.__closure;if(finished)scheduleOnRN(finishAnimationCallback);})" };
let closure_17 = { code: "(function ContactSuggestionActionsTsx5(finished){let[opacity,withDelay,withTiming,OPACITY_OUT_CONFIG,scale,SCALE_CONFIG,right,TRANSLATE_OUT_CONFIG,_worklet_15755955387829_init_data,scheduleOnRN,finishAnimationCallback]=this.__closure;if(!finished)return;opacity.set(withDelay(1000,withTiming(0,OPACITY_OUT_CONFIG)));scale.set(withDelay(1000,withTiming(0.5,SCALE_CONFIG)));right.set(withDelay(1000,withTiming(-8,TRANSLATE_OUT_CONFIG,'respect-motion-settings',function ContactSuggestionActionsTsx4Factory([_worklet_15755955387829_init_data,scheduleOnRN,finishAnimationCallback]){const ContactSuggestionActionsTsx4=function(finished){if(finished)scheduleOnRN(finishAnimationCallback);};ContactSuggestionActionsTsx4.__closure=[scheduleOnRN,finishAnimationCallback];ContactSuggestionActionsTsx4.__workletHash=15755955387829;ContactSuggestionActionsTsx4.__initData=_worklet_15755955387829_init_data;return ContactSuggestionActionsTsx4;}([_worklet_15755955387829_init_data,scheduleOnRN,finishAnimationCallback]))));})" };
let closure_18 = { code: "(function ContactSuggestionActionsTsx6(added){let[animate,scheduleOnRN,finishAnimationCallback,scale,withTiming,SCALE_CONFIG,opacity,OPACITY_CONFIG,buttonOpacity,right,withSpring,SPRING_CONFIG,_worklet_4132135122659_init_data,withDelay,OPACITY_OUT_CONFIG,TRANSLATE_OUT_CONFIG,_worklet_15755955387829_init_data]=this.__closure;if(!animate){scheduleOnRN(finishAnimationCallback);return;}if(added){scale.set(withTiming(1,SCALE_CONFIG));opacity.set(withTiming(1,OPACITY_CONFIG));buttonOpacity.set(withTiming(0,OPACITY_CONFIG));right.set(withSpring(12,SPRING_CONFIG,'respect-motion-settings',function ContactSuggestionActionsTsx5Factory([_worklet_4132135122659_init_data,opacity,withDelay,withTiming,OPACITY_OUT_CONFIG,scale,SCALE_CONFIG,right,TRANSLATE_OUT_CONFIG,_worklet_15755955387829_init_data,scheduleOnRN,finishAnimationCallback]){const ContactSuggestionActionsTsx5=function(finished){if(!finished)return;opacity.set(withDelay(1000,withTiming(0,OPACITY_OUT_CONFIG)));scale.set(withDelay(1000,withTiming(0.5,SCALE_CONFIG)));right.set(withDelay(1000,withTiming(-8,TRANSLATE_OUT_CONFIG,'respect-motion-settings',function ContactSuggestionActionsTsx4Factory([_worklet_15755955387829_init_data,scheduleOnRN,finishAnimationCallback]){const ContactSuggestionActionsTsx4=function(finished){if(finished)scheduleOnRN(finishAnimationCallback);};ContactSuggestionActionsTsx4.__closure=[scheduleOnRN,finishAnimationCallback];ContactSuggestionActionsTsx4.__workletHash=15755955387829;ContactSuggestionActionsTsx4.__initData=_worklet_15755955387829_init_data;return ContactSuggestionActionsTsx4;}([_worklet_15755955387829_init_data,scheduleOnRN,finishAnimationCallback]))));};ContactSuggestionActionsTsx5.__closure=[opacity,withDelay,withTiming,OPACITY_OUT_CONFIG,scale,SCALE_CONFIG,right,TRANSLATE_OUT_CONFIG,_worklet_15755955387829_init_data,scheduleOnRN,finishAnimationCallback];ContactSuggestionActionsTsx5.__workletHash=4132135122659;ContactSuggestionActionsTsx5.__initData=_worklet_4132135122659_init_data;return ContactSuggestionActionsTsx5;}([_worklet_4132135122659_init_data,opacity,withDelay,withTiming,OPACITY_OUT_CONFIG,scale,SCALE_CONFIG,right,TRANSLATE_OUT_CONFIG,_worklet_15755955387829_init_data,scheduleOnRN,finishAnimationCallback])));}else{buttonOpacity.set(1);scale.set(0.5);opacity.set(0);right.set(30);}})" };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/components/ContactSuggestionActions.tsx");

export function ContactSuggestionActions(user) {
  let Button;
  let Icon;
  let intl;
  let items10;
  let items11;
  let obj11;
  let obj9;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  let tmp31;
  let tmp32;
  let tmp33;
  let tmp34;
  let tmp35;
  let tmp36;
  let tmp37;
  let tmp38;
  let tmp9;
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
  let tmp2 = user;
  let tmp3 = onAddSuggestion;
  obj = user(onAddSuggestion[3]);
  const sharedValue = obj.useSharedValue(30);
  obj2 = user(onAddSuggestion[3]);
  const sharedValue1 = obj2.useSharedValue(0.5);
  obj3 = user(onAddSuggestion[3]);
  const sharedValue2 = obj3.useSharedValue(0);
  obj4 = user(onAddSuggestion[3]);
  const sharedValue3 = obj4.useSharedValue(1);
  let items = [onFinishAnimation, user];
  const callback = onFinishAnimation.useCallback(() => {
    if (null != onFinishAnimation) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        onFinishAnimation(user);
      }, 1000);
    }
  }, items);
  let items1 = [closure_13, sharedValue, sharedValue2, sharedValue1];
  let c0;
  let c1;
  let c2;
  [tmp9, tmp10, tmp11, tmp12] = items1;
  const obj5 = onFinishAnimation;
  const obj6 = user(onAddSuggestion[3]);
  class ContactSuggestionActionsTsx1 {
    constructor() {
      let items;
      obj = { right: _undefined.get(), opacity: _undefined2.get(), transform: items };
      items = [{ scale: _undefined3.get() }];
      ({ scale: _undefined3.get() });
      return obj;
    }
  }
  const items2 = [tmp10, tmp11, tmp12];
  ContactSuggestionActionsTsx1.__closure = items2;
  ContactSuggestionActionsTsx1.__workletHash = 1508257222955;
  ContactSuggestionActionsTsx1.__initData = tmp9;
  const animatedStyle = obj6.useAnimatedStyle(ContactSuggestionActionsTsx1);
  const items3 = [closure_14, sharedValue3];
  c0 = undefined;
  [tmp14, tmp15] = items3;
  const tmp2Result = tmp2(tmp3[3]);
  class ContactSuggestionActionsTsx2 {
    constructor() {
      obj = { opacity: _undefined.get() };
      return obj;
    }
  }
  const items4 = [tmp15];
  ContactSuggestionActionsTsx2.__closure = items4;
  ContactSuggestionActionsTsx2.__workletHash = 4559914341574;
  ContactSuggestionActionsTsx2.__initData = tmp14;
  const items5 = [onAddSuggestion, user, added, animate, sharedValue, sharedValue2, sharedValue1, sharedValue3];
  const animatedStyle1 = tmp2Result.useAnimatedStyle(ContactSuggestionActionsTsx2);
  const callback1 = obj5.useCallback(() => {
    obj = AddFriendsScreenUtils;
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
  }, items5);
  const items6 = [closure_15, added];
  c0 = undefined;
  [tmp19, tmp20] = items6;
  const tmp2Result2 = tmp2(tmp3[3]);
  class ContactSuggestionActionsTsx3 {
    constructor() {
      return _undefined.get();
    }
  }
  const items7 = [tmp20];
  ContactSuggestionActionsTsx3.__closure = items7;
  ContactSuggestionActionsTsx3.__workletHash = 303935681858;
  ContactSuggestionActionsTsx3.__initData = tmp19;
  const items8 = [closure_18, animate, , , , , , , , , , , , , , , , ];
  const useAnimatedReaction = tmp2Result2.useAnimatedReaction;
  items8[2] = tmp2(tmp3[7]).scheduleOnRN;
  items8[3] = callback;
  items8[4] = sharedValue1;
  items8[5] = tmp2(tmp3[8]).withTiming;
  items8[6] = obj3;
  items8[7] = sharedValue2;
  items8[8] = sharedValue2;
  items8[9] = sharedValue3;
  items8[10] = sharedValue;
  items8[11] = tmp2(tmp3[9]).withSpring;
  items8[12] = closure_11;
  items8[13] = closure_17;
  items8[14] = tmp2(tmp3[3]).withDelay;
  items8[15] = sharedValue3;
  items8[16] = obj4;
  items8[17] = closure_16;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  let c3;
  let c4;
  let c5;
  let c6;
  let c7;
  let c8;
  let c9;
  let c10;
  let c11;
  let c12;
  let c13;
  let c14;
  let c15;
  let c16;
  [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38] = items8;
  class ContactSuggestionActionsTsx6 {
    constructor(arg0) {
      let tmp33;
      let tmp34;
      let tmp35;
      let tmp36;
      let tmp37;
      let tmp38;
      let tmp39;
      let tmp40;
      let tmp41;
      let tmp42;
      let tmp43;
      let tmp44;
      let tmp = c0;
      if (tmp) {
        const tmp5 = arg0;
        if (tmp5) {
          const tmp16 = c5;
          let result = _undefined4.set(_undefined5(1, c5));
          const tmp18 = _undefined6;
          let result1 = _undefined6.set(_undefined5(1, c7));
          let result2 = _undefined7.set(_undefined5(0, c7));
          let items = [c12, _undefined6, c13, _undefined5, c14, _undefined4, c5, _undefined8, c15, c16, _undefined2, c2];
          c0 = undefined;
          _undefined2 = undefined;
          c2 = undefined;
          _undefined4 = undefined;
          _undefined5 = undefined;
          c5 = undefined;
          _undefined6 = undefined;
          c7 = undefined;
          _undefined7 = undefined;
          _undefined8 = undefined;
          _undefined9 = undefined;
          [tmp33, tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44] = items;
          class ContactSuggestionActionsTsx5 {
            constructor(arg0) {
              tmp = arg0;
              if (tmp) {
                tmp2 = closure_0;
                tmp5 = closure_3;
                num = 0;
                tmp3 = closure_1;
                tmp4 = closure_2;
                num2 = 1000;
                result = closure_0.set(closure_1(1000, closure_2(0, closure_3)));
                tmp7 = closure_4;
                tmp8 = closure_5;
                num3 = 0.5;
                result1 = closure_4.set(closure_1(1000, closure_2(0.5, closure_5)));
                tmp11 = closure_7;
                tmp12 = closure_8;
                items = [, , ];
                items[0] = closure_8;
                tmp13 = closure_9;
                items[1] = closure_9;
                tmp14 = closure_10;
                items[2] = closure_10;
                closure_0 = undefined;
                closure_1 = undefined;
                tmp15 = items;
                [tmp16, tmp17, tmp18] = items;
                class ContactSuggestionActionsTsx4 {
                  constructor(arg0) {
                    tmp = arg0;
                    if (tmp) {
                      tmp2 = closure_0;
                      tmp3 = closure_1;
                      tmp4 = closure_0(closure_1);
                    }
                    return;
                  }
                }
                items1 = [, ];
                items1[0] = tmp17;
                items1[1] = tmp18;
                ContactSuggestionActionsTsx4.__closure = items1;
                num4 = 15755955387829;
                ContactSuggestionActionsTsx4.__workletHash = 15755955387829;
                ContactSuggestionActionsTsx4.__initData = tmp16;
                str = "respect-motion-settings";
                num5 = -8;
                tmp19 = tmp11;
                tmp20 = ContactSuggestionActionsTsx4;
                tmp10 = closure_6;
                result2 = closure_6.set(tmp3(1000, tmp4(-8, tmp11, "respect-motion-settings", ContactSuggestionActionsTsx4)));
              }
              return;
            }
          }
          let items1 = [tmp34, tmp35, tmp36, tmp37, tmp38, tmp39, tmp40, tmp41, tmp42, tmp43, tmp44];
          ContactSuggestionActionsTsx5.__closure = items1;
          ContactSuggestionActionsTsx5.__workletHash = 4132135122659;
          ContactSuggestionActionsTsx5.__initData = tmp33;
          const result3 = _undefined8.set(_undefined9(12, tmp24, "respect-motion-settings", ContactSuggestionActionsTsx5));
        } else {
          const result4 = _undefined7.set(1);
          const result5 = _undefined4.set(0.5);
          const result6 = _undefined6.set(0);
          const result7 = _undefined8.set(30);
        }
      } else {
        let tmp3 = c2;
        let tmp4 = _undefined2(c2);
      }
    }
  }
  const items9 = [tmp22, tmp23, tmp24, tmp25, tmp26, tmp27, tmp28, tmp29, tmp30, tmp31, tmp32, tmp33, tmp34, tmp35, tmp36, tmp37, tmp38];
  ContactSuggestionActionsTsx6.__closure = items9;
  ContactSuggestionActionsTsx6.__workletHash = 3747678974505;
  ContactSuggestionActionsTsx6.__initData = tmp21;
  const animatedReaction = useAnimatedReaction(ContactSuggestionActionsTsx3, ContactSuggestionActionsTsx6);
  const obj7 = { children: items11 };
  const obj8 = { pointerEvents: "none", style: items10, children: sharedValue(Icon, obj9) };
  items10 = [tmp.icon, animatedStyle];
  View = added(tmp3[3]).View;
  obj9 = { source: added(tmp3[11]), color: tmp.icon.color };
  Icon = tmp2(tmp3[10]).Icon;
  items11 = [sharedValue(View, obj8), ];
  const obj10 = { style: animatedStyle1, children: sharedValue(Button, obj11) };
  const View2 = added(tmp3[3]).View;
  obj11 = { variant: "secondary", size: str, grow: false, text: intl.string(tmp2(tmp3[13]).t.OYkgVk), onPress: callback1 };
  Button = tmp2(tmp3[12]).Button;
  intl = tmp2(tmp3[13]).intl;
  items11[1] = sharedValue(View2, obj10);
  return sharedValue1(animate, obj7);
}
