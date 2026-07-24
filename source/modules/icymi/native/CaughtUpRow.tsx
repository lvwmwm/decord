// Module ID: 15289
// Function ID: 116619
// Name: ExploreServersRow
// Dependencies: [5, 57, 31, 27, 33, 3991, 4126, 15226, 689, 8365, 15243, 15239, 3982, 4131, 3834, 11960, 1212, 4543, 15265, 4554, 668, 666, 2]
// Exports: default

// Module 15289 (ExploreServersRow)
import module_3991 from "module_3991";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createICYMIStyles from "createICYMIStyles";
import importDefaultResult from "module_3991";

let closure_7;
let closure_8;
const require = arg1;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = require("module_3991").createAnimatedComponent(require("Text").Text);
let closure_10 = createICYMIStyles.createICYMIStyles((margin) => {
  let obj = {};
  obj = { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", marginVertical: importDefault(689).space.PX_32 };
  obj.container = obj;
  obj = { marginHorizontal: margin.margin, marginBottom: importDefault(689).space.PX_24 };
  obj.textContainer = obj;
  obj.recommendedGuildsContainer = { flex: 1, marginBottom: importDefault(689).space.PX_24 };
  const obj2 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: importDefault(689).space.PX_24 };
  obj.iconWrapper = obj2;
  obj.icon = { height: 40, width: 40 };
  const obj3 = { alignSelf: "center", marginBottom: importDefault(689).space.PX_8, textAlign: "center" };
  obj.headerText = obj3;
  obj.subtitleText = { alignSelf: "center", textAlign: "center" };
  const obj4 = { flex: 1, width: "100%", gap: importDefault(689).space.PX_12, paddingHorizontal: margin.margin };
  obj.buttonContainer = obj4;
  obj.gradient = { position: "absolute", top: 0, left: 0, right: 0, height: 150 };
  return obj;
});
let closure_11 = { code: "function CaughtUpRowTsx1(){const{visibleSharedValue,withTiming,Easing}=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withTiming(0,{duration:250,easing:Easing.bezier(0.5,1.8,0.5,1)}):-80}],opacity:visibleSharedValue.get()?withTiming(1,{duration:100,easing:Easing.out(Easing.bezierFn(0.33,1,0.68,1))}):0};}" };
let closure_12 = { code: "function CaughtUpRowTsx2(){const{visibleSharedValue,withDelay,withSequence,withTiming,Easing}=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withDelay(80,withSequence(withTiming(8,{duration:100,easing:Easing.inOut(Easing.ease)}),withTiming(0,{duration:300,easing:Easing.out(Easing.ease)}))):0}]};}" };
let closure_13 = { code: "function CaughtUpRowTsx3(){const{visibleSharedValue,withDelay,withSequence,withTiming,Easing}=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withDelay(115,withSequence(withTiming(8,{duration:150,easing:Easing.inOut(Easing.ease)}),withTiming(0,{duration:300,easing:Easing.out(Easing.ease)}))):0}]};}" };
let result = require("result").fileFinishedImporting("modules/icymi/native/CaughtUpRow.tsx");

export default function ExploreServersRow(visible) {
  visible = visible.visible;
  let tmp = callback5();
  let obj = visible(3991);
  const sharedValue = obj.useSharedValue(false);
  let items = [visible, sharedValue];
  const effect = React.useEffect(() => {
    let tmp = visible;
    if (visible) {
      tmp = sharedValue.get() !== visible;
    }
    if (tmp) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const result = outer1_1.set(true);
      }, 500);
    }
  }, items);
  const tmp4 = callback2(React.useState(false), 2);
  const dependencyMap = tmp5;
  // CreateGeneratorClosureLongIndex (0x67)
  callback = React.useCallback(callback(tmp5), []);
  const callback1 = React.useCallback(() => {
    let obj = sharedValue(tmp5[9]);
    obj.itemInteracted("caught_up", "caught_up", "press_home");
    obj = { itemId: "caught_up", itemType: "caught_up", actionParameters: { actionGestureType: "press", actionTargetElement: "back_to_home_button", actionIntentType: "navigate", actionDestinationType: "guild_home" } };
    sharedValue(tmp5[9]).feedItemActioned(obj);
    const obj2 = sharedValue(tmp5[9]);
    const rootNavigationRef = visible(tmp5[12]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      obj = { screen: "guilds" };
      rootNavigationRef.navigate("tabs", obj);
    }
  }, []);
  let obj1 = visible(3991);
  class E {
    constructor() {
      obj = {};
      obj = {};
      num = -80;
      if (closure_1.get()) {
        tmp = visible;
        tmp2 = c2;
        num2 = 13;
        obj3 = visible(c2[13]);
        obj1 = {};
        num3 = 250;
        obj1.duration = 250;
        num4 = 5;
        Easing = visible(c2[5]).Easing;
        num5 = 0.5;
        num6 = 1.8;
        num7 = 1;
        tmp3 = Easing;
        num8 = 0.5;
        num9 = 0.5;
        obj1.easing = Easing.bezier(0.5, 1.8, 0.5, 1);
        num10 = 0;
        num = obj3.withTiming(0, obj1);
      }
      obj.translateY = num;
      items = [];
      items[0] = obj;
      obj.transform = items;
      num11 = 0;
      if (closure_1.get()) {
        tmp4 = visible;
        tmp5 = c2;
        num12 = 13;
        obj5 = visible(c2[13]);
        obj2 = {};
        num13 = 100;
        obj2.duration = 100;
        num14 = 5;
        Easing2 = visible(c2[5]).Easing;
        Easing3 = visible(c2[5]).Easing;
        num15 = 0.33;
        num16 = 1;
        num17 = 0.68;
        tmp6 = Easing3;
        num18 = 1;
        num19 = 1;
        obj2.easing = Easing2.out(Easing3.bezierFn(0.33, 1, 0.68, 1));
        num11 = obj5.withTiming(1, obj2);
      }
      obj.opacity = num11;
      return obj;
    }
  }
  obj = { visibleSharedValue: sharedValue, withTiming: visible(4131).withTiming, Easing: visible(3991).Easing };
  E.__closure = obj;
  E.__workletHash = 6575188656069;
  E.__initData = closure_11;
  const animatedStyle = obj1.useAnimatedStyle(E);
  let obj3 = visible(3991);
  const fn = function b() {
    let obj = {};
    obj = {};
    let num = 0;
    if (sharedValue.get()) {
      const obj3 = visible(tmp5[5]);
      const obj4 = visible(tmp5[5]);
      obj = { duration: 100 };
      const Easing = visible(tmp5[5]).Easing;
      obj.easing = Easing.inOut(visible(tmp5[5]).Easing.ease);
      const obj5 = visible(tmp5[13]);
      const withTimingResult = visible(tmp5[13]).withTiming(8, obj);
      const obj1 = { duration: 300 };
      const Easing2 = visible(tmp5[5]).Easing;
      obj1.easing = Easing2.out(visible(tmp5[5]).Easing.ease);
      num = obj3.withDelay(80, obj4.withSequence(withTimingResult, visible(tmp5[13]).withTiming(0, obj1)));
      const obj7 = visible(tmp5[13]);
    }
    obj.translateY = num;
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj = { visibleSharedValue: sharedValue, withDelay: visible(3991).withDelay, withSequence: visible(3991).withSequence, withTiming: visible(4131).withTiming, Easing: visible(3991).Easing };
  fn.__closure = obj;
  fn.__workletHash = 469742746264;
  fn.__initData = closure_12;
  const animatedStyle1 = obj3.useAnimatedStyle(fn);
  let obj5 = visible(3991);
  const fn2 = function x() {
    let obj = {};
    obj = {};
    let num = 0;
    if (sharedValue.get()) {
      const obj3 = visible(tmp5[5]);
      const obj4 = visible(tmp5[5]);
      obj = { duration: 150 };
      const Easing = visible(tmp5[5]).Easing;
      obj.easing = Easing.inOut(visible(tmp5[5]).Easing.ease);
      const obj5 = visible(tmp5[13]);
      const withTimingResult = visible(tmp5[13]).withTiming(8, obj);
      const obj1 = { duration: 300 };
      const Easing2 = visible(tmp5[5]).Easing;
      obj1.easing = Easing2.out(visible(tmp5[5]).Easing.ease);
      num = obj3.withDelay(115, obj4.withSequence(withTimingResult, visible(tmp5[13]).withTiming(0, obj1)));
      const obj7 = visible(tmp5[13]);
    }
    obj.translateY = num;
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  obj1 = { visibleSharedValue: sharedValue, withDelay: visible(3991).withDelay, withSequence: visible(3991).withSequence, withTiming: visible(4131).withTiming, Easing: visible(3991).Easing };
  fn2.__closure = obj1;
  fn2.__workletHash = 14933607481025;
  fn2.__initData = closure_13;
  const animatedStyle2 = obj5.useAnimatedStyle(fn2);
  let obj7 = visible(3834);
  const token = obj7.useToken(sharedValue(689).colors.BACKGROUND_BRAND);
  let obj2 = {};
  obj3 = { style: tmp.container };
  let obj4 = { style: tmp.textContainer };
  obj5 = { style: items1 };
  items1 = [tmp.iconWrapper, animatedStyle];
  const obj6 = { size: "custom", style: tmp.icon, color: "background-brand" };
  obj5.children = callback3(visible(11960).FlashIcon, obj6);
  const items2 = [callback3(sharedValue(3991).View, obj5), , ];
  obj7 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary" };
  const items3 = [tmp.headerText, animatedStyle1];
  obj7.style = items3;
  const intl = visible(1212).intl;
  obj7.children = intl.string(visible(1212).t.xjxffq);
  items2[1] = callback3(closure_9, obj7);
  const obj8 = { variant: "text-md/normal", color: "text-default" };
  const items4 = [tmp.subtitleText, animatedStyle2];
  obj8.style = items4;
  const intl2 = visible(1212).intl;
  obj8.children = intl2.string(visible(1212).t.sAApb0);
  items2[2] = callback3(closure_9, obj8);
  obj4.children = items2;
  const items5 = [callback4(View, obj4), ];
  const obj9 = { style: tmp.buttonContainer };
  const obj10 = { size: "md", text: null, grow: true, variant: "primary" };
  const intl3 = visible(1212).intl;
  obj10.text = intl3.string(visible(1212).t.lNJYV8);
  obj10.onPress = callback;
  obj10.loading = tmp4[0];
  const items6 = [callback3(visible(4543).Button, obj10), ];
  const obj11 = { size: "md", text: null, grow: true, variant: "secondary" };
  const intl4 = visible(1212).intl;
  obj11.text = intl4.string(visible(1212).t.AGrUbj);
  obj11.onPress = callback1;
  items6[1] = callback3(visible(4543).Button, obj11);
  obj9.children = items6;
  items5[1] = callback4(View, obj9);
  obj3.children = items5;
  const items7 = [callback4(View, obj3), callback3(visible(15265).Separator, {}), ];
  const obj12 = { style: tmp.gradient, start: visible(668).VerticalGradient.START, end: visible(668).VerticalGradient.END };
  const tmp12 = sharedValue(4554);
  const obj20 = sharedValue(666)(token);
  const items8 = [sharedValue(666)(token).alpha(0.2).hex(), ];
  const alphaResult = sharedValue(666)(token).alpha(0.2);
  const obj22 = sharedValue(666)(token);
  items8[1] = sharedValue(666)(token).alpha(0).hex();
  obj12.colors = items8;
  obj12.pointerEvents = "none";
  items7[2] = callback3(tmp12, obj12);
  obj2.children = items7;
  return callback4(View, obj2);
};
