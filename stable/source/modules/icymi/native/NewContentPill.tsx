// Module ID: 18985
// Function ID: 18986
// Name: NewContentPill
// Dependencies: [32, 19, 17, 5041, 9013, 21, 5170, 575, 9626, 7053, 504, 5401, 9026, 9030, 1652, 5793, 1502, 7076, 13300, 5783, 1113, 5177, 2]
// Exports: default

// Module 18985 (NewContentPill)
import nativeDefault from "native" /* 575 */;
import GuildIcon from "GuildIcon" /* 7053 */;
import ClipView from "ClipView" /* 9626 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 5041 */;
import ICYMIStore from "ICYMIStore" /* 9013 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

const GuildIconDefault = GuildIcon;
const ClipViewDefault = ClipView;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function CutoutGuildIcon(guild) {
  let items;
  let obj2;
  let obj3;
  let tmp2;
  let tmp3;
  guild = guild.guild;
  const obj = { style: { width: 24, height: 24 }, children: React4(tmp2, obj2) };
  obj2 = { cutouts: items, children: React4(tmp3, obj3) };
  size = { shape: ClipView.CutoutShape.RoundedRect, x: 18, y: -4, width: 32, height: 32, cornerRadius: nativeDefault.radii.md };
  const tmp = closure_11();
  items = [size];
  tmp2 = ClipViewDefault;
  obj3 = { guild, size: GuildIcon.GuildIconSizes.XSMALL, style: tmp.guildIconBG };
  tmp3 = GuildIconDefault;
  return React4(metroRequire, obj);
}
({ ActivityIndicator: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, guildIconBG: obj3, refreshMorePillContainer: { position: "absolute", top: 0, left: 0, height: 32, width: "100%", zIndex: 100 } };
obj2 = { alignSelf: "center", alignItems: "center", flexDirection: "row", paddingRight: 12, paddingLeft: 8, paddingVertical: 6, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_11 = createStyles(obj);
let closure_12 = { overshootClamping: true, stiffness: 20, damping: 15, mass: 0.03 };
let closure_14 = { code: "(function NewContentPillTsx1(){let[withSpring,showingPill,springConfig]=this.__closure;return{transform:[{translateY:withSpring(showingPill?12:0,springConfig)}],opacity:withSpring(showingPill?1:0,springConfig,'respect-motion-settings')};})" };
let closure_15 = { code: "(function NewContentPillTsx2(){let[showingPill]=this.__closure;return{pointerEvents:showingPill?'box-none':'none'};})" };
let size = size_mod;
const result = size.fileFinishedImporting("modules/icymi/native/NewContentPill.tsx");

export default function NewContentPill(onPress) {
  let PressableOpacity;
  let PressableOpacity2;
  let intl;
  let items11;
  let items12;
  let items13;
  let items14;
  let obj12;
  let obj13;
  let obj6;
  let obj9;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp36Result2;
  let tmp37;
  let tmp9Result;
  onPress = onPress.onPress;
  const isRefreshing = onPress.isRefreshing;
  let stateFromStoresArray;
  let first;
  let closure_7;
  let isFocused;
  let first1;
  let closure_10;
  let tmp = closure_11();
  let tmp2 = onPress;
  let tmp3 = stateFromStoresArray;
  let obj = onPress(stateFromStoresArray[10]);
  let items = [isFocused];
  stateFromStoresArray = obj.useStateFromStoresArray(items, () => isFocused.getNewUnreadDehydratedItems());
  let obj2 = onPress(stateFromStoresArray[10]);
  const items1 = [isFocused];
  const stateFromStores = obj2.useStateFromStores(items1, () => isFocused.hasNewContent(), []);
  const tmp7 = stateFromStores(first.useState(stateFromStoresArray), 2);
  first = tmp7[0];
  let closure_5 = tmp7[1];
  const items2 = [first];
  const tmp10 = isRefreshing(stateFromStoresArray[11])();
  let closure_6 = first.useMemo(() => {
    const items = [];
    const item = first.forEach((data) => {
      const tmp = onPress;
      const tmp2 = stateFromStoresArray;
      if (items.length < onPress(stateFromStoresArray[12]).MIN_ITEMS_FOR_NEW_PILL) {
        const tmpResult = tmp(tmp2[13]);
        const tmp4 = tmpResult.isGuildItem(data) && !items.includes(data.data.guild_id);
        if (tmp4) {
          items.push(data.data.guild_id);
        }
      }
    });
    return items;
  }, items2);
  const items3 = [closure_7];
  const obj4 = onPress(stateFromStoresArray[10]);
  const stateFromStoresArray1 = obj4.useStateFromStoresArray(items3, () => {
    let guild;
    const mapped = closure_6.map((item) => guild.getGuild(item));
    return mapped.filter(Boolean);
  });
  const tmp11 = stateFromStores(first.useState(false), 2);
  closure_7 = tmp11[1];
  const items4 = [closure_14, , , ];
  const useAnimatedStyle = tmp2(tmp3[14]).useAnimatedStyle;
  tmp2(tmp3[14]);
  items4[1] = tmp2(tmp3[15]).withSpring;
  items4[2] = stateFromStores && tmp11[0];
  items4[3] = closure_12;
  let c0;
  let c1;
  let c2;
  [tmp14, tmp15, tmp16, tmp17] = items4;
  const tmp6 = stateFromStores;
  class NewContentPillTsx1 {
    constructor() {
      let items;
      let num2;
      let tmp3;
      let num = 0;
      if (c1) {
        num = 12;
      }
      const obj = { transform: items, opacity: _undefined(num2, tmp3, "respect-motion-settings") };
      items = [{ translateY: _undefined(num, c2) }];
      num2 = 0;
      ({ translateY: _undefined(num, c2) });
      tmp3 = c2;
      if (c1) {
        num2 = 1;
      }
      return obj;
    }
  }
  const items5 = [tmp15, tmp16, tmp17];
  NewContentPillTsx1.__closure = items5;
  NewContentPillTsx1.__workletHash = 15743373779199;
  NewContentPillTsx1.__initData = tmp14;
  const animatedStyle = useAnimatedStyle(NewContentPillTsx1);
  const items6 = [closure_15, stateFromStores && tmp11[0]];
  c0 = undefined;
  [tmp19, tmp20] = items6;
  const tmp2Result4 = tmp2(tmp3[14]);
  class NewContentPillTsx2 {
    constructor() {
      let pointerEvents = "none";
      if (c0) {
        pointerEvents = "box-none";
      }
      return { pointerEvents };
    }
  }
  const items7 = [tmp20];
  NewContentPillTsx2.__closure = items7;
  NewContentPillTsx2.__workletHash = 15727177943954;
  NewContentPillTsx2.__initData = tmp19;
  const animatedProps = tmp2Result4.useAnimatedProps(NewContentPillTsx2);
  const tmp2Result5 = tmp2(tmp3[16]);
  isFocused = tmp2Result5.useIsFocused();
  const tmp6Result = tmp6(first.useState(false), 2);
  first1 = tmp6Result[0];
  closure_10 = tmp6Result[1];
  const items8 = [stateFromStores, isFocused, first1];
  const layoutEffect = obj3.useLayoutEffect(() => {
    let tmp = first1;
    if (!tmp) {
      const tmp2 = isFocused;
      if (tmp2) {
        const tmp3 = stateFromStores;
        if (tmp3) {
          closure_7(false);
        }
        closure_10(isFocused);
      }
    }
    if (tmp) {
      tmp = isFocused;
    }
    if (tmp) {
      tmp = !stateFromStores;
    }
    if (tmp) {
      closure_7(true);
    }
  }, items8);
  const items9 = [isRefreshing, stateFromStoresArray, stateFromStores];
  const effect = obj3.useEffect(() => {
    const tmp = isRefreshing;
    if (!tmp) {
      closure_5(stateFromStoresArray);
    }
  }, items9);
  const items10 = [onPress];
  const callback = obj3.useCallback(() => {
    onPress();
  }, items10);
  if (0 === stateFromStoresArray1.length) {
    const obj5 = { style: items11, animatedProps, children: closure_10(PressableOpacity, obj6) };
    items11 = [tmp.refreshMorePillContainer, animatedStyle];
    const View = tmp9(tmp3[14]).View;
    obj6 = { onPress: callback, style: tmp.container, children: items12 };
    PressableOpacity = tmp2(tmp3[17]).PressableOpacity;
    items12 = [first1(tmp2(tmp3[18]).ArrowSmallUpIcon, { size: "md", color: "interactive-text-active" }), ];
    const obj7 = { style: { marginLeft: 4 }, variant: "heading-sm/semibold", color: "interactive-text-active", children: intl.string(tmp2(tmp3[20]).t["4Nl0Rl"]) };
    const Text = tmp2(tmp3[19]).Text;
    intl = tmp2(tmp3[20]).intl;
    items12[1] = first1(Text, obj7);
    tmp36Result2 = first1(View, obj5);
  } else {
    let tmp36Result;
    const obj8 = { style: items13, animatedProps, children: tmp37(PressableOpacity2, obj9) };
    items13 = [tmp.refreshMorePillContainer, animatedStyle];
    const View2 = tmp9(tmp3[14]).View;
    obj9 = { onPress: callback, style: tmp.container, children: items14 };
    PressableOpacity2 = tmp2(tmp3[17]).PressableOpacity;
    tmp37 = closure_10;
    if (isRefreshing) {
      const tmp2Result6 = tmp2(tmp3[21]);
      const isThemeDarkResult = tmp2Result6.isThemeDark(tmp10);
      const unsafe_rawColors = tmp9(tmp3[7]).unsafe_rawColors;
      const obj10 = { color: isThemeDarkResult ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500 };
      tmp36Result = tmp36(closure_5, obj10);
    } else {
      tmp36Result = tmp36(tmp2(tmp3[18]).ArrowSmallUpIcon, { size: "md", color: "interactive-text-active" });
    }
    items14 = [tmp36Result, , ];
    let num = 1;
    const substr = stateFromStoresArray1.slice(0, stateFromStoresArray1.length - 1);
    items14[1] = substr.map((guild, index) => {
      let obj2;
      let num = 4;
      const tmp2 = closure_6;
      if (index > 0) {
        num = -2;
      }
      const obj = { style: { marginLeft: num }, children: first1(CutoutGuildIcon, obj2) };
      obj2 = { guild };
      return first1(tmp2, obj, guild.id);
    });
    let num2 = 4;
    const tmp31 = closure_6;
    if (stateFromStoresArray1.length > 1) {
      num2 = -2;
    }
    const obj11 = { style: obj12, children: first1(tmp9Result, obj13) };
    obj12 = { marginLeft: num2 };
    obj13 = { guild: stateFromStoresArray1[stateFromStoresArray1.length - 1], size: tmp2(tmp3[9]).GuildIconSizes.XSMALL, style: tmp.guildIconBG };
    tmp9Result = isRefreshing(tmp3[9]);
    items14[2] = first1(tmp31, obj11);
    tmp36Result2 = tmp36(View2, obj8);
  }
  return tmp36Result2;
};
