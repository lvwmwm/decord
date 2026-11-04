// Module ID: 18860
// Function ID: 18861
// Name: CaughtUpRow
// Dependencies: [5, 32, 19, 17, 21, 1652, 5761, 18797, 575, 9065, 18814, 18810, 5323, 5378, 5732, 15073, 1113, 5768, 18838, 5723, 1092, 671, 2]
// Exports: default

// Module 18860 (CaughtUpRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5761 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import module_1652 from "module_1652" /* 1652 */;
import createICYMIStyles from "createICYMIStyles" /* 18797 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let metroImportAll;
let metroImportDefault;
let View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = module_1652.createAnimatedComponent(Text_Text.Text);
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
let closure_11 = { code: "(function CaughtUpRowTsx1(){let[visibleSharedValue,withTiming,Easing]=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withTiming(0,{duration:250,easing:Easing.bezier(0.5,1.8,0.5,1)}):-80}],opacity:visibleSharedValue.get()?withTiming(1,{duration:100,easing:Easing.out(Easing.bezierFn(0.33,1,0.68,1))}):0};})" };
let closure_12 = { code: "(function CaughtUpRowTsx2(){let[visibleSharedValue,withDelay,withSequence,withTiming,Easing]=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withDelay(80,withSequence(withTiming(8,{duration:100,easing:Easing.inOut(Easing.ease)}),withTiming(0,{duration:300,easing:Easing.out(Easing.ease)}))):0}]};})" };
let closure_13 = { code: "(function CaughtUpRowTsx3(){let[visibleSharedValue,withDelay,withSequence,withTiming,Easing]=this.__closure;return{transform:[{translateY:visibleSharedValue.get()?withDelay(115,withSequence(withTiming(8,{duration:150,easing:Easing.inOut(Easing.ease)}),withTiming(0,{duration:300,easing:Easing.out(Easing.ease)}))):0}]};})" };
let result = size.fileFinishedImporting("modules/icymi/native/CaughtUpRow.tsx");

export default function ExploreServersRow(visible) {
  let closure_2;
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items7;
  let items8;
  let items9;
  let obj6;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp25;
  let tmp26;
  let tmp27;
  let tmp28;
  let tmp29;
  let tmp30;
  visible = visible.visible;
  dependencyMap = undefined;
  const tmp = closure_10();
  let tmp2 = visible;
  const tmp3 = dependencyMap;
  let obj = visible(1652);
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
  const items1 = [closure_11, sharedValue, , ];
  const useAnimatedStyle = visible(1652).useAnimatedStyle;
  const tmp10 = visible(1652);
  items1[2] = visible(5378).withTiming;
  items1[3] = visible(1652).Easing;
  let c0;
  let c1;
  let c2;
  [tmp11, tmp12, tmp13, tmp14] = items1;
  class CaughtUpRowTsx1 {
    constructor() {
      let items;
      let num8;
      let num = -80;
      const obj = _undefined;
      if (_undefined.get()) {
        const obj2 = { duration: 250, easing: _undefined3.bezier(0.5, 1.8, 0.5, 1) };
        num = _undefined2(0, obj2);
      }
      const obj3 = { transform: items, opacity: num8 };
      items = [{ translateY: num }];
      num8 = 0;
      if (obj.get()) {
        const obj4 = { duration: 100, easing: _undefined3.out(_undefined3.bezierFn(0.33, 1, 0.68, 1)) };
        num8 = _undefined2(1, obj4);
      }
      return obj3;
    }
  }
  const items2 = [tmp12, tmp13, tmp14];
  CaughtUpRowTsx1.__closure = items2;
  CaughtUpRowTsx1.__workletHash = 808134122268;
  CaughtUpRowTsx1.__initData = tmp11;
  const animatedStyle = useAnimatedStyle(CaughtUpRowTsx1);
  const items3 = [closure_12, sharedValue, , , , ];
  const useAnimatedStyle2 = tmp2(1652).useAnimatedStyle;
  tmp2(1652);
  items3[2] = tmp2(1652).withDelay;
  items3[3] = tmp2(1652).withSequence;
  items3[4] = tmp2(5378).withTiming;
  items3[5] = tmp2(1652).Easing;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  let c3;
  let c4;
  [tmp17, tmp18, tmp19, tmp20, tmp21, tmp22] = items3;
  class CaughtUpRowTsx2 {
    constructor() {
      let items;
      let num = 0;
      if (_undefined.get()) {
        const obj = { duration: 100, easing: _undefined5.inOut(_undefined5.ease) };
        const obj2 = { duration: 300, easing: _undefined5.out(_undefined5.ease) };
        const tmp5 = _undefined4(8, obj);
        num = _undefined2(80, _undefined3(tmp5, _undefined4(0, obj2)));
      }
      const obj3 = { transform: items };
      items = [{ translateY: num }];
      return obj3;
    }
  }
  const items4 = [tmp18, tmp19, tmp20, tmp21, tmp22];
  CaughtUpRowTsx2.__closure = items4;
  CaughtUpRowTsx2.__workletHash = 5492465188513;
  CaughtUpRowTsx2.__initData = tmp17;
  const animatedStyle2 = useAnimatedStyle2(CaughtUpRowTsx2);
  const items5 = [closure_13, sharedValue, , , , ];
  const useAnimatedStyle3 = tmp2(1652).useAnimatedStyle;
  tmp2(1652);
  items5[2] = tmp2(1652).withDelay;
  items5[3] = tmp2(1652).withSequence;
  items5[4] = tmp2(5378).withTiming;
  items5[5] = tmp2(1652).Easing;
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp25, tmp26, tmp27, tmp28, tmp29, tmp30] = items5;
  class CaughtUpRowTsx3 {
    constructor() {
      let items;
      let num = 0;
      if (_undefined.get()) {
        const obj = { duration: 150, easing: _undefined5.inOut(_undefined5.ease) };
        const obj2 = { duration: 300, easing: _undefined5.out(_undefined5.ease) };
        const tmp5 = _undefined4(8, obj);
        num = _undefined2(115, _undefined3(tmp5, _undefined4(0, obj2)));
      }
      const obj3 = { transform: items };
      items = [{ translateY: num }];
      return obj3;
    }
  }
  const items6 = [tmp26, tmp27, tmp28, tmp29, tmp30];
  CaughtUpRowTsx3.__closure = items6;
  CaughtUpRowTsx3.__workletHash = 13859124718008;
  CaughtUpRowTsx3.__initData = tmp25;
  const animatedStyle3 = useAnimatedStyle3(CaughtUpRowTsx3);
  const tmp2Result4 = tmp2(5732);
  const token = tmp2Result4.useToken(sharedValue(575).colors.BACKGROUND_BRAND);
  let obj2 = { children: items13 };
  let obj3 = { style: tmp.container, children: items11 };
  let obj4 = { style: tmp.textContainer, children: items8 };
  let obj5 = { style: items7, children: closure_7(tmp2(15073).FlashIcon, obj6) };
  items7 = [tmp.iconWrapper, animatedStyle];
  View = sharedValue(1652).View;
  obj6 = { size: "custom", style: tmp.icon, color: "background-brand" };
  items8 = [closure_7(View, obj5), , ];
  let obj7 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: items9, children: intl.string(tmp2(1113).t.xjxffq) };
  items9 = [tmp.headerText, animatedStyle2];
  intl = tmp2(1113).intl;
  items8[1] = closure_7(closure_9, obj7);
  let obj8 = { variant: "body-md/normal", color: "text-default", style: items10, children: intl2.string(tmp2(1113).t.sAApb0) };
  items10 = [tmp.subtitleText, animatedStyle3];
  intl2 = tmp2(1113).intl;
  items8[2] = closure_7(closure_9, obj8);
  items11 = [closure_8(View, obj4), ];
  const obj9 = { style: tmp.buttonContainer, children: items12 };
  const obj10 = { size: "md", text: intl3.string(tmp2(1113).t.lNJYV8), grow: true, variant: "primary", onPress: callback, loading: first };
  const Button = tmp2(5768).Button;
  intl3 = tmp2(1113).intl;
  items12 = [closure_7(Button, obj10), ];
  const obj11 = { size: "md", text: intl4.string(tmp2(1113).t.AGrUbj), grow: true, variant: "secondary", onPress: callback1 };
  const Button2 = tmp2(5768).Button;
  intl4 = tmp2(1113).intl;
  items12[1] = closure_7(Button2, obj11);
  items11[1] = closure_8(View, obj9);
  items13 = [closure_8(View, obj3), closure_7(tmp2(18838).Separator, {}), ];
  const obj12 = { style: tmp.gradient, start: tmp2(1092).VerticalGradient.START, end: tmp2(1092).VerticalGradient.END, colors: items14, pointerEvents: "none" };
  const tmp33 = sharedValue(5723);
  items14 = [, ];
  const obj14 = sharedValue(671)(token);
  const alphaResult = obj14.alpha(0.2);
  items14[0] = alphaResult.hex();
  const obj16 = sharedValue(671)(token);
  const alphaResult1 = obj16.alpha(0);
  items14[1] = alphaResult1.hex();
  items13[2] = closure_7(tmp33, obj12);
  return closure_8(View, obj2);
};
