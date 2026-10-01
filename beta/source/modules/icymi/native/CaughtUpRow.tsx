// Module ID: 16154
// Function ID: 16155
// Name: CaughtUpRow
// Dependencies: [5, 32, 19, 17, 21, 4566, 4832, 16091, 576, 7799, 16108, 16104, 4693, 4837, 4531, 12585, 1115, 5281, 16130, 5293, 1094, 672, 2]
// Exports: default

// Module 16154 (CaughtUpRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ReanimatedRexport2 from "ReanimatedRexport" /* 4566 */;
import Text_Text from "Text/Text" /* 4832 */;
import timing from "timing" /* 4837 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createICYMIStyles from "createICYMIStyles" /* 16091 */;
import size from "module_2" /* 2 */;

const ReanimatedRexport = ReanimatedRexport2;
let c2, dependencyMap;

let metroImportAll;
let metroImportDefault;
let View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = ReanimatedRexport.createAnimatedComponent(Text_Text.Text);
let closure_10 = createICYMIStyles.createICYMIStyles((margin) => {
  const obj = { container: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", marginVertical: nativeDefault.space.PX_32 }, textContainer: { marginHorizontal: margin.margin, marginBottom: nativeDefault.space.PX_24 }, recommendedGuildsContainer: { flex: 1, marginBottom: nativeDefault.space.PX_24 }, iconWrapper: { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_24 }, icon: { height: 40, width: 40 }, headerText: { alignSelf: "center", marginBottom: nativeDefault.space.PX_8, textAlign: "center" }, subtitleText: { alignSelf: "center", textAlign: "center" }, buttonContainer: { flex: 1, width: "100%", gap: nativeDefault.space.PX_12, paddingHorizontal: margin.margin }, gradient: { position: "absolute", top: 0, left: 0, right: 0, height: 150 } };
  ({ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", marginVertical: nativeDefault.space.PX_32 });
  ({ marginHorizontal: margin.margin, marginBottom: nativeDefault.space.PX_24 });
  ({ flex: 1, marginBottom: nativeDefault.space.PX_24 });
  ({ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_24 });
  ({ alignSelf: "center", marginBottom: nativeDefault.space.PX_8, textAlign: "center" });
  ({ flex: 1, width: "100%", gap: nativeDefault.space.PX_12, paddingHorizontal: margin.margin });
  return obj;
});
const __initData = { code: "function CaughtUpRowTsx1(){const{visibleSharedValue,withTiming,Easing}=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withTiming(0,{duration:250,easing:Easing.bezier(0.5,1.8,0.5,1)}):-80}],opacity:visibleSharedValue.get()?withTiming(1,{duration:100,easing:Easing.out(Easing.bezierFn(0.33,1,0.68,1))}):0};}" };
const __initData2 = { code: "function CaughtUpRowTsx2(){const{visibleSharedValue,withDelay,withSequence,withTiming,Easing}=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withDelay(80,withSequence(withTiming(8,{duration:100,easing:Easing.inOut(Easing.ease)}),withTiming(0,{duration:300,easing:Easing.out(Easing.ease)}))):0}]};}" };
const __initData3 = { code: "function CaughtUpRowTsx3(){const{visibleSharedValue,withDelay,withSequence,withTiming,Easing}=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withDelay(115,withSequence(withTiming(8,{duration:150,easing:Easing.inOut(Easing.ease)}),withTiming(0,{duration:300,easing:Easing.out(Easing.ease)}))):0}]};}" };
let result = size.fileFinishedImporting("modules/icymi/native/CaughtUpRow.tsx");

export default function ExploreServersRow(visible) {
  let closure_2;
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj13;
  visible = visible.visible;
  dependencyMap = undefined;
  const tmp = closure_10();
  let obj = visible(4566);
  let sharedValue = obj.useSharedValue(false);
  let items = [visible, sharedValue];
  const effect = react.useEffect(() => {
    const tmp2 = visible && sharedValue.get() !== tmp;
    if (tmp2) {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(() => {
        const result = sharedValue.set(true);
      }, 500);
    }
  }, items);
  [first, dependencyMap] = react.useState(false);
  const callback = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let v1;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === sharedValue) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2(true);
            const obj5 = sharedValue(c2[9]);
            obj5.itemInteracted("caught_up", "caught_up", "press_explore");
            const obj4 = { itemId: "caught_up", itemType: "caught_up", actionParameters: { actionGestureType: "press", actionTargetElement: "browse_servers_button", actionIntentType: "open", actionDestinationType: null } };
            const obj6 = sharedValue(c2[9]);
            obj6.feedItemActioned(obj4);
            sharedValue = 1;
            const obj8 = tmp3(c2[10]);
            c2 = 1;
            const obj7 = { value: obj8.maybeFetchGuildDiscoveryCategories(), done: false };
            return obj7;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          let obj = { value, done: true };
          return obj;
        } else {
          const _setTimeout = setTimeout;
          let timerId = setTimeout(() => {
            const obj = visible(c2[11]);
            obj.pushICYMIInfoModal({ extendedOnboarding: true, skipIntro: true });
            const timerId = setTimeout(() => {
              closure_1_2(false);
            }, 500);
          }, 100);
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp7) {
        c2 = 3;
        throw tmp7;
      }
    }
  }), []);
  const callback1 = react.useCallback(() => {
    const obj = sharedValue(closure_2[9]);
    obj.itemInteracted("caught_up", "caught_up", "press_home");
    const obj2 = sharedValue(closure_2[9]);
    obj2.feedItemActioned({ itemId: "caught_up", itemType: "caught_up", actionParameters: { actionGestureType: "press", actionTargetElement: "back_to_home_button", actionIntentType: "navigate", actionDestinationType: "guild_home" } });
    const obj3 = visible(closure_2[12]);
    const rootNavigationRef = obj3.getRootNavigationRef();
    if (rootNavigationRef != null) {
      rootNavigationRef.navigate("tabs", { screen: "guilds" });
    }
  }, []);
  let obj2 = visible(4566);
  class E {
    constructor() {
      let Easing;
      let Easing3;
      let items;
      let num8;
      let out;
      let num = -80;
      const obj = sharedValue;
      if (sharedValue.get()) {
        const obj2 = { duration: 250, easing: Easing.bezier(0.5, 1.8, 0.5, 1) };
        const withTiming = timing.withTiming;
        timing;
        Easing = ReanimatedRexport2.Easing;
        num = withTiming(0, obj2);
      }
      const obj3 = { transform: items, opacity: num8 };
      items = [{ translateY: num }];
      num8 = 0;
      if (obj.get()) {
        const obj4 = { duration: 100, easing: out(Easing3.bezierFn(0.33, 1, 0.68, 1)) };
        const withTiming2 = timing.withTiming;
        timing;
        const Easing2 = ReanimatedRexport2.Easing;
        out = Easing2.out;
        Easing3 = ReanimatedRexport2.Easing;
        num8 = withTiming2(1, obj4);
      }
      return obj3;
    }
  }
  let obj3 = { visibleSharedValue: sharedValue, withTiming: visible(4837).withTiming, Easing: visible(4566).Easing };
  E.__closure = obj3;
  E.__workletHash = 6575188656069;
  E.__initData = __initData;
  const animatedStyle = obj2.useAnimatedStyle(E);
  let obj4 = visible(4566);
  const fn = function b() {
    let Easing;
    let Easing2;
    let items;
    let num = 0;
    if (sharedValue.get()) {
      const withDelay = ReanimatedRexport2.withDelay;
      ReanimatedRexport2;
      const withSequence = ReanimatedRexport2.withSequence;
      ReanimatedRexport2;
      const obj = { duration: 100, easing: Easing.inOut(ReanimatedRexport2.Easing.ease) };
      const withTiming = timing.withTiming;
      timing;
      Easing = ReanimatedRexport2.Easing;
      const withTimingResult = withTiming(8, obj);
      const obj2 = { duration: 300, easing: Easing2.out(ReanimatedRexport2.Easing.ease) };
      const withTiming2 = timing.withTiming;
      timing;
      Easing2 = ReanimatedRexport2.Easing;
      num = withDelay(80, withSequence(withTimingResult, withTiming2(0, obj2)));
    }
    const obj3 = { transform: items };
    items = [{ translateY: num }];
    return obj3;
  };
  let obj5 = { visibleSharedValue: sharedValue, withDelay: visible(4566).withDelay, withSequence: visible(4566).withSequence, withTiming: visible(4837).withTiming, Easing: visible(4566).Easing };
  fn.__closure = obj5;
  fn.__workletHash = 469742746264;
  fn.__initData = __initData2;
  const animatedStyle1 = obj4.useAnimatedStyle(fn);
  let obj6 = visible(4566);
  const fn2 = function x() {
    let Easing;
    let Easing2;
    let items;
    let num = 0;
    if (sharedValue.get()) {
      const withDelay = ReanimatedRexport2.withDelay;
      ReanimatedRexport2;
      const withSequence = ReanimatedRexport2.withSequence;
      ReanimatedRexport2;
      const obj = { duration: 150, easing: Easing.inOut(ReanimatedRexport2.Easing.ease) };
      const withTiming = timing.withTiming;
      timing;
      Easing = ReanimatedRexport2.Easing;
      const withTimingResult = withTiming(8, obj);
      const obj2 = { duration: 300, easing: Easing2.out(ReanimatedRexport2.Easing.ease) };
      const withTiming2 = timing.withTiming;
      timing;
      Easing2 = ReanimatedRexport2.Easing;
      num = withDelay(115, withSequence(withTimingResult, withTiming2(0, obj2)));
    }
    const obj3 = { transform: items };
    items = [{ translateY: num }];
    return obj3;
  };
  let obj7 = { visibleSharedValue: sharedValue, withDelay: visible(4566).withDelay, withSequence: visible(4566).withSequence, withTiming: visible(4837).withTiming, Easing: visible(4566).Easing };
  fn2.__closure = obj7;
  fn2.__workletHash = 14933607481025;
  fn2.__initData = __initData3;
  const animatedStyle2 = obj6.useAnimatedStyle(fn2);
  let obj8 = visible(4531);
  const token = obj8.useToken(sharedValue(576).colors.BACKGROUND_BRAND);
  const obj10 = { style: tmp.container, children: items5 };
  const obj11 = { style: tmp.textContainer, children: items2 };
  const obj9 = { children: items7 };
  const obj12 = { style: items1, children: closure_7(visible(12585).FlashIcon, obj13) };
  items1 = [tmp.iconWrapper, animatedStyle];
  View = sharedValue(4566).View;
  obj13 = { size: "custom", style: tmp.icon, color: "background-brand" };
  items2 = [closure_7(View, obj12), , ];
  const obj14 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: items3, children: intl.string(visible(1115).t.xjxffq) };
  items3 = [tmp.headerText, animatedStyle1];
  intl = visible(1115).intl;
  items2[1] = closure_7(closure_9, obj14);
  const obj15 = { variant: "text-md/normal", color: "text-default", style: items4, children: intl2.string(visible(1115).t.sAApb0) };
  items4 = [tmp.subtitleText, animatedStyle2];
  intl2 = visible(1115).intl;
  items2[2] = closure_7(closure_9, obj15);
  items5 = [closure_8(View, obj11), ];
  const obj16 = { style: tmp.buttonContainer, children: items6 };
  const obj17 = { size: "md", text: intl3.string(visible(1115).t.lNJYV8), grow: true, variant: "primary", onPress: callback, loading: first };
  const Button = visible(5281).Button;
  intl3 = visible(1115).intl;
  items6 = [closure_7(Button, obj17), ];
  const obj18 = { size: "md", text: intl4.string(visible(1115).t.AGrUbj), grow: true, variant: "secondary", onPress: callback1 };
  const Button2 = visible(5281).Button;
  intl4 = visible(1115).intl;
  items6[1] = closure_7(Button2, obj18);
  items5[1] = closure_8(View, obj16);
  items7 = [closure_8(View, obj10), closure_7(visible(16130).Separator, {}), ];
  const obj19 = { style: tmp.gradient, start: visible(1094).VerticalGradient.START, end: visible(1094).VerticalGradient.END, colors: items8, pointerEvents: "none" };
  const tmp12 = sharedValue(5293);
  items8 = [, ];
  const obj20 = sharedValue(672)(token);
  const alphaResult = obj20.alpha(0.2);
  items8[0] = alphaResult.hex();
  const obj22 = sharedValue(672)(token);
  const alphaResult1 = obj22.alpha(0);
  items8[1] = alphaResult1.hex();
  items7[2] = closure_7(tmp12, obj19);
  return closure_8(View, obj9);
};
