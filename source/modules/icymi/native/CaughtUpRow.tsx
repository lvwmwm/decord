// Module ID: 15116
// Function ID: 114051
// Name: ExploreServersRow
// Dependencies: []
// Exports: default

// Module 15116 (ExploreServersRow)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]).createAnimatedComponent(arg1(dependencyMap[6]).Text);
const importDefaultResult = importDefault(dependencyMap[5]);
let closure_10 = arg1(dependencyMap[7]).createICYMIStyles((margin) => {
  let obj = {};
  obj = { marginVertical: importDefault(dependencyMap[8]).space.PX_32 };
  obj.container = obj;
  obj = { marginHorizontal: margin.margin, marginBottom: importDefault(dependencyMap[8]).space.PX_24 };
  obj.textContainer = obj;
  obj.recommendedGuildsContainer = { flex: 1, marginBottom: importDefault(dependencyMap[8]).space.PX_24 };
  const obj2 = { cix: 0, y: 0, isArray: 0, marginBottom: importDefault(dependencyMap[8]).space.PX_24 };
  obj.iconWrapper = obj2;
  obj.icon = {};
  const obj1 = { flex: 1, marginBottom: importDefault(dependencyMap[8]).space.PX_24 };
  obj.headerText = { marginBottom: importDefault(dependencyMap[8]).space.PX_8 };
  obj.subtitleText = { "Bool(false)": null, "Bool(false)": null };
  const obj3 = { marginBottom: importDefault(dependencyMap[8]).space.PX_8 };
  obj.buttonContainer = { gap: importDefault(dependencyMap[8]).space.PX_12, paddingHorizontal: margin.margin };
  obj.gradient = { "Bool(false)": 543817730, "Bool(true)": -984547327, "Bool(true)": 74580481, "Bool(true)": 134217728, "Bool(true)": 1358954496 };
  return obj;
});
let closure_11 = { code: "function CaughtUpRowTsx1(){const{visibleSharedValue,withTiming,Easing}=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withTiming(0,{duration:250,easing:Easing.bezier(0.5,1.8,0.5,1)}):-80}],opacity:visibleSharedValue.get()?withTiming(1,{duration:100,easing:Easing.out(Easing.bezierFn(0.33,1,0.68,1))}):0};}" };
let closure_12 = { code: "function CaughtUpRowTsx2(){const{visibleSharedValue,withDelay,withSequence,withTiming,Easing}=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withDelay(80,withSequence(withTiming(8,{duration:100,easing:Easing.inOut(Easing.ease)}),withTiming(0,{duration:300,easing:Easing.out(Easing.ease)}))):0}]};}" };
let closure_13 = { code: "function CaughtUpRowTsx3(){const{visibleSharedValue,withDelay,withSequence,withTiming,Easing}=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withDelay(115,withSequence(withTiming(8,{duration:150,easing:Easing.inOut(Easing.ease)}),withTiming(0,{duration:300,easing:Easing.out(Easing.ease)}))):0}]};}" };
const obj2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/icymi/native/CaughtUpRow.tsx");

export default function ExploreServersRow(visible) {
  visible = visible.visible;
  const arg1 = visible;
  const tmp = callback5();
  let obj = arg1(dependencyMap[5]);
  const sharedValue = obj.useSharedValue(false);
  const importDefault = sharedValue;
  const items = [visible, sharedValue];
  const effect = React.useEffect(() => {
    let tmp = visible;
    if (visible) {
      tmp = sharedValue.get() !== visible;
    }
    if (tmp) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const result = closure_1.set(true);
      }, 500);
    }
  }, items);
  const tmp4 = callback2(React.useState(false), 2);
  const dependencyMap = tmp5;
  // CreateGeneratorClosureLongIndex (0x67)
  const callback = React.useCallback(callback(tmp5), []);
  const callback1 = React.useCallback(() => {
    let obj = sharedValue(tmp5[9]);
    obj.itemInteracted("caught_up", "caught_up", "press_home");
    obj = { "Bool(false)": null, "Bool(false)": null, actionParameters: { "Bool(false)": "center", "Bool(false)": "transparent", "Bool(false)": "row", "Bool(false)": "center" } };
    sharedValue(tmp5[9]).feedItemActioned(obj);
    const obj2 = sharedValue(tmp5[9]);
    const rootNavigationRef = visible(tmp5[12]).getRootNavigationRef();
    if (null != rootNavigationRef) {
      obj = { screen: "guilds" };
      rootNavigationRef.navigate("tabs", obj);
    }
  }, []);
  let obj1 = arg1(dependencyMap[5]);
  class E {
    constructor() {
      obj = {};
      obj = {};
      num = -80;
      if (closure_1.get()) {
        tmp = visible;
        tmp2 = closure_2;
        num2 = 13;
        obj3 = visible(closure_2[13]);
        obj1 = {};
        num3 = 250;
        obj1.duration = 250;
        num4 = 5;
        Easing = visible(closure_2[5]).Easing;
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
        tmp5 = closure_2;
        num12 = 13;
        obj5 = visible(closure_2[13]);
        obj2 = {};
        num13 = 100;
        obj2.duration = 100;
        num14 = 5;
        Easing2 = visible(closure_2[5]).Easing;
        Easing3 = visible(closure_2[5]).Easing;
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
  obj = { visibleSharedValue: sharedValue, withTiming: arg1(dependencyMap[13]).withTiming, Easing: arg1(dependencyMap[5]).Easing };
  E.__closure = obj;
  E.__workletHash = 6575188656069;
  E.__initData = closure_11;
  const animatedStyle = obj1.useAnimatedStyle(E);
  let obj3 = arg1(dependencyMap[5]);
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
  obj = { visibleSharedValue: sharedValue, withDelay: arg1(dependencyMap[5]).withDelay, withSequence: arg1(dependencyMap[5]).withSequence, withTiming: arg1(dependencyMap[13]).withTiming, Easing: arg1(dependencyMap[5]).Easing };
  fn.__closure = obj;
  fn.__workletHash = 469742746264;
  fn.__initData = closure_12;
  const animatedStyle1 = obj3.useAnimatedStyle(fn);
  let obj5 = arg1(dependencyMap[5]);
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
  obj1 = { visibleSharedValue: sharedValue, withDelay: arg1(dependencyMap[5]).withDelay, withSequence: arg1(dependencyMap[5]).withSequence, withTiming: arg1(dependencyMap[13]).withTiming, Easing: arg1(dependencyMap[5]).Easing };
  fn2.__closure = obj1;
  fn2.__workletHash = 14933607481025;
  fn2.__initData = closure_13;
  const animatedStyle2 = obj5.useAnimatedStyle(fn2);
  let obj7 = arg1(dependencyMap[14]);
  const token = obj7.useToken(importDefault(dependencyMap[8]).colors.BACKGROUND_BRAND);
  const obj2 = {};
  obj3 = { style: tmp.container };
  const obj4 = { style: tmp.textContainer };
  obj5 = { style: items1 };
  const items1 = [tmp.iconWrapper, animatedStyle];
  obj5.children = callback3(arg1(dependencyMap[15]).FlashIcon, { style: tmp.icon });
  const items2 = [callback3(importDefault(dependencyMap[5]).View, obj5), , ];
  obj7 = { style: items3 };
  const items3 = [tmp.headerText, animatedStyle1];
  const intl = arg1(dependencyMap[16]).intl;
  obj7.children = intl.string(arg1(dependencyMap[16]).t.xjxffq);
  items2[1] = callback3(closure_9, obj7);
  const obj8 = { style: items4 };
  const items4 = [tmp.subtitleText, animatedStyle2];
  const intl2 = arg1(dependencyMap[16]).intl;
  obj8.children = intl2.string(arg1(dependencyMap[16]).t.sAApb0);
  items2[2] = callback3(closure_9, obj8);
  obj4.children = items2;
  const items5 = [callback4(View, obj4), ];
  const obj9 = { style: tmp.buttonContainer };
  const obj10 = {};
  const intl3 = arg1(dependencyMap[16]).intl;
  obj10.text = intl3.string(arg1(dependencyMap[16]).t.lNJYV8);
  obj10.onPress = callback;
  obj10.loading = tmp4[0];
  const items6 = [callback3(arg1(dependencyMap[17]).Button, obj10), ];
  const obj11 = { 9223372036854775807: "End Star 01", 0: 1, 9223372036854775807: 1, 0: null };
  const intl4 = arg1(dependencyMap[16]).intl;
  obj11.text = intl4.string(arg1(dependencyMap[16]).t.AGrUbj);
  obj11.onPress = callback1;
  items6[1] = callback3(arg1(dependencyMap[17]).Button, obj11);
  obj9.children = items6;
  items5[1] = callback4(View, obj9);
  obj3.children = items5;
  const items7 = [callback4(View, obj3), callback3(arg1(dependencyMap[18]).Separator, {}), ];
  const obj12 = { style: tmp.gradient, start: arg1(dependencyMap[20]).VerticalGradient.START, end: arg1(dependencyMap[20]).VerticalGradient.END };
  const obj6 = { style: tmp.icon };
  const tmp12 = importDefault(dependencyMap[19]);
  const obj20 = importDefault(dependencyMap[21])(token);
  const items8 = [importDefault(dependencyMap[21])(token).alpha(0.2).hex(), ];
  const alphaResult = importDefault(dependencyMap[21])(token).alpha(0.2);
  const obj22 = importDefault(dependencyMap[21])(token);
  items8[1] = importDefault(dependencyMap[21])(token).alpha(0).hex();
  obj12.colors = items8;
  obj12.pointerEvents = "none";
  items7[2] = callback3(tmp12, obj12);
  obj2.children = items7;
  return callback4(View, obj2);
};
